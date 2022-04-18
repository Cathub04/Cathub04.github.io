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
	document.getElementById('quest').style.color = 'wheat'
}