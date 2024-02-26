class PieChart {
  constructor(obj) {
    this.data = obj.data;


    //Chart Properties
    this.chartWidth = obj.chartWidth;
    this.chartHeight = obj.chartHeight;
    this.chartType = obj.chartType;
    this.xPos = obj.xPos;
    this.yPos = obj.yPos;
    this.axisLineColour = obj.axisLineColour;

    //Bar Properties
    this.barColour = obj.barColour;
    this.barWidth = obj.barWidth;
    this.yValue = obj.yValue;
    this.xValue = obj.xValue;

    //Label Properties
    this.labelColour = obj.labelColour;
    this.labelRotation = obj.labelRotation;
    this.labelTextSize = obj.labelTextSize;
    this.YLabel = obj.YLabel;
    this.LabelFont = obj.labelFont;
    this.XLabel = obj.XLabel;
    this.YLabelSize = obj.YLabelSize;

    //Tick Properties
    this.tickWidth = obj.tickWidth;
    this.tickWeight = obj.tickWeight;
    this.numTicks = obj.numTicks;
    this.tickColour = obj.tickColour;
    this.tickStrokeLength = obj.tickStrokeLength;
    this.tickPadding = obj.tickPadding;

    this.tickTextSize = obj.tickTextSize;

    this.maxValue = max(this.calculatingTotal());
    this.scale = int(this.chartHeight / this.maxValue);
  }


  calculatingTotal() {
    // console.log(this.xValue); 
    let total = 0
    for (let i = 0; i < this.data.length; i++) {
      total += +(this.data[i][this.xValue]);
    }

    //need this line
    return total;
  }



  //This function will make an array of all the xValues angles
  calculateAngles() {
    let angles = [];

    //getting total sum 
    // for (let i = 0; i < this.data.length; i++) {
    //     sum += +this.data[i][this.xValue] ; 
    // }
    let sum = this.calculatingTotal();

    //calculating each angle and pushing to an array of angles 
    for (let i = 0; i < this.data.length; i++) {
      let newAngle = (this.data[i][this.xValue] / sum) * 360;
      angles.push(newAngle);
    }
    //whenever function is called, it will return the array
    return angles;
  }

  render() {

    //getting the array of angles 
    let angles = this.calculateAngles();

    //checking values are correct
    console.log(angles);
    console.log(this.data);
    console.log(this.calculatingTotal())


    let labels = this.data.map((l) => {
      return l[this.XLabel];
    });
    console.log(labels)

    noStroke();
    fill(this.labelColour);
    textSize(this.YLabelSize);
    textAlign(CENTER);
    textFont(this.LabelFont);
    text(this.YLabel,this.xPos,this.yPos-this.chartHeight/1.2);


    //for each element in the angles array, an arc will be drawn
    let prevAngle = 0;
    for (let i = 0; i < angles.length; i++) {
      fill(this.barColour[i]);
      noStroke(); 
      arc(this.xPos, this.yPos, this.chartWidth, this.chartWidth, prevAngle, prevAngle + angles[i]);

      // Labels
      //Same Labels as other graphs
      noStroke();
      fill(255);
      textAlign(CENTER, CENTER);
      textSize(this.labelTextSize);
      textFont(this.LabelFont);

      
      //Calculating where to draw the text label
      let tempAngle = prevAngle + angles[i] / 2;
      let labelRadius = this.chartWidth / 2;
      let labelXPos = this.xPos + cos(tempAngle) * (labelRadius * 1.5); 
      let labelYPos = this.yPos + sin(tempAngle) * (labelRadius * 1.5); 
      text(labels[i], labelXPos, labelYPos);

      //the center positions
      let labelX = this.xPos + cos(tempAngle ) * (this.chartWidth / 4);
      let labelY = this.yPos + sin(tempAngle) * (this.chartWidth /4);


      stroke(0);
      strokeWeight(1);
      line(labelXPos,labelYPos,labelX,labelY)

      fill(0);
      textSize(20)
      text(round(angles[i]),labelX,labelY);  


      //this line adds the drawn arc to the last angle, so the next one knows where to draw
      prevAngle += angles[i];

    }

  }
}
