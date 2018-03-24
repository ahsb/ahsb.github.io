function docalc() {
	var v=parseFloat(document.getElementById("a").value.replace(",","."));
	var f=parseFloat(document.getElementById("ab").value);
	var s=parseFloat(document.getElementById("c").value.replace(",","."));
	var g=parseFloat(document.getElementById("d").value.replace(",","."));
	var rr=parseFloat(document.getElementById("r").value);
	v/=f;
	if(!s) {
		s=v*v/g/9.81;
		document.getElementById("c").value=rounddig(s,rr);
	} else if(!v) {
		v=Math.sqrt(g*s*9.81)*f;
		document.getElementById("a").value=rounddig(v,rr);
	} else {
		g=v*v/s/9.81;
		document.getElementById("d").value=rounddig(g,rr);
	}
}
function rounddig(i,j) {
	return Math.round(Math.pow(10,j)*i)/Math.pow(10,j);
}
function dels(x) {
	document.getElementById(x).value="";
}