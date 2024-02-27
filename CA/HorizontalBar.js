
class HorizontalBar{
    constructor(obj){
        //Data Properties
        this.data = obj.data;

        //Chart Properties
        this.chartWidth=obj.chartWidth;
        this.chartHeight=obj.chartHeight;
        this.xPos = obj.xPos;
        this.yPos = obj.yPos;

        //Axis Properties
        this.axisLineColour = obj.axisLineColour;
        this.axisLineWeight = obj.axisLineWeight;
        this.AxislabelFont = obj.AxislabelFont;
        this.barWidth = obj.barWidth;
        this.yValue = obj.yValue;
        this.xValue = obj.xValue;

        //Bar Properties
        this.barColour = obj.barColour;
        this.labelColour = obj.labelColour;
        this.endBarColour = obj.endBarColour;

        //Label Properties
        this.labelRotation = obj.labelRotation;
        this.labelTextSize = obj.labelTextSize;
        this.YLabel = obj.YLabel;
        this.YLabelSize = obj.YLabelSize;
        this.LabelFont = obj.labelFont;
        this.YLabelOffset = obj.YLabelOffset;

        //Tick Properties
        this.tickWidth = obj.tickWidth;
        this.tickWeight = obj.tickWeight;
        this.numTicks = obj.numTicks;
        this.tickColour=obj.tickColour;
        this.tickStrokeLength= obj.tickStrokeLength;
        this.tickPadding= obj.tickPadding;
        this.tickTextSize = obj.tickTextSize;
        
        //Scale Properties
        this.maxValue = max(this.data.map(d => d[this.yValue]));
        this.scale = int(this.chartHeight / this.maxValue);
    }

    render(){
        
        push ();
        //Creating the Chart Axis
        translate (this.xPos,this.yPos);
        stroke(this.axisLineColour)
        strokeWeight(this.axisLineWeight);
        line (0,0,0,-this.chartHeight);
        line (0,0,this.chartWidth,0);

        //Chart Title
        noStroke();
        fill(this.labelColour);
        textSize(this.YLabelSize);
        textAlign(CENTER);
        textFont(this.LabelFont);
        text(this.YLabel,this.chartHeight/2,-this.chartHeight-this.YLabelOffset);

        //X Axis Label
        textSize(this.tickTextSize)
        textFont(this.AxislabelFont);
        text(this.yValue,this.chartWidth/2,this.chartHeight/4)

        //Anything else will be this font
        textFont(this.LabelFont);
        

        //this map gets all the labels for the x axis into one array
        let labels = this.data.map((age)=>{
            return age[this.xValue];
        }); 
        
        let gap = (this.chartWidth - (this.data.length * this.barWidth))/(this.data.length +1); 
      

        //Creating the Horizontal Bar Chart
        push();
        translate(0,-gap);
        for(let i=0; i<this.data.length; i++){
            noStroke();
            fill(this.barColour[i]);
            rect (0,0,this.data[i][this.yValue]* this.scale,this.barWidth);
            textAlign(CENTER);
            textSize(this.tickTextSize);
            fill(this.endBarColour);
            //numbers at the end of the bars
            text(this.data[i][this.yValue],this.data[i][this.yValue]*this.scale+gap,this.barWidth/2);

            noStroke();
            fill(this.labelColour);
            if(this.labelRotation == 0){
                textAlign(RIGHT,CENTER);
            } else{
                textAlign(LEFT,CENTER);
            }
            textSize(this.labelTextSize);

            push();
            translate(this.barWidth,10);
            rotate(this.labelRotation);
            text(labels[i],-50,0);

            pop();
            
            translate(0,-gap-this.barWidth);
        }
        pop();



        //Creating the ticks + Labels ( for X Axis)
        stroke(this.tickColour);
        strokeWeight(this.tickWeight);

        let tickGap = this.chartHeight/this.numTicks;
        for(let i = 0; i<=this.numTicks; i++){
            push();
            line(i*tickGap,0,i*tickGap,this.tickWidth,);
            noStroke();
            textSize(this.tickTextSize);
            textAlign(CENTER,CENTER);
            let value = round(this.maxValue/this.numTicks*i);
            text(value,i*tickGap,this.tickPadding+this.tickStrokeLength);
            pop();
        }

        pop ();

    }
}