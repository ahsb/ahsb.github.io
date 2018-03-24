function calculate() {
	var time =parseFloat(document.getElementById("t").value.replace(",","."));
	var vi =parseFloat(document.getElementById("vi").value.replace(",","."));
	var vf =parseFloat(document.getElementById("vf").value.replace(",","."));
	var d = parseFloat(document.getElementById("d").value.replace(",","."));
	var v = vf - vi;
	if (document.getElementById('side1').checked) {	
		var g = 9.8;
		var vi = 0
		var v = vf;
		document.getElementById("vi").value=show("0") + " s";
		if(!time) {
		time = v / g ;
		document.getElementById("t").value=show(time) + " s";
	   }
	   else if(!vf) {
		vf = vi + g * time ;
		document.getElementById("vf").value=show(vf) + " m";
		}
		if(!vi) {
		document.getElementById("vi").value=show(vi) + " m";
		}
		if(!d) {
		d = vi * time + 4.9 * Math.pow(time, 2) ;
		document.getElementById("d").value=show(d) + " m";
		}
	}
	else if (document.getElementById('side2').checked){
		var g = -9.8;
		var vf = 0
		var v = vi;
		document.getElementById("vf").value=show("0") + " s";
		if(!time) {
		time = v / g ;
		document.getElementById("t").value=show(time) + " s";
		}
		if(!vi) {
		vi = vf - g * time ;
		document.getElementById("vi").value=show(vi) + " m";
		}
		if(!d) {
		d = vi * time + 4.9 * Math.pow(time, 2) ;
		document.getElementById("d").value=show(d) + " m";
		}
	 
	
	}
}
function show(answer) {
	return answer ;
}