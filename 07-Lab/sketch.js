let barCharts = [];
let data;
let cleanData=[];
let numRows;
let labels 

function preload(){
    data = loadTable("data/combined.csv", "csv", "header");
}

function setup(){
    background(50)
    createCanvas(500,500);
    angleMode(DEGREES);
    noLoop();

    numRows = data.rows.length;
    for(let i=0;i<numRows;i++){
        cleanData.push(data.rows[i].obj)
    }

    console.log(cleanData)


    let barChart01 ={
        data:cleanData,
        chartHeight: 350,
        chartWidth: 400,
        xPos: 50,
        yPos:380,
        axisLineColour: "#d9d9d9",
        barWidth: 25,
        yValue: "Total",
        xValue: "Age_Group",
        barColour: "#d791ff",
        labelColour: "#ffffff",
        labelRotation: 70,
        labelTextSize: 13,
        tickWidth: -5,
        tickWeight: 2,
        numTicks: 5
    }

    let barChart02 ={
        data:cleanData,
        chartHeight: 300,
        chartWidth: 200,
        xPos: 50,
        yPos:450,
        axisLineColour: "#d9d9d9",
        barWidth: 5,
        yValue: "Female"
    }

    //barCharts.push(new BarChart(cleanData,80,80,50,350,"#ff0000"));
    barCharts.push(new BarChart(barChart01));
    // barCharts.push(new BarChart(barChart02));
    // barCharts.push(new BarChart(cleanData,200,200,250,450,"#d9d9d9"))
    //barCharts.push(new BarChart(cleanData,400,400,50,450,"#d9d9d9"))
}

function draw() {
    background(50);
    barCharts.forEach(bar => bar.render())
}

