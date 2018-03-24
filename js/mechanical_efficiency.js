function calculate() {
	var ma =parseFloat(document.getElementById("ma").value.replace(",","."));
	var ima =parseFloat(document.getElementById("ima").value.replace(",","."));
	var e =parseFloat(document.getElementById("e").value.replace(",","."));
	if(!e) {
		 e = (ma / ima)*100 ;
		document.getElementById("e").value=show(e) + " %";
		}
	if(!ima) {
		 ima = (e * ma) / 100     ;
		document.getElementById("ima").value=show(ima);
		}
	if(!ma) {
		  ma = (ima * 100) / e   ;
		document.getElementById("ma").value=show(ma);
		}

}
function show(answer) {
	return answer ;
}