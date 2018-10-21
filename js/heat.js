function calculate() {
	var m =parseFloat(document.getElementById("m").value.replace(",","."));
	var c =parseFloat(document.getElementById("c").value.replace(",","."));
	var ti =parseFloat(document.getElementById("ti").value.replace(",","."));
	var tf =parseFloat(document.getElementById("tf").value.replace(",","."));
	var q =parseFloat(document.getElementById("q").value.replace(",","."));
	if(!q) {
		 q = (m * c) * (tf - ti) ;
		document.getElementById("q").value=show(q + " J") ;
		}
	if(!m) {

		document.getElementById("m").value=show("تحت العمل");
		}
	if(!ti) {

		document.getElementById("ti").value=show("تحت العمل") ;
		}
	if(!tf) {

		document.getElementById("tf").value=show("تحت العمل") ;
		}
	if(!c) {

		document.getElementById("c").value=show("تحت العمل") ;
		}
}
function show(answer) {
	return answer ;
}
