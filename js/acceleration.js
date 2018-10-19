function calculate() {
	var time =parseFloat(document.getElementById("t").value.replace(",","."));
	var vi =parseFloat(document.getElementById("vi").value.replace(",","."));
	var vf =parseFloat(document.getElementById("vf").value.replace(",","."));
	var acceleration =parseFloat(document.getElementById("a").value.replace(",","."));
	var v = vf - vi
	if(!time) {
		if (isNaN(time)) time = time || 0;
		if (isFinite(time)) time = time || 0
		time = v / acceleration ;
		document.getElementById("t").value=show(time) + " s";
	} else if(!vi) {
		if (isNaN(vi)) vi = vi || 0;
		if (isFinite(vi)) vi = vi || 0
		vi = vf - acceleration * time ;
		document.getElementById("vi").value=show(vi) + " m/s";
	}  else if(!vf) {
		if (isNaN(vf)) vf = vf || 0;
		if (isFinite(vf)) vf = vf || 0
		vf = vi + acceleration * time ;
		document.getElementById("vf").value=show(vf) + " m/s";
		}
	else {
		if (isNaN(acceleration)) acceleration = acceleration || 0;
		if (isFinite(acceleration)) acceleration = acceleration || 0
		acceleration = v / time  ;
		document.getElementById("a").value=show(acceleration) + " m/s";
		}
}
function show(answer) {
	return answer
}
