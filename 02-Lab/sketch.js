//This is assigning a variable name to an object literal
let friends01 = {name:"john", age:"53",bowling:true}
let friends02 = {name:"peter", age:"72",bowling:true}
let friends03= {name:"mary", age:"14",bowling:false}
let friends04 = {name:"tom", age:"23",bowling:true}
let friends05 = {name:"louie", age:"23",bowling:false}

//This declares an empty array named friends
let friends = [];

//push is an array method/function to pass to array
friends.push(friends01,friends02,friends03,friends04,friends05);
console.log(friends);


// this is a declarative statement defining a new function called yay and it has two for loops inside of it
// yay passes through one parameter called num

// function yay(num){
// 	console.log("yay this is a cool function woaaaw" );
// 	for(let i = 0; i<num;i++){
// 		console.log("number: " + (i+1));
// 		for(let j = 0; j<num; j++){
// 			console.log("this line is spitting out " + j + "times");
// 		}
// 	}
// }



let addition = (num1,num2)=>{ return  num1 + num2}

console.log(addition(5,5));

let isPositive = (num) =>{ 
	if(num > 0){
		return "pos"

	}else{
		return "not pos"
}}


console.log(isPositive(5));
console.log(isPositive(-5));
//non arrow function

// let friendAges = friends.map(
// 	function(friend){
// 		return friend.age;

// 	}
// );

//arrow function

//yoinks value out of each element of the array
let friendAges = friends.map((friend)=>{
	return friend.age;
});

console.log(friendAges);


let bowlers = friends.filter((friends)=> friends.bowling == true);
let bowlerAge = bowlers.map( (bowler) => bowler.age);


// console.log(bowlers);
// console.log(bowlerAge);


function calAvg(array){
	let total = 0;
	for(let i = 0; i<array.length; i++){
		total = total + array[i];
	}
	return total/array.length;
}

console.log(calAvg(bowlerAge));


// function median(array){
// 	array.sort();
// 	if(array.length/2 ==0 ){
// 		// i = ;
// 		return " Even median" + array[i];
// 	} else{
// 		// i = array.length;
// 		return " Odd median" + array[i];
// 	}
// }


// console.log(median(bowlerAge));

// let friendAverage = calAvg(friendAges);

// console.log(friendAverage);

let xPos = 300;
let yPos = 300;
let angle = 0;

function setup(){
	createCanvas(600,600);
	background(0);
	angleMode(DEGREES)
}

function draw(){
	rectMode(CENTER);
	fill(255);
	stroke(5);
	fill(random(0,255),random(0,255),random(0,255));

	translate(width/2,height/2);
	rotate(angle);
	rect(0,0,100,100);
	angle++;
	

	translate(width/3,height/3);
	rotate(angle);
	rect(0,0,100,100);
	angle++;
	

	translate(width/6,height/6);
	rotate(angle);
	rect(0,0,50,50);
	angle++;
	



	

}