function calculate() {
	var h =parseFloat(document.getElementById("h").value.replace(",","."));
	var m =parseFloat(document.getElementById("m").value.replace(",","."));
	var pe =parseFloat(document.getElementById("pe").value.replace(",","."));
	var g = 9.8 ;
	if(!pe) {
		 pe = (m * g) * h  ;
		document.getElementById("pe").value=show(pe);
		}
	if(!m) {
		 m =  pe / h * g    ;
		document.getElementById("m").value=show("تحت العمل") + " m/n";
		}
	if(!h) {
		 h = m*g /pe  ;
		document.getElementById("h").value=show("تحت العمل") ;
		}
}
function show(answer) {
	return answer ;
}