function calculate() {
	var angle =parseFloat(document.getElementById("angle").value.replace(",","."));
	var t =parseFloat(document.getElementById("t").value.replace(",","."));
	var fr =parseFloat(document.getElementById("fr").value.replace(",","."));
	if(!t) {
		t = fr * Math.sin(angle)  ;
		document.getElementById("t").value=show(t) + " N.m";
		}
	if(!fr) {
		fr = t / angle  ;
		document.getElementById("fr").value=show(fr) + " N";
		}
	if(!angle) {
		angle =  t / fr  ;
		document.getElementById("angle").value=show(angle) + " ";
		}

}
function show(answer) {
	return answer ;
}
