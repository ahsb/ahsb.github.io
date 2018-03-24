function calculate() {
	var a =parseFloat(document.getElementById("a").value.replace(",","."));
	var b =parseFloat(document.getElementById("b").value.replace(",","."));
	var c =parseFloat(document.getElementById("c").value.replace(",","."));
	if(!c) {
		 c = (a / b) * 100 ;
		document.getElementById("c").value=show(c) + " %";
		}
	if(!b) {
		 b = (a* 100) / c    ;
		document.getElementById("b").value=show(b) + " k/g";
		}
	if(!a) {
		  a = (b * c) / 100    ;
		document.getElementById("a").value=show(a) + " k/g";
		}
}
function show(answer) {
	return answer ;
}