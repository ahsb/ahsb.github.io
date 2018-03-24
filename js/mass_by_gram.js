function calculate() {
	var a =parseFloat(document.getElementById("a").value.replace(",","."));
	var b =parseFloat(document.getElementById("b").value.replace(",","."));
	var c =parseFloat(document.getElementById("c").value.replace(",","."));
	if(!c) {
		 c = a * b ;
		document.getElementById("c").value=show(c) + " g";
		}
	if(!b) {
		 b = c / a    ;
		document.getElementById("b").value=show(b) + " mol";
		}
	if(!a) {
		  a = c / b ;
		document.getElementById("a").value=show(a) + " g/mol";
		}
}
function show(answer) {
	return answer ;
}