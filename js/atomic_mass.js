function calculate() {
	var a =parseFloat(document.getElementById("a").value.replace(",","."));
	var b =parseFloat(document.getElementById("b").value.replace(",","."));
	var c =parseFloat(document.getElementById("c").value.replace(",","."));
	var d =parseFloat(document.getElementById("d").value.replace(",","."));
	var f =parseFloat(document.getElementById("f").value.replace(",","."));
	if(!f) {
		 f = a * b + c * d    ;
		document.getElementById("f").value=show(f) ;
		}
}
function show(answer) {
	return answer ;
}