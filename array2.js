var nw = [31, 32, 33, 34];
nw[2] = 39;// arry er moddher input change korar neyom
console.log(nw);
var position = nw.indexOf(32);
console.log(position);

nw.push(40); // array er moddhe new data adda korar jonno
console.log(nw);  
console.log(nw.length); //array er moddhe koita element ber korar neyom

nw.pop(); // array er moddhe sesh er ta ber hoa jabe
console.log(nw);

console.log(nw.length);

// new part start here

var part = [87, 88, 89, 90, 91, 92];
console.log(part);
var now = part.slice(3); // array er majhe kono jaiga theke start koret
console.log(now);

part.unshift(86); // array er first e add kora
part.unshift(85);
console.log(part);
part.shift(); //array er first e remove kora
console.log(part);

