
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
        this.barWidth = obj.barWidth;
        this.yValue = obj.yValue;
        this.xValue = obj.xValue;

        //Bar Properties
        this.barColour = obj.barColour;
        this.labelColour = obj.labelColour;

        //Label Properties
        this.labelRotation = obj.labelRotation;
        this.labelTextSize = obj.labelTextSize;
        this.YLabel = obj.YLabel;
        this.LabelFont = obj.labelFont;

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
        line (0,0,0,-this.chartHeight);
        line (0,0,this.chartWidth,0);

        //Chart Title
        noStroke();
        fill(255);
        textSize(16);
        textAlign(CENTER);
        textFont(this.LabelFont);
        textFont(this.LabelFont);
        text(this.YLabel,this.chartHeight/2,-this.chartHeight-this.scale*3);
        

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
            textAlign(CENTER,LEFT);
            textSize(13);
            fill(255);
            text(this.data[i][this.yValue],this.data[i][this.yValue]*this.scale+gap/2,this.barWidth);

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
            textSize(10);
            textAlign(CENTER,CENTER);
            let value = round(this.maxValue/this.numTicks*i);
            text(value,i*tickGap,this.tickPadding+this.tickStrokeLength);
            pop();
        }

        pop ();

    }
}