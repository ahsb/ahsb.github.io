function calculate() {
	var ke =parseFloat(document.getElementById("ke").value.replace(",","."));
	var pe =parseFloat(document.getElementById("pe").value.replace(",","."));
	var e =parseFloat(document.getElementById("e").value.replace(",","."));
	if(!e) {
		 e = ke + pe  ;
		document.getElementById("e").value=show(e);
		}
	if(!ke) {
		 ke = e - pe   ;
		document.getElementById("ke").value=show(ke);
		}
	if(!pe) {
		 pe =   e - ke   ;
		document.getElementById("pe").value=show(pe) ;
		}
}
function show(answer) {
	return answer ;
}