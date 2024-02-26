//Alannah CC1 - Graphs / Data CA


//initializing variables + arrays
let Charts = [];
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
    createCanvas(2000,1200);
    angleMode(DEGREES);
    noLoop();


    //taking the csv's rows and getting the objects out of them into an array of clean data 

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


    //checking all data is correct
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

    //this is just all of clean data 03
    let stacked = cleanData03;
    console.log(stacked);

    //this is filtering the data to just get the CEO and CFO roles
    let ceoData = cleanData03.filter((cleanData03)=> cleanData03.Roles=="Chief Executive Officers (CEOs)" || cleanData03.Roles=="Chief Financial Officers (CFOs)");
    console.log(ceoData)



    //first Bar Chart
    let barChart ={
        data:female2023data,

        chartHeight: 250,
        chartWidth: 300,

        xPos: 150,
        yPos:500,

        axisLineColour: "#d9d9d9",
        axisLineWeight: 3,
        barWidth: 30,
        barColour: colours,

        yValue: "VALUE",
        xValue: "Roles",
        YLabel: "No.of Women in Leadership Positions 2023 ",
        YLabelSize: 20,
        YLabelOffset:30,
        labelFont: fontBold,

        labelColour: "#ffffff",
        labelRotation: 70,
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

        xPos: 1050,
        yPos:500,

        axisLineColour: "#d9d9d9",
        axisLineWeight: 3,
        barWidth: 20,
        barColour: colours,

        yValue: "VALUE",
        xValue: "Roles",
        YLabel: "Leadership Positions 2023 ",
        labelFont: fontBold,
        YLabelOffset:30,
        YLabelSize: 20,

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

        xPos: 650,
        yPos:500,

        axisLineColour: "#d9d9d9",
        axisLineWeight: 3,
        barColour: colours,
        barWidth:25,

        yValue: "VALUE",
        xValue: "Roles",
        YLabel: " No. of Men in Leadership Positions 2023 ",
        YLabelOffset:30,
        YLabelSize: 20,
        labelFont: fontBold,

        labelColour: "#ffffff",
        labelRotation: 0,
        labelTextSize: 10,

        endBarColour:"#ffffff",

        tickWidth: 5,
        tickWeight: 1,
        tickColour: "#ffffff",
        tickStrokeLength: 10,
        tickPadding:10,
        tickTextSize: 14,
        numTicks: 5
    }



    let lineChart ={
        data:ceoData,

        chartHeight: 250,
        chartWidth: 300,

        xPos: 620,
        yPos:1000,

        axisLineColour: "#d9d9d9",
        axisLineWeight: 3,
        barColour: colours2,
        barWidth:0,

        yValue: "Total",
        xValue: "Year",
        YLabel: "Male vs Female CEO's over time",
        YLabelOffset:30,
        YLabelSize: 20,
        labelFont: fontBold,
        legendLabels: ["Male","Female"],

        labelColour: "#ffffff",
        labelRotation: 90,
        labelTextSize: 14,

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

        xPos: 1050,
        yPos:1000,

        axisLineColour: "#d9d9d9",
        axisLineWeight: 3,
        barWidth: 35,
        barColour: colours2,

        yValue:"Total",
        xValue: ["Male","Female"], 
        XLabel: "Roles",
        YLabel: "Men vs Women in Leadership Positions 2023",
        YLabelOffset:30,
        YLabelSize: 20,
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

        lineType: "dotted",
        lineWeight: 3,

        xPos: 150,
        yPos:1000,

        axisLineColour: "#d9d9d9",
        axisLineWeight: 3,
        barWidth: 35,
        barColour: colours2,

        yValue: "Total",
        xValue: ["Male","Female"],
        YLabel: "Men vs Women in Leadership Positions 2021",
        labelFont: fontBold,
        YLabelOffset:30,
        YLabelSize: 20,
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

        xPos: 1700,
        yPos:600,

        axisLineColour: "#d9d9d9",
        barWidth: 35,
        barColour: colours,

        yValue:"Total",
        xValue: "Female", 
        XLabel: "Roles",
        YLabel: "Women's Roles In Leadership 2021",
        labelFont: fontBold,
        YLabelSize: 20,

        labelColour: "#ffffff",
        labelRotation: 90,
        labelTextSize: 13,

        tickWidth: 5,
        tickWeight: 1,
        tickColour: "#ffffff",
        tickStrokeLength: 10,
        tickPadding:10,
        tickTextSize: 14,
        numTicks: 5
    }

    //These Lines push  each chart object to the Charts Array: 

    //Bar Chart 01
    Charts.push(new BarChart(barChart));

    //Bar Chart 02 
    Charts.push(new BarChart(barChart02));

    //Horizontal Bar Chart
    Charts.push(new HorizontalBar(horizontalBarChart));

    //100% Stacked
    Charts.push(new StackedChart(stackedBarChart));

    //Normal Stacked
    Charts.push(new StackedChart(stackedBarChart02));

    //Line Chart
    Charts.push(new LineChart(lineChart));

    //Pie Chart
    Charts.push(new PieChart(pieChart));


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
    Charts.forEach(bar => bar.render())

}

