let barCharts = [];
let data01;
let data02;
let data03;
let cleanData01=[];
let cleanData02=[];
let cleanData03=[];
let numRows;
let labels 
let colours = ["#355C7D", "6C5B7B", "#C06C84", "#F67280","F8B195","#355C7D", "6C5B7B", "#C06C84", "#F67280","F8B195"];
let colours2 =  ["#C06C84","#355C7D"];

let fontLight;
let fontReg;
let fontBold;

function preload(){
    data01 = loadTable("data/genderbalance.csv", "csv", "header");
    data02 = loadTable("data/stackedData.csv", "csv", "header");
    data03 = loadTable("data/newData.csv", "csv", "header");
    fontLight = loadFont("Fonts/Montserrat-Light.ttf");
    fontReg = loadFont("Fonts/Montserrat-Regular.ttf");
    fontBold = loadFont("Fonts/Montserrat-Bold.ttf");
}

function setup(){
    background(50)
    createCanvas(1800,1200);
    angleMode(DEGREES);
    noLoop();

    numRows = data01.rows.length;
    for(let i=0;i<numRows;i++){
        cleanData01.push(data01.rows[i].obj)
    }
    numRows = data02.rows.length;
    for(let i=0;i<numRows;i++){
        cleanData02.push(data02.rows[i].obj)
    }


    numRows = data03.rows.length;
    for(let i=0;i<numRows;i++){
        cleanData03.push(data03.rows[i].obj)
    }


    console.log(cleanData01)
    console.log(cleanData02)
    console.log(cleanData03)
    

    //Filtering Data for every bar chart

    //Only Female 2023 Data
    let female2023data = cleanData01.filter((cleanData01)=> cleanData01.Sex == "Female" && cleanData01.Year == "2023");
    console.log(female2023data);

    //Only Male 2023 Data
    let male2023data = cleanData01.filter((cleanData01)=> cleanData01.Sex == "Male" && cleanData01.Year == "2023");
    console.log(male2023data);

    //Only 2023 Data
    let data2023 = cleanData01.filter((cleanData01)=>  cleanData01.Year == "2023");
    console.log(data2023);

    //Only 2023 Data for 100% Stacked Bar Chart
    let stackedfull = cleanData03.filter((cleanData03)=> cleanData03.Year=="2023");

    //Only 2021 Data for Stacked Bar Chart with average line graph
    let stackedline = cleanData03.filter((cleanData03)=> cleanData03.Year=="2021");


    let stacked = cleanData03;
    console.log(stacked);




    let barChart ={
        data:female2023data,

        chartHeight: 250,
        chartWidth: 300,

        xPos: 100,
        yPos:380,

        axisLineColour: "#d9d9d9",
        barWidth: 25,
        barColour: colours,

        yValue: "VALUE",
        xValue: "Roles",
        YLabel: " No. of Women in Leadership Positions 2023 ",
        labelFont: fontBold,

        labelColour: "#ffffff",
        labelRotation: 90,
        labelTextSize: 10,

        tickWidth: 5,
        tickWeight: 1,
        tickColour: "#ffffff",
        tickStrokeLength: 10,
        tickPadding:10,
        tickTextSize: 14,
        numTicks: 5
    }


    let barChart02 ={
        data:data2023,

        chartHeight: 250,
        chartWidth: 300,

        xPos: 1000,
        yPos:380,

        axisLineColour: "#d9d9d9",
        barWidth: 25,
        barColour: colours,

        yValue: "VALUE",
        xValue: "Roles",
        YLabel: "Leadership Positions 2023 ",
        labelFont: fontBold,

        labelColour: "#ffffff",
        labelRotation: 90,
        labelTextSize: 10,

        tickWidth: 5,
        tickWeight: 1,
        tickColour: "#ffffff",
        tickStrokeLength: 10,
        tickPadding:10,
        tickTextSize: 14,
        numTicks: 5
    }


    let horizontalBarChart ={
        data:male2023data,

        chartHeight: 250,
        chartWidth: 300,

        xPos: 600,
        yPos:380,

        axisLineColour: "#d9d9d9",
        barColour: colours,
        barWidth:25,

        yValue: "VALUE",
        xValue: "Roles",
        YLabel: " No. of Men in Leadership Positions 2023 ",
        labelFont: fontBold,

        labelColour: "#ffffff",
        labelRotation: 0,
        labelTextSize: 10,

        tickWidth: 5,
        tickWeight: 1,
        tickColour: "#ffffff",
        tickStrokeLength: 10,
        tickPadding:10,
        tickTextSize: 14,
        numTicks: 5
    }



    let lineChart ={
        data:stacked,

        chartHeight: 250,
        chartWidth: 300,

        xPos: 600,
        yPos:850,

        axisLineColour: "#d9d9d9",
        barColour: colours2,
        barWidth:0,

        yValue: "Total",
        xValue: "Year",
        YLabel: " % Male Vs Female CEO's over time",
        labelFont: fontBold,

        labelColour: "#ffffff",
        labelRotation: 90,
        labelTextSize: 10,

        tickWidth: 5,
        tickWeight: 1,
        tickColour: "#ffffff",
        tickStrokeLength: 10,
        tickPadding:10,
        tickTextSize: 14,
        numTicks: 5,
        dataSets: 1
    }

    let stackedBarChart ={
        data:stackedfull,

        chartHeight: 250,
        chartWidth: 300,
        chartType: "full",

        xPos: 1000,
        yPos:850,

        axisLineColour: "#d9d9d9",
        barWidth: 35,
        barColour: colours2,

        yValue:"Total",
        xValue: ["Male","Female"], 
        XLabel: "Roles",
        YLabel: "Men vs Women in Leadership Positions 2023",
        labelFont: fontBold,

        labelColour: "#ffffff",
        labelRotation: 90,
        labelTextSize: 10,

        tickWidth: 5,
        tickWeight: 1,
        tickColour: "#ffffff",
        tickStrokeLength: 10,
        tickPadding:10,
        tickTextSize: 14,
        numTicks: 5
    }



    let stackedBarChart02 ={
        data:stackedline,

        chartHeight: 250,
        chartWidth: 300,
        chartType: "line",

        xPos: 100,
        yPos:850,

        axisLineColour: "#d9d9d9",
        barWidth: 35,
        barColour: colours2,

        yValue: "Total",
        xValue: ["Male","Female"],
        YLabel: "Men vs Women in Leadership Positions (Normal)",
        labelFont: fontBold,
        XLabel: "Roles",

        labelColour: "#ffffff",
        labelRotation: 90,
        labelTextSize: 10,

        tickWidth: 5,
        tickWeight: 1,
        tickColour: "#ffffff",
        tickStrokeLength: 10,
        tickPadding:10,
        tickTextSize: 14,
        numTicks: 5
    }


    let pieChart ={
        data:stackedline,

        chartHeight: 250,
        chartWidth: 300,
        chartType: "full",

        xPos: 1600,
        yPos:600,

        axisLineColour: "#d9d9d9",
        barWidth: 35,
        barColour: colours,

        yValue:"Total",
        xValue: "Female", 
        XLabel: "Roles",
        YLabel: "Women's Roles In Leadership 2021",
        labelFont: fontBold,

        labelColour: "#ffffff",
        labelRotation: 90,
        labelTextSize: 15,

        tickWidth: 5,
        tickWeight: 1,
        tickColour: "#ffffff",
        tickStrokeLength: 10,
        tickPadding:10,
        tickTextSize: 14,
        numTicks: 5
    }

    //These Lines push  each chart object to the barCharts Array: 

    //Bar Chart 01
    barCharts.push(new BarChart(barChart));

    //Bar Chart 02 
    barCharts.push(new BarChart(barChart02));

    //Horizontal Bar Chart
    barCharts.push(new HorizontalBar(horizontalBarChart));

    //100% Stacked
    barCharts.push(new StackedChart(stackedBarChart));

    //Normal Stacked
    barCharts.push(new StackedChart(stackedBarChart02));

    //Line Chart
    barCharts.push(new LineChart(lineChart));

    //Pie Chart
    barCharts.push(new PieChart(pieChart));


}

function draw() {
    background(50);

    //Main title
    textSize(40);
    fill(255);
    textAlign(CENTER);
    textFont(fontBold);
    text("Gender Balance Graphs CA", width/2, 80);

    //Default Font for charts
    textFont(fontLight);
    //Displaying all charts in the array
    barCharts.forEach(bar => bar.render())

}

