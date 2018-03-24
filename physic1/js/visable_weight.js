function calculate() {
	var m = parseFloat(document.getElementById("m").value.replace(",","."));
	var fg = parseFloat(document.getElementById("fg").value.replace(",","."));
	var a = parseFloat(document.getElementById("a").value.replace(",","."));
	var n = parseFloat(document.getElementById("n").value.replace(",","."));
	var g = 9.8 ;
	var ndown = n - fg ;
	var nup = fg - n ;
	var aplusg = a + g ;
	var anevg = a - g ;
	if (document.getElementById('side1').checked) {
		if(!m) {
			m = n / g ;
			document.getElementById("m").value=show(m) + " kg";
		}
	
		if(!a) {
			a =  nup / m ;
			document.getElementById("a").value=show(a) + " m/s";
		}
	
		if(!fg) {
			fg = m * aplusg ;
			document.getElementById("fg").value=show(fg) + " n";
		}
		if(!n) {
			n = m * g ;
			document.getElementById("n").value=show(n) + " n";
		}
	
	}
	if (document.getElementById('side2').checked) {
		if(!m) {
			m = n / g ;
			document.getElementById("m").value=show(m) + " kg";
		}
	
		if(!a) {
			a = ndown / m 
			document.getElementById("a").value=show(a) + " m\s";
		}
	
		if(!fg) {
			fg = m * anevg ;
			document.getElementById("fg").value=show(fg) + " n";
		}
		if(!n) {
			n = m * g ;
			document.getElementById("n").value=show(n) + " n";
		}
	
	}
}
function show(answer) {
	return answer ;
}