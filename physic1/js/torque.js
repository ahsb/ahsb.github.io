function calculate() {
	var angle =parseFloat(document.getElementById("angle").value.replace(",","."));
	var t =parseFloat(document.getElementById("t").value.replace(",","."));
	var fr =parseFloat(document.getElementById("fr").value.replace(",","."));
	if(!t) {
		t = fr * Math.sin(angle)  ;
		document.getElementById("t").value=show(t) + " N.m";
		}
	
}
function show(answer) {
	return answer ;
}