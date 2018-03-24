function calculate() {
	var m =parseFloat(document.getElementById("m").value.replace(",","."));
	var c =parseFloat(document.getElementById("c").value.replace(",","."));
	var e0 =parseFloat(document.getElementById("e0").value.replace(",","."));
	if(!e0) {
		 e0 = m * Math.pow(c, 2)  ;
		document.getElementById("e0").value=show(e0) + " J";
		}
	if(!c) {
		 c = Math.sqrt(e0 / m )   ;
		document.getElementById("c").value=show(c) + " m/s";
		}
	if(!m) {
		 m =   e0 / Math.pow(c ,2)  ;
		document.getElementById("m").value=show(m) + " kg" ;
		}
}
function show(answer) {
	return answer ;
}