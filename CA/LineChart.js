class LineChart {
    constructor(obj) {
        // Data Properties
        this.data = obj.data;


        // Chart Pos Properties:
        this.chartWidth = obj.chartWidth;
        this.chartHeight = obj.chartHeight;
        this.xPos = obj.xPos;
        this.yPos = obj.yPos;
        this.axisLineColour = obj.axisLineColour;
        this.axisLineWeight = obj.axisLineWeight;
        this.axislabelRotation = obj.axislabelRotation;
        this.yAxisLabelText = obj.yAxisLabelText;
        this.AxislabelFont = obj.AxislabelFont;

        // Bar Propeties
        this.barColour = obj.barColour;
        this.labelColour = obj.labelColour;
        this.barWidth = obj.barWidth;
        this.yValue = obj.yValue;
        this.xValue = obj.xValue;

        // Label Properties
        this.YLabel = obj.YLabel;
        this.YLabelOffset = obj.YLabelOffset;
        this.YLabelSize = obj.YLabelSize;
    
        this.labelRotation = obj.labelRotation;
        this.labelTextSize = obj.labelTextSize;
        this.LabelFont = obj.labelFont;

        this.legendLabels = obj.legendLabels;

        // Tick Properties
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
        push();
    
        translate(this.xPos, this.yPos);
        stroke(this.axisLineColour);
        strokeWeight(this.axisLineWeight)
        line(0, 0, 0, -this.chartHeight);
        line(0, 0, this.chartWidth, 0);
    
        

        //Title Label
        noStroke();
        fill(this.labelColour);
        textSize(this.YLabelSize);
        textAlign(CENTER);
        textFont(this.LabelFont)
        text(this.YLabel,this.chartHeight/2,-this.chartHeight-this.YLabelOffset);


        textFont(this.AxislabelFont)

        //Y Axis Label
        push();
        textSize(this.tickTextSize)
    
        rotate(this.axislabelRotation);
        text(this.yAxisLabelText, this.chartWidth/3,-this.chartHeight/3)
        pop();


        //X Axis Label
        text(this.xValue,this.chartWidth/2,this.chartHeight/3.5)
        textFont(this.LabelFont)
    
  


        //Creating the legend
        for (let i = 0; i < this.legendLabels.length; i++) {

            fill(this.barColour[i]);
            ellipse(this.chartWidth - 100, 80 + (i * 50), 15, 15); 
            
            textAlign(LEFT, CENTER);
            fill(this.tickColour); 
            textSize(this.labelTextSize); 
            text(this.legendLabels[i], this.chartWidth - 100 + 20, 80 + (i * 50));
          }

  
        let gap = (this.chartWidth - (this.data.length * this.barWidth)) / (this.data.length + 1);
    
        let labels = this.data.map((entry) => {
            return entry[this.xValue];
        });
    
        //old code

        // let data01 = [];
        // let data02 = [];

        //     for (let i = 0; i < this.data.length; i++) {
        //     data01.push(parseFloat(this.data[i]['Female']));
        //     data02.push(parseFloat(this.data[i]['Male']));
        //     }


        //Splitting the data into two 
        let data01 = this.data.map(entry => parseFloat(entry['Female']));
        let data02 = this.data.map(entry => parseFloat(entry['Male']));


    
        push();
        translate(gap, 0);
    
        //Using a for each to go through each data set
        [data01, data02].forEach((data, index) => {
            data.forEach((value, i) => {
                let x = i * gap;
                let y = -value * this.scale;
                strokeWeight(4)
                stroke(255);
                point(x, y); 
    
                //Conecting lines
                strokeWeight(2)
                stroke(this.barColour[index])
                if (i > 0) {
                    let x1 = (i - 1) * gap;
                    let y1 = -data[i - 1] * this.scale;
                    let x2 = i * gap;
                    let y2 = -value * this.scale;
                    line(x1, y1, x2, y2);
                }


                //Creating labels
                noStroke();
                fill(this.labelColour);
                if (this.labelRotation === 0) {
                    textAlign(CENTER, CENTER);
                } else {
                    textAlign(LEFT, CENTER);
                }
                textSize(this.labelTextSize);
                push();
                translate(i * (this.barWidth + gap), 10);
                rotate(this.labelRotation);
                text(labels[i], 0, 0);
                pop();  
            });
        });
    
        pop();
    
        // Render ticks
        stroke(this.tickColour);
        strokeWeight(this.tickWeight);
    
        let tickGap = this.chartHeight / this.numTicks;

        for (let i = 0; i <= this.numTicks; i++) {
            line(0, -i * tickGap, -this.tickWidth, -i * tickGap);
            noStroke();
            textSize(this.tickTextSize);
            textAlign(RIGHT, CENTER);
            let value = this.maxValue / this.numTicks * i;
            text(value.toFixed(2), -this.tickPadding - this.tickStrokeLength, -i * tickGap);
        }
    
        pop();
    }
}
