function calculate() {
	var a =parseFloat(document.getElementById("a").value.replace(",","."));
	var b =parseFloat(document.getElementById("b").value.replace(",","."));
	var r =parseFloat(document.getElementById("r").value.replace(",","."));
	var a = Math.pow(a, 2)
	var b = Math.pow(b, 2)
	var r = Math.pow(r, 2)
	if(!a) {
		a =  Math.sqrt(b - r) ;
		document.getElementById("a").value=show(a);
	}
	else if(!b) {
		b =  Math.sqrt(a - r) ;
		document.getElementById("b").value=show(b);
	}
	else if(!r) {
		r =  Math.sqrt(a + b) ;
		document.getElementById("r").value=show(r);
	}
}
function show(answer) {
	return answer ;
}
