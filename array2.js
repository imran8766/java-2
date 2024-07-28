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