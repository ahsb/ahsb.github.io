function calculate() {
	var a =parseFloat(document.getElementById("a").value.replace(",","."));
	var b =parseFloat(document.getElementById("b").value.replace(",","."));
	var c =parseFloat(document.getElementById("c").value.replace(",","."));
	var d =parseFloat(document.getElementById("d").value.replace(",","."));
	if(!a) {
		 a = ( c + d) - d;
		document.getElementById("a").value=show(a);
		}
	if(!b) {
		 b = (c + d) - a    ;
		document.getElementById("b").value=show(b);
		}
	if(!c) {
		  c = (a  + b) - d ;
		document.getElementById("c").value=show(c);
		}
	if(!d) {
	    d = (a  + b) - c ;
		document.getElementById("d").value=show(d);
	}
}
function show(answer) {
	return answer ;
}