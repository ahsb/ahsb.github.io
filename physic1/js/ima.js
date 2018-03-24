function calculate() {
	var df =parseFloat(document.getElementById("df").value.replace(",","."));
	var dr =parseFloat(document.getElementById("dr").value.replace(",","."));
	var ima =parseFloat(document.getElementById("ima").value.replace(",","."));
	if(!ima) {
		 ima = df / dr  ;
		document.getElementById("ima").value=show(ima);
		}
	if(!df) {
		 df = ima * dr  ;
		document.getElementById("df").value=show(df) + " m/n";
		}
	if(!dr) {
		 dr = df / ima  ;
		document.getElementById("dr").value=show(dr) ;
		}
}
function show(answer) {
	return answer ;
}