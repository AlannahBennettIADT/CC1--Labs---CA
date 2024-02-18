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

        this.maxValue = max(this.data.map(d => d[this.yValue]));
        this.scale = int(this.chartHeight / this.maxValue);
    }

    render() {
        console.log(this.maxValue)
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

        // // console.log(this.yValue.length);
        // // console.log(this.yValue);
        console.log(this.yValue)
        console.log(labels)

        push();

        
        translate(gap, 0);
        for (let i = 0; i < this.data.length; i++) {
            push();
            let total = 0; // Variable to keep track of the total height
            for (let j = 0; j < this.xValue.length; j++) {
                let currentValue = this.data[i][this.xValue[j]];
                if (this.chartType === "full" && j > 0) {
                    let prevValue = this.data[i][this.xValue[j - 1]];
                    // Calculate scale based on the difference between current and previous value
                    this.scale = ((prevValue - currentValue) / this.maxValue);
                }
                fill(this.barColour[j]);
                rect(0, 0, this.barWidth, -currentValue * this.scale);
                translate(0, -currentValue * this.scale);
                total += currentValue * this.scale; // Update total height
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