
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var images =document.getElementsByTagName('li');
var i=0;
window.timerId = window.setInterval(timer,2000);
prev.onclick = function(){
	images[i].style.display='none';
	i--;
	if(i<0){
		i = images.length-1;
	}
	images[i].style.display='block';
};
next.onclick = function(){
	images[i].style.display='none';
	i++;
	if(i>=images.length){
		i=0;	
	}
	images[i].style.display='block';
};
function timer(){
	images[i].style.display='none';
	i++;
	if(i>=images.length){
		i=0;	
	}
	images[i].style.display='block';
}