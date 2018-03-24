function calculate() {
	var m = parseFloat(document.getElementById("m").value.replace(",","."));
	var fg = parseFloat(document.getElementById("fg").value.replace(",","."));
	var g = 9.8
	if(!m) {
		m = fg / g ;
		document.getElementById("m").value=show(m) + " kg";
	}
	if(!fg) {
		fg = m*g ;
		document.getElementById("fg").value=show(fg) + " n";
	}
	
	
}
function show(answer) {
	return answer ;
}