//Lab 1:
let lanaFriends;

//declaring variables / arrays
let age = 23;
console.log(age);

lanaFriends = ["David", "Peter", "Mary"];
console.log(lanaFriends);
console.log(lanaFriends.length);
// console.log(lanaFriends[2]);

for(i=0; i<lanaFriends.length; i++){
	console.log(lanaFriends[i]);
}


//This is assigning a variable name to an object literal
let friends01 = {name:"john", age:"23",bowling:true}
let friends02 = {name:"peter", age:"23",bowling:true}
let friends03= {name:"mary", age:"22",bowling:false}

//This declares an empty array named friends
let friends = [];

//push is an array method/function to pass to array
friends.push(friends01,friends02,friends03);
console.log(friends);

for(i=0; i<friends.length; i++){
	console.log(friends[i].name);
	console.log(friends[i].age);
	console.log(friends[i].bowling);
}
