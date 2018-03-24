function calculate() {
	var m =parseFloat(document.getElementById("m").value.replace(",","."));
	var v =parseFloat(document.getElementById("v").value.replace(",","."));
	var ke =parseFloat(document.getElementById("ke").value.replace(",","."));
	if(!ke) {
		 ke = 0.5*(m * Math.pow(v, 2))  ;
		document.getElementById("ke").value=show(ke) + " J";
		}
	if(!m) {
		 m = ke/ 0.5*Math.pow(v, 2)  ;
		document.getElementById("m").value=show("تحت العمل") + " k/g";
		}

}
function show(answer) {
	return answer ;
}