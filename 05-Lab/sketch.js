let barCharts = []

function setup(){
    createCanvas(500,500);

    barCharts.push(new BarChart(180,180,50,50));
    barCharts.push(new BarChart(180,180,250,50));
    barCharts.push(new BarChart(180,180,50,250));
    barCharts.push(new BarChart(180,180,250,250));

}

function draw(){
    background(200);

    // for(let i = 0; i<barCharts.length; i++){
    //     barCharts[i].render();
    // }

    
    barCharts.forEach(bar=> bar.render());
}


