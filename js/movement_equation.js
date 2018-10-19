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
		if (isNaN(time)) time = time || 0;
		if (isFinite(time)) time = time || 0
		document.getElementById("t").value=show(time) + " s";
	}
	if(!vf) {
		vf = vi + a * time ;
		if (isNaN(vf)) vf = vf || 0;
		if (isFinite(vf)) vf = vf || 0
		document.getElementById("vf").value=show(vf) + " m\s";
		}
	if(!vi) {
	vi = vf - a * time ;
	if (isNaN(vi)) vi = vi || 0;
	if (isFinite(vi)) vi = vi || 0
	document.getElementById("vi").value=show(vi) + " m\s";
	}

	if(!a) {
	a = v / time ;
	if (isNaN(a)) a = a || 0;
	if (isFinite(a)) a = a || 0
	document.getElementById("a").value=show(a) + " m";
	}
	if(!d) {
		d = vi * time + halfa * Math.pow(time, 2);
		if (isNaN(d)) d = d || 0;
		if (isFinite(d)) d = d || 0
		document.getElementById("d").value=show(d) + " m";
	}
}
function show(answer) {
	return answer ;
}
