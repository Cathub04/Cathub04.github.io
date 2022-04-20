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
	document.getElementById('txt1').style.color = 'wheat'
}
function read2(){
	document.getElementById('txt2').style.color = 'wheat'
}
function read3(){
	document.getElementById('txt3').style.color = 'wheat'
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
