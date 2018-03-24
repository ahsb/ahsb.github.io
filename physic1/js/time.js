function calculate() {
	var a = a || 0
	var tiseconds=parseFloat(document.getElementById("Tiseconds").value.replace(",","."));
	var timinutes=parseFloat(document.getElementById("Timinutes").value.replace(",","."));
	var tihours=parseFloat(document.getElementById("Tihours").value.replace(",","."));
	var tfseconds=parseFloat(document.getElementById("Tfseconds").value.replace(",","."));
	var tfminutes=parseFloat(document.getElementById("Tfminutes").value.replace(",","."));
	var tfhours=parseFloat(document.getElementById("Tfhours").value.replace(",","."));
	var tseconds=parseFloat(document.getElementById("Tseconds").value.replace(",","."));
	var tminutes=parseFloat(document.getElementById("Tminutes").value.replace(",","."));
	var thours=parseFloat(document.getElementById("Thours").value.replace(",","."));
	var tisecondstomin = 0
	var tfsecondstomin = 0 
	var tsecondstomin = 0
	if(!tiseconds) {
		tiseconds = tfseconds - tseconds ;
		if (tiseconds > 60){
			tisecondstomin = 1 ;
			tiseconds = tiseconds - 60 ;
			document.getElementById("Tiseconds").value=show(tiseconds);
			}
		else {
			document.getElementById("Tiseconds").value=show(tiseconds);	
		}
	} 
	
	else if(!tfseconds) {
		tfseconds = tiseconds + tseconds ;
		if (tfseconds > 60){
			tfsecondstomin = 1 ;
			tfseconds = tfseconds - 60 ;
			document.getElementById("Tfseconds").value=show(tfseconds);
			}
		else {
			document.getElementById("Tfseconds").value=show(tfseconds);	
		}
	} 
	else {
		tseconds = tfseconds - tiseconds ;
		if (tseconds > 60){
			tsecondstomin = 1 ;
			tseconds = tseconds - 60 ;
			document.getElementById("Tseconds").value=show(tseconds);
			}
		else {
			document.getElementById("Tseconds").value=show(tseconds);
		}
	} 
	
	
	if(!timinutes) {
		timinutes = tfminutes - tminutes ;
		if (timinutes > 60){
			timinutestohours = 1 ;
			timinutes = timinutes - 60 ;
			document.getElementById("Timinutes").value=show(timinutes);
			}
		else {
			document.getElementById("Timinutes").value=show(timinutes);	
		}
	} 
	else if(!tfminutes) {
		tfminutes = timinutes  + tminutes ;
		if (tfminutes > 60){
			tfminutestohours = 1 ;
			tfminutes = fiminutes - 60 ;
			document.getElementById("Tfminutes").value=show(tfminutes);
			}
		else {
			document.getElementById("Tfminutes").value=show(tfminutes);	
		}
	} 
	else {
		tminutes = tfminutes - timinutes ;
		if (tminutes > 60){
			tminutestohours = 1 ;
			tminutes = tminutes - 60 ;
			document.getElementById("Tminutes").value=show(tminutes);
			}
		else {
			document.getElementById("Tminutes").value=show(tminutes);	
		}
	} 
	
	 
	 
	if(!tihours) {
		tihours = tfhours - thours ;
		document.getElementById("Tihours").value=show(tihours);	
		}
		
	else if(!tfhours) {
		tfhours = tihours  + thours ;
		document.getElementById("Tfhours").value=show(tfhours);	
		} 
	else {
		thours = tfhours - tihours ;
		document.getElementById("Thours").value=show(thours);		
	} 
			
			
}
function show(answer) {
	return answer
}
function multiply(answer) {
	return answer
}
