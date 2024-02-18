class BarChart{

    constructor(_chartWidth,_chartHeight,_xPos,_yPos){
        this.chartWidth= _chartWidth,
        this.chartHeight = _chartWidth,
        this.xPos = _xPos,
        this.yPos = _yPos;
    }

    render(){
        rect(this.xPos,this.yPos,this.chartWidth,this.chartHeight);
    }

}