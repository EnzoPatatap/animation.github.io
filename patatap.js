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
  rect(params.x, height/2-100, params.width, 200);

}

function windowResized(){
  resizedCanvas(windowWidth , windowHeight);
}

function mousePressed(){
  couleur = random ( colors );
  TweenMax.fromTo( params, 0.3, {
      x : 100,
      width : 0
  },

    {
    width: width-200,
    onComplete: reduce
  });

}

function reduce(){
  TweenMax.to( params, 0.3, {
    x : width - 100,
    width: 0
  })
}
