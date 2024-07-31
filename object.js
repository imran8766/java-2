var person = { id:234, phone:7864, name:"jawad"};
var person2 = { id:87, phone:2341, name:"ranvir"};
var person3 = { id:568, phone:6854, name:"michel"};

console.log(person);
console.log(person2);
console.log(person3);

var phoneno = person.phone;
console.log(phoneno);

 var name2 = person2["id"];
 console.log(name2);

 person2.id = 666; // data update korar neyom
 console.log(person2);

 person["name"] = "kobir";
 console.log(person);