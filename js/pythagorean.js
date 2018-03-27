function calculate() {
	var a =Math.pow(parseFloat(document.getElementById("a").value.replace(",",".")), 2);
	var b =Math.pow(parseFloat(document.getElementById("b").value.replace(",",".")), 2);
	var r =Math.pow(parseFloat(document.getElementById("r").value.replace(",",".")), 2);
	if(!a) {
		a =  Math.sqrt(r - b);
		document.getElementById("a").value=show(a);
	}
	if(!b) {
		b =  Math.sqrt(r - a) ;
		document.getElementById("b").value=show(b);
	}
	if(!r) {
		r =  Math.sqrt(a + b) ;
		document.getElementById("r").value=show(r);
	}
}
function show(answer) {
	return answer ;
}
