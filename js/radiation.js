function calculate() {
	var h=parseFloat(document.getElementById("h").value.replace(",","."));
	var u=parseFloat(document.getElementById("u").value.replace(",","."));
	var c = 3 * Math.pow(10 , 8);
	if(!h) {
		h = c / u ;
		document.getElementById("h").value=show(h) + " Hz";
	} else if(!u) {
		u = c / h ;
		document.getElementById("u").value=show(u)  + " m";}
	

}
function show(answer) {
	return answer;
}
