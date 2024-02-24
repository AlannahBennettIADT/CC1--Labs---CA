class PieChart {
  constructor(obj) {
    this.data = obj.data;

    this.chartWidth = obj.chartWidth;
    this.chartHeight = obj.chartHeight;
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

    this.maxValue = max(this.calculatingTotal());
    this.scale = int(this.chartHeight / this.maxValue);
  }


  // calculateAngles() {

  //   // console.log(this.xValue); 
  //   let angles = [];

  //   let sum = 0;

  //   for (let i = 0; i < this.data.length; i++) {
  //     sum += +this.data[i][this.xValue];
  //   }
  //   // console.log(angles);
  //   console.log(sum)

  //   for (let i = 0; i < this.data.length; i++) {
  //     let newAngle = (+this.data[i][this.xValue] / sum) * 360;
  //     angles.push(newAngle)
  //   }

  //   //need this line
  //   return angles;

  // }


  calculateAngles() {
    let angles = [];
    let sum = 0;

    //getting total sum 
    for (let i = 0; i < this.data.length; i++) {
        sum += +this.data[i][this.xValue] ; 
    }

    //calculating each angle and pushing to an array of angles 
    for (let i = 0; i < this.data.length; i++) {
        let newAngle = (this.data[i][this.xValue] / sum) * 360 ; 
        angles.push(newAngle);
    }
    //whenever function is called, it will return the array
    return angles;
}


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
    let angles = this.calculateAngles(); 
    console.log(angles); 
    console.log(this.data);

    let lastAngle = 0;
    for (let i = 0; i < angles.length; i++) {
      fill(this.barColour[i]);
      stroke(0);
      arc(this.xPos, this.yPos, this.chartWidth, this.chartWidth, lastAngle, lastAngle + angles[i], PIE);
      lastAngle += angles[i];
    }

}



}
