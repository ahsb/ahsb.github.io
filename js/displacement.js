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
			if (isNaN(displacement)) displacement = displacement || 0;
			if (isFinite(displacement)) displacement = displacement || 0;
			document.getElementById("D").value=show(displacement) + "    m";
		} else if(!displacementfirst) {
			displacementfirst = displacementfinal - displacement ;
			if (isNaN(displacementfirst)) displacementfirst = displacementfirst || 0;
			if (isFinite(displacementfirst)) displacementfirst = displacementfirst || 0;
			document.getElementById("Di").value=show(displacementfirst)  + "    m";
		} else {
			displacementfinal = displacement + displacementfirst ;
			if (isNaN(displacementfinal)) displacementfinal = displacementfinal || 0;
			if (isFinite(displacementfinal)) displacementfinal = displacementfinal || 0;
			document.getElementById("Df").value=show(displacementfinal) + "    m";
		}
	}
	if (document.getElementById('side2').checked) {
		if(!displacement) {
			displacement = displacementfinal - displacementfirst ;
			if (isNaN(displacement)) displacement = displacement || 0;
			if (isFinite(displacement)) displacement = displacement || 0;
			document.getElementById("D").value=show(displacement) + "    m";
		} else if(!displacementfirst) {
			displacementfirst = displacementfinal - displacement ;
			if (isNaN(displacementfirst)) displacementfirst = displacementfirst || 0;
			if (isFinite(displacementfirst)) displacementfirst = displacementfirst || 0;
			document.getElementById("Di").value=show(displacementfirst)  + "    m";
		} else {
			displacementfinal = displacementfirst + displacement ;
			if (isNaN(displacementfinal)) displacementfinal = displacementfinal || 0;
			if (isFinite(displacementfinal)) displacementfinal = displacementfinal || 0;
			document.getElementById("Df").value=show(displacementfinal) + "    m";
		}
	}
	if (document.getElementById('side3').checked) {

		if(!a) {
			a =  Math.sqrt(r - b) ;
			if (isNaN(a)) a = a || 0;
			if (isFinite(a)) a = a || 0;
			document.getElementById("Di").value=show(a);
		}
		if(!b) {
			b =  Math.sqrt(r - a);
			if (isNaN(b)) b = b || 0;
			if (isFinite(b)) b = b || 0;
			document.getElementById("Df").value=show(b);
		}
		if(!r) {
			r =  Math.sqrt(a + b) ;
			if (isNaN(r)) r = r || 0;
			if (isFinite(r)) r = r || 0;
			document.getElementById("D").value=show(r);}
		}
	}
function show (answer){
	return answer ;


}
