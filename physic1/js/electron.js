function calculate() {
	var atom =parseFloat(document.getElementById("atom").value.replace(",","."));
	var element1 =parseFloat(document.getElementById("element1").value.replace(",","."));
	if(element1 == 1) {
		 element1		 = (a / b) * 100 ;
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