function calculate() {
	var time =parseFloat(document.getElementById("t").value.replace(",","."));
	var vi =parseFloat(document.getElementById("vi").value.replace(",","."));
	var vf =parseFloat(document.getElementById("vf").value.replace(",","."));
	var acceleration =parseFloat(document.getElementById("a").value.replace(",","."));
	var v = vf - vi
	if(!time) {
		time = v / acceleration ;
		document.getElementById("t").value=show(time) + " s";
	} else if(!vi) {
		vi = vf - acceleration * time ;
		document.getElementById("vi").value=show(vi) + " m";
	}  else if(!vf) {
		vf = vi + acceleration * time ;
		document.getElementById("vf").value=show(vf) + " m";
		}
	else {
		acceleration = v / time  ;
		document.getElementById("a").value=show(acceleration) + " m/s";
		}
}
function show(answer) {
	return answer
}



