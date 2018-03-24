function calculate() {
	var fi =parseFloat(document.getElementById("fi").value.replace(",","."));
	var ff =parseFloat(document.getElementById("ff").value.replace(",","."));
	var m =parseFloat(document.getElementById("m").value.replace(",","."));
	var a = parseFloat(document.getElementById("a").value.replace(",","."));
	var fneg = ff - fi;
	var fpos = ff + fi;
	if (document.getElementById('side1').checked) {
		if(!a){
		a = fpos / m ;
		document.getElementById('a').value=show(a) + " m/s";}
		else if(!m){
		m = fpos / a ;
      document.getElementById('m').value=show(m) + " kg";}

	}
	else if (document.getElementById('side2').checked){
		if (ff > fi){
			if(!a){
				a = fneg / m ;
				document.getElementById('a').value=show(a) + " m/s";}
			else if(!m){
				m = fneg / a ;
				document.getElementById('m').value=show(m) + " kg";}
			}
		else if (fi > ff){
		var fneg = fi - ff;
		
			if(!a){
				a = fneg / m ;
				document.getElementById('a').value=show(a) + " m/s";}
			else if(!m){
				m = fneg / a ;
				document.getElementById('m').value=show(m) + " kg";}
			}
		
		
		}
	
	}

function show(answer) {
	return answer ;
}
