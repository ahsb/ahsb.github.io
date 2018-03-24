function calculate() {
	var a =parseFloat(document.getElementById("a").value.replace(",","."));
	var l =parseFloat(document.getElementById("l").value.replace(",","."));
	var li =parseFloat(document.getElementById("li").value.replace(",","."));
	var t =parseFloat(document.getElementById("t").value.replace(",","."));
	if(!a) {
	 a = l / (li * t) ;
		document.getElementById("a").value=show(a);
		}
	if(!l) {
	 l = (t * li) * a ;
		document.getElementById("l").value=show(l);
		}
	if(!t) {
	 t =  l * (a / li)
		document.getElementById("t").value=show("تحت العمل");
		}
	if(!li) {
		document.getElementById("li").value=show("تحت العمل");
		}
	
		
}
function show(answer) {
	return answer ;
}