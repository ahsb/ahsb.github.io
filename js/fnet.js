function calculate() {
	var f1 =parseFloat(document.getElementById("f1").value.replace(",","."));
	var f2 =parseFloat(document.getElementById("f2").value.replace(",","."));
	var fnet = parseFloat(document.getElementById("fnet").value.replace(",","."));

		if (document.getElementById('side1').checked){

				if(!f1) {
					f1 = fnet - f2;
					if (isNaN(f1)) f1 = f1 || 0;
					if (isFinite(f1)) f1 = f1 || 0;
					document.getElementById("f1").value=show(f1) + " n";}

				if(!f2) {
					f2 =  fnet - f1 ;
					if (isNaN(f2)) f2 = f2 || 0;
					if (isFinite(f2)) f2 = f2 || 0
					document.getElementById("f2").value=show(f2) + " n";}

				if(!fnet) {

					fnet = f1 + f2  ;
					if (isNaN(fnet)) fnet = fnet || 0;
					if (isFinite(fnet)) fnet = fnet || 0
					document.getElementById("fnet").value=show(fnet) + " n";}

				}
			if (document.getElementById('side2').checked) {
				if(!f1) {
					f1 = f2 - fnet ;
					if (isNaN(f1)) f1 = f1 || 0;
					if (isFinite(f1)) f1 = f1 || 0;
					document.getElementById("f1").value=show(f1) + " n";}


				if(!f2) {
					f2 = f1 + fnet ;
					if (isNaN(f2)) f2 = f2 || 0;
					if (isFinite(f2)) f2 = f2 || 0;
					document.getElementById("f2").value=show(f2) + " n";}


				if(!fnet) {
						if (f1 <= f2){
							fnet =  f1 - f2  ;
							if (isNaN(fnet)) fnet = fnet || 0;
							if (isFinite(fnet)) fnet = fnet || 0
							document.getElementById("fnet").value=show(fnet) + " n";}
						else if (f1 => f2){
							fnet = f2 - f1 ;
							if (isNaN(fnet)) fnet = fnet || 0;
							if (isFinite(fnet)) fnet = fnet || 0
							document.getElementById("fnet").value=show(fnet) + " n"}
						}
	}
}

function show(answer) {
	return answer ;
}
