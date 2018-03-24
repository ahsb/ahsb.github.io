function calculate() {
	var wi =parseFloat(document.getElementById("wi").value.replace(",","."));
	var wo =parseFloat(document.getElementById("wo").value.replace(",","."));
	var e =parseFloat(document.getElementById("e").value.replace(",","."));
	if(!e) {
		 e = (wo / wi)*100 ;
		document.getElementById("e").value=show(e) + " %";
		}
	if(!wo) {
		 wo = (e * wi) / 100     ;
		document.getElementById("wo").value=show(wo);
		}
	if(!wi) {
		  wi = (wo * 100) / e   ;
		document.getElementById("wi").value=show(wi);
		}

}
function show(answer) {
	return answer ;
}