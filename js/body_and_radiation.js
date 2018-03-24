function calculate() {
	var m =parseFloat(document.getElementById("m").value.replace(",","."));
	var v =parseFloat(document.getElementById("v").value.replace(",","."));
	var h1 =parseFloat(document.getElementById("h1").value.replace(",","."));
	var h2 =parseFloat(document.getElementById("h2").value.replace(",","."));
	
	if(!h1) {
	 h1 = (m * v) * h2 ;
		document.getElementById("h1").value=show(h1);
		}
	if(!v) {
		document.getElementById("v").value=show("تحت العمل");
		}
	if(!m) {
		document.getElementById("m").value=show("تحت العمل");
		}
	if(!h2) {
	 h2 = h1 / (m * v) ;
		document.getElementById("h2").value=show(h2);
		}
	
		
}
function show(answer) {
	return answer ;
}