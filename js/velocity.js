function calculate() {
	var v1=parseFloat(document.getElementById("v1").value.replace(",","."));
	var v2=parseFloat(document.getElementById("v2").value.replace(",","."));
	var v=parseFloat(document.getElementById("v").value.replace(",","."));
	if (!v1){
		v1 = v - v2
		document.getElementById("v1").value=show(v1) + " m/s";}
	if (!v2){
		v2 = v - v1
		document.getElementById("v2").value=show(v2) + " m/s";
		}
	if (!v){
		v = v1 + v2
		document.getElementById("v").value=show(v) + " m/s";
	}
}

function show (answer){ 
	return answer ;


}