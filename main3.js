var box = document.querySelector('#box');
box.style.background = 'red';


function move(){
    x = Math.floor( Math.random() * 300 )
    y = Math.floor( Math.random() * 300 )

TweenMax.to( box, 1, {
  left: x + 'px',
  top: y + 'px',
  ease: Bounce.easeOut,
  onComplete: grow
});
}

function grow(){

  TweenMax.to( box, 1, {
    width: window.innerWidth + 'px',
    height: window.innerHeight + 'px'
  });
}

document.body.addEventListener( 'click', move );

//TweenMax.to( box, 0.3, {
//width : '150px',
  //delay: 0.5,

//});

//TweenMax.to( box, 5, {
  //height : '350px'
//});
