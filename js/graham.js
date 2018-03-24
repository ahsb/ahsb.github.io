function calculate() {
	var a =parseFloat(document.getElementById("a").value.replace(",","."));
	var b =parseFloat(document.getElementById("b").value.replace(",","."));
	var c =parseFloat(document.getElementById("c").value.replace(",","."));
	if(!c) {
		c = Math.sqrt(a / (b * 2))  ;
		document.getElementById("c").value=show(c);
		}
	
}
function show(answer) {
	return answer ;
}