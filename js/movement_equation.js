function calculate() {
	var time =parseFloat(document.getElementById("t").value.replace(",","."));
	var vi =parseFloat(document.getElementById("vi").value.replace(",","."));
	var vf =parseFloat(document.getElementById("vf").value.replace(",","."));
	var d = parseFloat(document.getElementById("d").value.replace(",","."));
	var a = parseFloat(document.getElementById("a").value.replace(",","."));
	var v = vf - vi;
	halfa = 0.5 * a
	if(!time) {
		time = v / a ;
		document.getElementById("t").value=show(time) + " s";
	} 
	if(!vf) {
		vf = vi + a * time ;
		document.getElementById("vf").value=show(vf) + " m\s";
		}
	if(!d) {
	d = vi * time + halfa * Math.pow(time, 2);
	document.getElementById("d").value=show(d) + " m";
	}
	if(!vi) {
	vi = vf - a * time ;
	document.getElementById("vi").value=show(vi) + " m\s";
	}
	
	if(!a) {
	a = v / time ;
	document.getElementById("a").value=show(a) + " m";
	}
	
}
function show(answer) {
	return answer ;
}