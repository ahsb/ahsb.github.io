function calculate() {
	var displacementfirst=parseFloat(document.getElementById("Di").value.replace(",","."));
	var displacementfinal=parseFloat(document.getElementById("Df").value.replace(",","."));
	var displacement=parseFloat(document.getElementById("D").value.replace(",","."));
	var a = Math.pow(displacementfirst, 2)
	var b = Math.pow(displacementfinal, 2)
	var r = Math.pow(displacement, 2)
	if (document.getElementById('side1').checked) {
		if(!displacement) {
			displacement = displacementfinal - displacementfirst ;
			document.getElementById("D").value=show(displacement) + "    m";
		} else if(!displacementfirst) {
			displacementfirst = displacementfinal - displacement ;
			document.getElementById("Di").value=show(displacementfirst)  + "    m";
		} else {
			displacementfinal = displacement + displacementfirst ;
			document.getElementById("Df").value=show(displacementfinal) + "    m";
		}
	}
	if (document.getElementById('side2').checked) {
		if(!displacement) {
			displacement = displacementfinal - displacementfirst ;
			document.getElementById("D").value=show(displacement) + "    m";
		} else if(!displacementfirst) {
			displacementfirst = displacementfinal - displacement ;
			document.getElementById("Di").value=show(displacementfirst)  + "    m";
		} else {
			displacementfinal = displacementfirst + displacement ;
			document.getElementById("Df").value=show(displacementfinal) + "    m";
		}
	}
	if (document.getElementById('side3').checked) {
	
		if(!a) {
			a =  Math.sqrt(r - b) ;
			document.getElementById("Di").value=show(a);
		}
		if(!b) {
			b =  Math.sqrt(r - a);
			document.getElementById("Df").value=show(b);
		}
		if(!r) {
			r =  Math.sqrt(a + b) ;
			document.getElementById("D").value=show(r);}
		}
	}
function show (answer){ 
	return answer ;


}