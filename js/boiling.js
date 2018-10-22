function calculate() {
	var h=parseFloat(document.getElementById("h").value.replace(",","."));
	var u=parseFloat(document.getElementById("u").value.replace(",","."));
	var t=parseFloat(document.getElementById("t").value.replace(",","."));
	if(!h) {
		h = t / u  ;
		document.getElementById("h").value=show("هلا شباب") + " C°/m";
	}
	if(!u) {
		u = t * h ;
		document.getElementById("u").value=show(u)  + " m";}

 if(!t) {
		t = u * h ;
		document.getElementById("t").value=show(t)  + " C";}


}
function show(answer) {
	return answer;
}
