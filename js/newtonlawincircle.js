function calculate() {
	var f =parseFloat(document.getElementById("f").value.replace(",","."));
	var m =parseFloat(document.getElementById("m").value.replace(",","."));
	var ac=parseFloat(document.getElementById("ac").value.replace(",","."));
	if(!f) {
		f = m * ac ;
		document.getElementById("f").value=show(f);
		}
	}
function show(answer) {
	return answer ;
}newtonlawincircle