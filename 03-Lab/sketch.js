let data;
let cleanData = [];


const chartWidth = 400;
const barWidth = 25;
const chartHeight = 400;
const canvasWidth = 700;
const canvasHeight = 700;


//colours
const backgroundC= "#c9d6d2"
const axisLineColour = "#7d52d9";
const axisThickness = 3;
const barFill = "#d19fcd";

function preload(){
	data = loadTable('data/Combined.csv', 'csv', 'header');
}

function setup(){
	createCanvas(canvasWidth,canvasHeight);
	// console.log(data);
	for( let i = 0; i<data.rows.length; i++){
		// console.log(data.rows[i].obj);
		cleanData.push(data.rows[i].obj);	
	}

}

function draw(){
	background(backgroundC);
	noFill();
	stroke(axisLineColour);
	strokeWeight(axisThickness);
	
	push();


	let transX = (canvasWidth-chartWidth)/2;
	let transY = (canvasHeight - chartHeight)/2 + chartHeight;
	translate (transX,transY);
	//y axis
	line(0,0,0,-chartHeight);
	//x axis
	line(0,0,chartWidth,0);

	let numOfBars = cleanData.length;
	let gapW= (chartWidth - (numOfBars*barWidth))/(numOfBars+1)
	//console.log(gapW);

	fill(barFill);
	noStroke();

	for(let i = 0; i<numOfBars; i++){
		let barHeight = (+cleanData[i].Total)*10;
		rect(gapW, 0, barWidth, -barHeight);
		translate(gapW+barWidth,0)
	}



	// for(let i = 0; i<numOfBars; i++){
	// 	let jump = (i*barWidth) + ((i+1)*gapW);
	// 	let barHeight = (+cleanData[i].Total)*10;
	// 	// fill( random(255), random(255), random(255));
	// 	rect(jump, 0, barWidth, -barHeight);
	// }

	pop();

}