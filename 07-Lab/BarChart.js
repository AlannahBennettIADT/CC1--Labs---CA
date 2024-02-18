class BarChart{
    constructor(obj){
        this.data = obj.data;
        this.chartWidth=obj.chartWidth;
        this.chartHeight=obj.chartHeight;
        this.xPos = obj.xPos;
        this.yPos = obj.yPos;
        this.axisLineColour = obj.axisLineColour;
        this.barColour = obj.barColour;
        this.labelColour = obj.labelColour;
        this.barWidth = obj.barWidth;
        this.yValue = obj.yValue;
        this.xValue = obj.xValue;
        this.labelRotation = obj.labelRotation;
        this.labelTextSize = obj.labelTextSize;
        this.tickWidth = obj.tickWidth;
        this.tickWeight = obj.tickWeight;
        this.numTicks = obj.numTicks;
        
        this.maxValue = max(this.data.map(d => d[this.yValue]));
        this.scale = int(this.chartHeight / this.maxValue);
    }

    render(){
        
        //THIS ALSO DOESN'T WORK
        for(let i = 0; i<1000; i++){
            console.log(this.scale);
            if(this.scale%this.numTicks == 0){
                console.log("boom");
                break
            } else {
                this.scale ++;
            }
        }   



        push ();
        translate (this.xPos,this.yPos);
        stroke(this.axisLineColour)
        line (0,0,0,-this.chartHeight);
        line (0,0,this.chartWidth,0);

        
        //this is drawing ticks on the y axis
        for(let i=0; i<=this.numTicks; i++){
            push();
            translate(0,i*(-this.chartHeight/this.numTicks));
            line(0,0,-5,0);
            pop();
        }

       

        for(let i=0; i<=this.numTicks; i++){
            push();
            noStroke();
            fill(255);
            textAlign(RIGHT,CENTER)
            translate(0,i*(-this.chartHeight/this.numTicks));
            text(i* this.maxValue,-10, 0); // GET THE RIGHT CODE FOR THIS, THIS IS WRONG
           pop();
        }
     

        

        let gap = (this.chartWidth - (this.data.length * this.barWidth))/(this.data.length +1);

        //this map gets all the labels for the x axis into one array
        let labels = this.data.map((age)=>{
            return age[this.xValue];
        }); 

      
        push();
        translate(gap,0);
        for(let i=0; i<this.data.length; i++){
            fill(this.barColour);
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
        
        pop ();
    }
}