function calculate() {
	var velocity =parseFloat(document.getElementById("v").value.replace(",","."));
	var displacement=parseFloat(document.getElementById("d").value.replace(",","."));
	var time=parseFloat(document.getElementById("t").value.replace(",","."));
	if(!velocity) {
		velocity = displacement / time ;
		document.getElementById("v").value=show(velocity) + "  m/s";
	} else if(!displacement) {
		displacement = velocity * time ;
		document.getElementById("d").value=show(displacement) + "  m";
	} else {
		time = displacement / velocity ;
		document.getElementById("t").value=show(time) + "  s";
	}
}
function show(answer) {
	return answer
}

