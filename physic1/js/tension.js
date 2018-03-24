function calculate() {
	var m =parseFloat(document.getElementById("m").value.replace(",","."));
	var vi =parseFloat(document.getElementById("vi").value.replace(",","."));
	var vf =parseFloat(document.getElementById("vf").value.replace(",","."));
	var d = parseFloat(document.getElementById("d").value.replace(",","."));
	var ft = parseFloat(document.getElementById("ft").value.replace(",","."));
	var g = 9.8 ; 
	if(!m) {
		m = v / a ;
		document.getElementById("t").value=show(time) + " s";}  if(!vf) {
		vf = vi + a * time ;
		document.getElementById("vf").value=show(vf) + " m";
		}
	if(!d) {
	d = vi * time + 0.5 * a + 2 ;
	document.getElementById("d").value=show(d) + " m";
	}
	if(!vi) {
	vi = vf - a * time ;
	document.getElementById("vi").value=show(vi) + " m";
	}
	
	if(!a) {
	a = v / time ;
	document.getElementById("a").value=show(a) + " m";
	}
	
}
function show(answer) {
	return answer ;
}