function calculate() {
	var a =parseFloat(document.getElementById("a").value.replace(",","."));
	var b =parseFloat(document.getElementById("b").value.replace(",","."));
	var c =parseFloat(document.getElementById("c").value.replace(",","."));
	if(a) {
		b = a ;
		document.getElementById("b").value=show(b);
		c = a ;
		document.getElementById("c").value=show(c);
		}
	if(b) {
		a = b ;
		document.getElementById("a").value=show(a);
		c = b ;
		document.getElementById("c").value=show(c);
		}
	if(c) {
		b = c ;
		document.getElementById("b").value=show(b);
		a = c ;
		document.getElementById("a").value=show(a);
		}
}
	
		

function show(answer) {
	return answer ;
}