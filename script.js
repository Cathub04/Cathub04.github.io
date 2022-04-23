function ti(){
	document.getElementById('title').style.color="gold";
}
function surprise(){
	var ans = prompt('Do you remember one of the 3 main types of guitar?')
	if (ans == 'classical guitar'||ans =='electric guitar'||ans =='Hawaiian guitar'||ans =='steel-string acoustic guitar'){
		alert('Congratulations, your answer is right!');
	}
	else {
		alert('Oops, not this one, go back and check it.');
	}
}
function read1(){
	document.getElementById('ctxt1').style.color = 'wheat'
}
function read2(){
	document.getElementById('ctxt2').style.color = 'wheat'
}
function read3(){
	document.getElementById('ctxt3').style.color = 'wheat'
}
function read4(){
	document.getElementById('ctxt4').style.color = 'wheat'
}
function read5(){
	document.getElementById('ctxt5').style.color = 'wheat'
}
function read6(){
	document.getElementById('ctxt6').style.color = 'wheat'
}
function read7(){
	document.getElementById('ctxt7').style.color = 'wheat'
}
function read8(){
	document.getElementById('ctxt8').style.color = 'wheat'
}
function prt(){
	var names = ['Headstock','Nut','Machine head','Frets','Truss rod','Inlays','Neck','Heel(acoustic)Neckjoint(electric)','Body','Pickups','Electronics','Bridge','Pickguard','back','Soundboard','Body sides','Sound hole','Strings','Saddle','Fretboard/Fingerboard'];
	var request = parseInt(prompt('Please enter the number in picture to know the name of it'));
	alert('The component is called '+ names[request-1]);
}

function transport() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function cchange(){
	document.getElementById('cppic1').scr = "homepageStill.jpg";
}

function ctable(){
	document.getElementById('tb1'). style.display="block";
	document.getElementById('cbt'). style.display='none';
}