function calculate() {
	var ma =parseFloat(document.getElementById("ma").value.replace(",","."));
	var ima =parseFloat(document.getElementById("ima").value.replace(",","."));
	var e =parseFloat(document.getElementById("e").value.replace(",","."));
	if(!e) {
		 e = (ma / ima)*100 ;
		document.getElementById("e").value=show(e) + " %";
		}
	if(!ma) {
		 ma = (e * ima) / 100     ;
		document.getElementById("ma").value=show(ma);
		}
	if(!ima) {
		  ima = (ma * 100) / e   ;
		document.getElementById("ima").value=show(ima);
		}

}
function show(answer) {
	return answer ;
}
