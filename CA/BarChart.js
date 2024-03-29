class BarChart{
    constructor(obj){
        this.data = obj.data;
  
        //Chart Properties
        this.chartWidth=obj.chartWidth;
        this.chartHeight=obj.chartHeight;
        this.xPos = obj.xPos;
        this.yPos = obj.yPos;

        //Axis Properties
        this.axisLineColour = obj.axisLineColour;
        this.axisLineWeight = obj.axisLineWeight;
        this.axislabelRotation = obj.axislabelRotation;
        this.yAxisLabelText = obj.yAxisLabelText;
        this.AxislabelFont = obj.AxislabelFont;
  
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
        this.YLabelOffset = obj.YLabelOffset;
        this.YLabelSize = obj.YLabelSize;
        
        //Tick Properties
        this.tickWidth = obj.tickWidth;
        this.tickWeight = obj.tickWeight;
        this.numTicks = obj.numTicks;
        this.tickColour=obj.tickColour;
        this.tickStrokeLength= obj.tickStrokeLength;
        this.tickPadding= obj.tickPadding;
        this.tickTextSize = obj.tickTextSize;
        
        this.maxValue = max(this.data.map(d => d[this.yValue]));
        this.scale = int(this.chartHeight / this.maxValue);
    }
  
    render(){
  
  
        push ();
  
        translate (this.xPos,this.yPos);

  
        noStroke();
        fill(this.labelColour);
        textSize(this.YLabelSize);
        textAlign(CENTER);
        textFont(this.LabelFont);
        text(this.YLabel,this.chartHeight/2,-this.chartHeight-this.YLabelOffset);

        textSize(this.tickTextSize)
        push();
        rotate(this.axislabelRotation);
        textFont(this.AxislabelFont)
        text(this.yAxisLabelText, this.chartWidth/3,-this.chartHeight/3)
        pop();
        
     
        let gap = (this.chartWidth - (this.data.length * this.barWidth))/(this.data.length +1);
  
        //this map gets all the labels for the x axis into one array
        let labels = this.data.map((age)=>{
            return age[this.xValue];
        }); 
  
      
        push();
        translate(gap,0);
        for(let i=0; i<this.data.length; i++){
            noStroke();
            fill(this.barColour[i]);
            rect (0,0,this.barWidth, -this.data[i][this.yValue]* this.scale);
  
  
            noStroke();
            fill(this.labelColour);
            if(this.labelRotation == 0){
                textAlign(CENTER,CENTER);
            } else{
                textAlign(LEFT,CENTER);
            }
            textSize(this.labelTextSize);
  
            push();
            translate(this.barWidth/2,10);
            rotate(this.labelRotation);
            text(labels[i],0,0);
  
            pop();
            
            translate(gap+this.barWidth,0);
        }
        pop();
  
  
        //Creating the Ticks Y Axis
        stroke(this.tickColour);
        strokeWeight(this.tickWeight);
  
  
        let tickGap = this.chartHeight/this.numTicks;
        
        for(let i = 0; i<=this.numTicks; i++){
            push();
            line(0,-i*tickGap,-this.tickWidth,-i*tickGap);
            noStroke();
            textSize(this.tickTextSize);
            textAlign(RIGHT,CENTER);
            let value = this.maxValue/this.numTicks*i;
            text(value.toFixed(2), -this.tickPadding-this.tickStrokeLength,-i*tickGap);
            pop();
        }


        //Creating the Chart Axis
        stroke(this.axisLineColour);
        strokeWeight(this.axisLineWeight);
        line (0,0,0,-this.chartHeight);
        line (0,0,this.chartWidth,0);


        pop ();
    }
  }