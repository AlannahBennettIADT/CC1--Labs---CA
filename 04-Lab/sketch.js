let friends = []



class Friend{

    constructor(_name,_age,_bowling){
        this.name= _name,
        this.age = _age,
        this.bowling = _bowling;
    }

}

for(let i = 0; i<10; i++){
    let age = Math.random(0,10);
    friends.push(new Friend("Lana", age, false));
}

console.log(friends);