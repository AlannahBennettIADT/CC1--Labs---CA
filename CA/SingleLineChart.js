class SingleLineChart {
    constructor(obj) {
        // Data Properties
        this.data = obj.data;
        this.dataSet = obj.dataSet;

        // Chart Pos Properties:
        this.chartWidth = obj.chartWidth;
        this.chartHeight = obj.chartHeight;
        this.xPos = obj.xPos;
        this.yPos = obj.yPos;
        this.axisLineColour = obj.axisLineColour;

        // Bar Propeties
        this.barColour = obj.barColour;
        this.labelColour = obj.labelColour;
        this.barWidth = obj.barWidth;
        this.yValue = obj.yValue;
        this.xValue = obj.xValue;

        // Label Properties
        this.YLabel = obj.YLabel;
        this.labelRotation = obj.labelRotation;
        this.labelTextSize = obj.labelTextSize;
        this.LabelFont = obj.labelFont;

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
        line(0, 0, 0, -this.chartHeight);
        line(0, 0, this.chartWidth, 0);

        noStroke();
        fill(255);
        textSize(16);
        textAlign(CENTER);
        textFont(this.LabelFont);
        text(this.YLabel, this.chartHeight/2, -this.chartHeight - this.scale*3);

        let gap = (this.chartWidth - (this.data.length * this.barWidth)) / (this.data.length + 1);

        let labels = this.data.map((age) => {
            return age[this.xValue];
        });


        push();
        translate(gap, 0);
            for (let i = 0; i < this.data.length; i++) {
                strokeWeight(6);
                stroke(255);
                point(i * (this.barWidth + gap), -this.data[i][this.yValue] * this.scale);

                strokeWeight(2);
                stroke(255);
                if (i > 0) {
                    let x1 = (i - 1) * (this.barWidth + gap);
                    let y1 = -this.data[i - 1][this.yValue] * this.scale;
                    let x2 = i * (this.barWidth + gap);     
                    let y2 = -this.data[i][this.yValue] * this.scale;
                    line(x1, y1, x2, y2);
                }

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
