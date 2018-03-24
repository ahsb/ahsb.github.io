function calculate() {
	var f1 =parseFloat(document.getElementById("f1").value.replace(",","."));
	var f2 =parseFloat(document.getElementById("f2").value.replace(",","."));
	var fnet = parseFloat(document.getElementById("fnet").value.replace(",","."));
	
		if (document.getElementById('side1').checked){
				
				if(!f1) {
					f1 = fnet - f2;
					document.getElementById("f1").value=show(f1) + " n";}

				if(!f2) {
					f2 =  fnet - f1 ;
					document.getElementById("f2").value=show(f2) + " n";}
		
				if(!fnet) {
						
					fnet = f1 + f2  ;
					document.getElementById("fnet").value=show(fnet) + " n";}
						
				}
			if (document.getElementById('side2').checked) {
				if(!f1) {
					f1 = f2 + fnet ;
					document.getElementById("f1").value=show(f1) + " n";}
		
	
				if(!f2) {
					f2 = f1 + fnet ; 
					document.getElementById("f2").value=show(f2) + " n";}
	
	
				if(!fnet) {
						if (f1 <= f2){
							fnet =  f1 - f2  ;
							document.getElementById("fnet").value=show(fnet) + " n";}
						else if (f1 => f2){
							fnet = f2 - f1 ;
							document.getElementById("fnet").value=show(fnet) + " n"}
						}
	}
}

function show(answer) {
	return answer ;
}	