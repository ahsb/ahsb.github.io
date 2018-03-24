function calculate() {
	var m =parseFloat(document.getElementById("m").value.replace(",","."));
	var hf =parseFloat(document.getElementById("hf").value.replace(",","."));
	var q =parseFloat(document.getElementById("q").value.replace(",","."));
	if(!q) {
		q = hf * m ;
		document.getElementById("q").value=show(q) ;
		}
	if(!m) {
		 m = q / hf ;
		document.getElementById("m").value=show(m) + " kg";
		}
	if(!hf) {
		hf = q / m ;
		document.getElementById("hf").value=show(hf) ;
		}
}
function show(answer) {
	return answer ;
}