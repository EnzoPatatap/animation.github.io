var colors = [
  '#7BCDD1',
  '#EFF28D',
  '#F2BF80',
  '#F28080',
];

var couleur;

var params = {
  width : 0,
  x : 100
};

function setup(){
  createCanvas( windowWidth , windowHeight );
  noStroke();
  couleur = random (colors)
}

function draw(){
  background( '#F29580' );
  fill( couleur )
  rect(params.x, height/2, params.width, 50);
  ellipse(100, 350, params.width)
  fill (couleur)
  ellipse(400,350 , params.width)



}

function windowResized(){
  resizedCanvas(windowWidth , windowHeight);
}

function mousePressed(){
  couleur = random ( colors );
  TweenMax.fromTo( params, 0.4, {
      x : width/2,
      width : 0
  },

    {
      x: 200,
    width: width-400,
    onComplete: reduce
  });

}

function reduce(){
  TweenMax.to( params, 0.5, {
    x : width/2,
    width: 0
  })
}
