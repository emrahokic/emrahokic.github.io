var animation ={
    container: document.getElementById('bm'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://raw.githubusercontent.com/emrahokic/emrahokic.github.io/master/data.json' // the path to the animation json
}
var btn=document.getElementById("pokreni");
var btn1=document.getElementById("pauza");
btn.addEventListener("click", function(){

bodymovin.loadAnimation(animation);

});


 btn1.addEventListener("click", function(){

animation.pause(animation);

});