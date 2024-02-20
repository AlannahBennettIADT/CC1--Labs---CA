class StackedChart {
    constructor(obj) {
        this.data = obj.data;

        this.chartWidth = obj.chartWidth;
        this.chartHeight = obj.chartHeight;
        this.chartType = obj.chartType;

        this.xPos = obj.xPos;
        this.yPos = obj.yPos;
        this.axisLineColour = obj.axisLineColour;

        this.barColour = obj.barColour;
        this.barWidth = obj.barWidth;
        this.yValue = obj.yValue;
        this.xValue = obj.xValue;

        this.labelColour = obj.labelColour;
        this.labelRotation = obj.labelRotation;
        this.labelTextSize = obj.labelTextSize;
        this.YLabel = obj.YLabel;
        this.LabelFont = obj.labelFont;
        //Tick Properties
        this.tickWidth = obj.tickWidth;
        this.tickWeight = obj.tickWeight;
        this.numTicks = obj.numTicks;
        this.tickColour = obj.tickColour;
        this.tickStrokeLength = obj.tickStrokeLength;
        this.tickPadding = obj.tickPadding;
        this.tickTextSize = obj.tickTextSize;

        // this.maxValue = max(this.data.map(d => d[this.yValue]));
        // //this doesn't work
        this.maxValue = max(this.calculatingTotal());
        this.scale = int(this.chartHeight / this.maxValue);
    }

    //Getting an array of total values ( This works correctly)
    calculatingTotal() {
        // console.log(this.xValue); 
        let totalArray = [];

        for (let i = 0; i < this.data.length; i++) {
            let tempTotal = 0;
            for (let j = 0; j < this.xValue.length; j++) {
                tempTotal += +(this.data[i][this.xValue[j]]);
            }
            totalArray.push(tempTotal);
        }
        // console.log(totalArray);

        //need this line
        return totalArray;
    }




    render() {
        console.log(this.maxValue);
        console.log(this.scale)
        
        push();

        translate(this.xPos, this.yPos);
        stroke(this.axisLineColour)
        line(0, 0, 0, -this.chartHeight);
        line(0, 0, this.chartWidth, 0);


        noStroke();
        fill(255);
        textSize(16);
        textAlign(CENTER);
        textFont(this.LabelFont);
        text(this.YLabel, this.chartHeight / 2, -this.chartHeight - this.scale * 3);


        let gap = (this.chartWidth - (this.data.length * this.barWidth)) / (this.data.length + 1);

        //this map gets all the labels for the x axis into one array
        let labels = this.data.map((l) => {
            return l[this.xValue];
        });


        // console.log(this.yValue)
        // console.log(labels)

        push();
        translate(gap, 0);
        for (let i = 0; i < this.data.length; i++) {
            push();
            // Stacked Bars
            for (let j = 0; j < this.xValue.length; j++) {
                let currentValue = this.data[i][this.xValue[j]];
                let barHeight = -currentValue * this.scale;


                // Getting the 100% bar chart
                if (this.chartType == "full") {
                    let totalArray = this.calculatingTotal();
                    let barHeight = -currentValue / totalArray[i] * this.chartHeight;
                    fill(this.barColour[j]);
                    noStroke();
                    rect(0, 0, this.barWidth, barHeight);
                    translate(0, barHeight);
                } else {
                    fill(this.barColour[j]);
                    noStroke();
                    rect(0, 0, this.barWidth, barHeight);
                    translate(0, barHeight);
                }


                // if (this.chartType == "line") {
                //     stroke(255);
                //     strokeWeight(5);
                //     if (j === 1) {
                //         point(this.barWidth / 2, -currentValue * this.scale)
                //     }
                //     strokeWeight(2);
                //     if (i > 0) {
                //         stroke(255);
                //         strokeWeight(2);
                //         let x1 = (j - 1) * (this.barWidth + gap) + this.barWidth / 2;
                //         let y1 = -this.data[i - 1][this.xValue] * this.scale;
                //         let x2 = j * (this.barWidth + gap) + this.barWidth / 2;
                //         let y2 = -this.data[i][this.xValue] * this.scale;
                //         line(x1, y1, x2, y2);
                //     }
                // }

                // translate(0, barHeight);
            }
            

            pop();



            noStroke();
            fill(this.labelColour);
            if (this.labelRotation == 0) {
                textAlign(CENTER, CENTER);
            } else {
                textAlign(LEFT, CENTER);
            }
            textSize(this.labelTextSize);

            push();
            translate(this.barWidth / 2, 10);
            rotate(this.labelRotation);
            // text(labels[i],0,0);

            pop();
            translate(gap + this.barWidth, 0);
        }
        pop();


        if (this.chartType == "line") {
            strokeWeight(1);
            stroke(255);
            let totalArray = this.calculatingTotal();
            // line(0, -this.chartHeight / 2, this.chartWidth, -this.chartHeight / 2)
            let sum = 0;
            for (let i = 0; i <totalArray.length; i++) {
                    sum += (totalArray[i]);
                    console.log(totalArray[i])
                }
            let avg = sum / (totalArray.length-1);
            line(0,-avg, this.chartWidth, -avg)
           console.log(avg)
        }



        stroke(this.tickColour);
        strokeWeight(this.tickWeight);


        let tickGap = this.chartHeight / this.numTicks;
        for (let i = 0; i <= this.numTicks; i++) {
            push();
            line(0, -i * tickGap, -this.tickWidth, -i * tickGap);
            noStroke();
            textSize(10);
            textAlign(RIGHT, CENTER);
            let value = this.maxValue / this.numTicks * i;
            text(value.toFixed(2), -this.tickPadding - this.tickStrokeLength, -i * tickGap);
            pop();
        }
        pop();


    }
}