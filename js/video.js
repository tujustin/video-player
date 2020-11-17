var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function(){
	console.log(video.playbackRate)
	video.playbackRate -= (video.playbackRate * 0.1);
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log(video.playbackRate)
	video.playbackRate += (video.playbackRate * 0.1);
});

document.querySelector("#skip").addEventListener("click", function(){
	video.currentTime += 5;
	console.log(video.currentTime);
	if(video.currentTime == video.duration){
		video.currentTime = 0;
		video.play();
	}
});

document.querySelector("#mute").addEventListener("click", function(){
	if(video.muted == false){
		video.muted = true;
		document.querySelector("#mute").innerHTML = 'Unmute';
	}
	else{
		video.muted = false;
		document.querySelector("#mute").innerHTML = 'Mute';
	}
});

document.querySelector("#volumeSlider").addEventListener("mousemove", function(e){
	video.volume = e.currentTarget.value / 100;
});

document.querySelector("#old").addEventListener("click", function(){
	video.style.filter = "grayscale(100%)";
});

document.querySelector("#original").addEventListener("click", function(){
	video.style.filter = "grayscale(0%)";
});
