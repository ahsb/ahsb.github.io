function calculate() {
	var a =parseFloat(document.getElementById("a").value.replace(",","."));
	var b =parseFloat(document.getElementById("b").value.replace(",","."));
	if(!a) {
		 a = b ;
		document.getElementById("a").value=show(a);
		}
	if(!b) {
		 b = a    ;
		document.getElementById("b").value=show(b);
		}
}
function show(answer) {
	return answer ;
}