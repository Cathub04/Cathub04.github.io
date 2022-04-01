alert(Date());
function imgover(){
	document.getElementById('over').src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2f/e4/toronto.jpg?w=700&h=500&s=1'
}
function clck(){
	document.getElementById('para').innerHTML='If you see this it means it changed.';
}
function okd(){
	alert('It takes me one hour to reach here')
}
function tri(){
	var slct = document.getElementById('para');
	slct.style.textAlign='center';
	slct.style.color='blue';
	slct.style.fontFamily='Arial';
}
function temp(f){
	var f = 20;
	alert((f-32)/(9/5));
}
function cal(){
	var a = parseFloat(prompt('Enter the 1st number'));
	var b = parseFloat(prompt('Enter the 2nd number'));
	alert('the answer is '+parseFloat(a+b));
}
function hi(){
	var c = prompt('What is your first name, sir/madam.');
	var d = prompt('And your last name please.');
	alert("Nice to meet you "+c+' '+d);
}