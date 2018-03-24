function calculate() {
	var a =parseFloat(document.getElementById("a").value.replace(",","."));
	var b =parseFloat(document.getElementById("b").value.replace(",","."));
	var r =parseFloat(document.getElementById("r").value.replace(",","."));
	var angle =parseFloat(document.getElementById("angle").value.replace(",","."));
	var a1 = Math.pow(a, 2);
	var b1 = Math.pow(b, 2);
	var r1 = Math.pow(r, 2); 
	if(!r) {
		r = Math.sqrt((a*a + b*b) - 2*a*b*Math.cos(angle)) ;
		document.getElementById("r").value=show(r);}
	
}
function show(answer) {
	return answer ;
}