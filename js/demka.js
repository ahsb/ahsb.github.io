function calculate() {
	var q =parseFloat(document.getElementById("q").value.replace(",","."));
	var w =parseFloat(document.getElementById("w").value.replace(",","."));
	var u =parseFloat(document.getElementById("u").value.replace(",","."));
	if(!u) {
		u = q - w ;
		document.getElementById("u").value=show(u) ;
		}
	if(!w) {
		 w = q - u ;
		document.getElementById("w").value=show(w);
		}
	if(!q) {
		q = u + w ;
		document.getElementById("q").value=show(q) ;
		}
}
function show(answer) {
	return answer ;
}