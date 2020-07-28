let name = "Stephanie Wheatley";
let age = 30;
let bday = "April 10th";
let detroitGC = false;
let randomNumber = 0;
let lifeEvents = ["I moved to Grand Rapids, Michigan when I was 15 years old","I went to GRCC for recording technology","I used to live on Maui, Hawaii", "I had a quarantined birthday this year"];

if(detroitGC){
    console.log(`My name is ${name} and I'm a student in Detroit, Michigan. I am currently ${age} and my birthday is ${bday}`);
}
else{
    console.log(`My name is ${name} and I'm a student in Grand Rapids, Michigan. I am currently ${age} and my birthday is ${bday}`);
}

for(i=0; i<lifeEvents.length;i++){
    console.log(lifeEvents[i]);
}

let counter = 0;
while (true){
    let randomNumber = Math.floor((Math.random() * 10) + 1);
    console.log(randomNumber);
if(randomNumber !==5){
    counter++;
    console.log(`${randomNumber} !==5`);
}

else {
    counter++;
    console.log(`5==5 it took ${counter} interations to randomly generate the number 5.`);
    break;
}
}
