function calculate() {
	var m1 =parseFloat(document.getElementById("m1").value.replace(",","."));
	var m2 =parseFloat(document.getElementById("m2").value.replace(",","."));
	var r = parseFloat(document.getElementById("r").value.replace(",","."));
	var f = parseFloat(document.getElementById("f").value.replace(",","."));
	var g = 6.67 * Math.pow(10, -11)
	if(!f) {
		f = g* (m1*m2)/ Math.pow(r,2) ;
		document.getElementById("f").value=show(f) + " n";
	}
}
function show(answer) {
	return answer ;
}