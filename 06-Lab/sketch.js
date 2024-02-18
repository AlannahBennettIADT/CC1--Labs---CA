let barCharts = []
let data;
let cleanData = [];

function preload(){
    data = loadTable("data/Combined.csv", "csv", "header");
}


function setup(){
    createCanvas(500,500);

    for( let i = 0; i<data.rows.length; i++){
		cleanData.push(data.rows[i].obj);	
	}

    barCharts.push(new BarChart(180,180,40,200,"#0062ff"));
    barCharts.push(new BarChart(180,180,280,200,"#0062ff"));
    barCharts.push(new BarChart(180,180,40,450, "#0062ff"));
    barCharts.push(new BarChart(180,180,280,450, "#0062ff"));

}

function draw(){
    background(200);

    // for(let i = 0; i<barCharts.length; i++){
    //     barCharts[i].render();
    // }

    
    barCharts.forEach(bar=> bar.render());
}


