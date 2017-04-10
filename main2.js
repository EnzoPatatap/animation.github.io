var data = [ ];
for( var i = 0; i<50; i++){
  data.push (50 + Math.random() * 150 );
}



for( var i = 0; i<data.length; i++){
  console.log( data[ i ]);
  var div = document.createElement ('div');

  div.style.height = '20px';
  div.style.background = 'black';
  div.style.marginBottom = '5px';
  div.style.width = data [ i ]+ 'px';

//créer un p avec document.createElement
//modifier son style pour que le texte sois blanc ( color )
//contenu du texte de p sois la valeur p = data [i] ( p.innertext )


var p = document.createElement('p');
  p.style.color = 'white';
  p.innerText = data [ i ];

  div.appendChild( p );


  document.body.appendChild( div );

}
