//var p = document.createElement('p');
//console.log( p );

var a = [1, 3, 12, 33, 75];
console.log( a ); // tableau
console.log( a.length ); // nb élément dans un tableau
console.log( a [0] ); // premier element dans le tableau
console.log( a [1] ); // deuxième element dans le tableau

console.log( a [a.length -1] ); // dernière valeur du tableau

for( var index =0; index < a.length; index++){
  console.log( a[ index]);
}

a.push(100);
console.log (a);

var b = {
  prop1: 10,
  prop2: 150,
  prop3: "test"
}

console.log( b ); //affiche mon object
console.log( b.prop2 );

b.test =true;
console.log( b.test );

b.test2= {
  a: 1,
  b: 2,
  c: 3
}

console.log( b.test2.a);

var rect = [ 10, 50, 100, 150 ]; //x, y, largeur, hauteur
var largeur2 = rect2.width
