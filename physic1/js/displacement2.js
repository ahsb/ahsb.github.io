function calculate() {
	var a =parseFloat(document.getElementById("a").value.replace(",","."));
	var b =parseFloat(document.getElementById("b").value.replace(",","."));
	var angle = parseFloat(document.getElementById("angle").value.replace(",","."));
	var r = parseFloat(document.getElementById("r").value.replace(",","."));
	var a1 = Math.pow(a, 2);
	var b1 = Math.pow(b, 2);
	var r1 = Math.pow(r, 2);
	var a1plusb1 = a1 + b1
	var axb = a * b
	var ax2xb = axb * 2
	var cosangle = Math.cos(angle)
	var ax2xbxcos = ax2xb * cosangle
	if(angle === 90){
		if(!a) {
			a =  Math.sqrt(b1 - r1) ;
			document.getElementById("a").value=show(a);
		}
		if(!b) {
			b =  Math.sqrt(a1 - r1) ;
			document.getElementById("b").value=show(b);
		}
		if(!r) {
			r =  Math.sqrt(a1 + b1) ;
			document.getElementById("r").value=show(r);}
		}
	else if (angle != 90){
		if(!r) {
			r = Math.sqrt((a*a + b*b) - 2*a*b*Math.cos(angle)) ;
			document.getElementById("r").value=show(r);
		}
		}
	}

function show(answer) {
	return answer ;
}