let icon = document.getElementById("icon");
let swtch = document.getElementById("swtch");
let moon = document.getElementById("moon");
let sun = document.getElementById("sun");
let ham =  document.getElementById("ham");
let close = document.getElementById("close");
let nav = document.querySelector(".nav");
swtch.onclick = function(){
	document.body.classList.toggle("dark");
	if(document.body.classList.contains("dark")){
		moon.style.display = "none";
		sun.style.display = "block";
	}
	else{
		moon.style.display = "block";
		sun.style.display = "none";
	}
}
icon.onclick = function(){
	nav.classList.toggle("show");
	if(nav.classList.contains("show")){
		close.style.display = "block";
		ham.style.display = "none";
	}
	else{
		ham.style.display = "block";
		close.style.display = "none";
	}
}