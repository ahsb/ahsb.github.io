function calculate() {
	var time =parseFloat(document.getElementById("t").value.replace(",","."));
	var v =parseFloat(document.getElementById("vf").value.replace(",","."));
	var acceleration =parseFloat(document.getElementById("a").value.replace(",","."));
	if(!time) {
		time = -(v / acceleration) ;
		document.getElementById("t").value=show(time) + " s";
	}  else if(!v) {
		v = -(acceleration * time) ;
		document.getElementById("vf").value=show(v) ;
		}
	else {
		acceleration = (v / time)  ;
		document.getElementById("a").value=show(acceleration);
		}
}
function show(answer) {
	return answer
}



