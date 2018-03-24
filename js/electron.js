function calculate() {
	var atom =parseFloat(document.getElementById("atom").value.replace(",","."));
	var element1 =parseFloat(document.getElementById("element1").value.replace(",","."));
	if(atom == 1) {
		document.getElementById("atom").value=show('1s¹');
		document.getElementById("element1").value=show("هيدروجين");
		
		}
	if(atom == 2) {
		document.getElementById("atom").value=show("1s²");
		document.getElementById("element1").value=show("هيليوم");
		
		}
	if(atom == 3) {
		document.getElementById("atom").value=show("1s² 2s¹");
		document.getElementById("element1").value=show("ليثيوم");
		
		}
	if(atom == 4) {
		document.getElementById("atom").value=show("1s² 2s²");
		document.getElementById("element1").value=show("بيربليوم");
		
		}
	if(atom == 5) {
		document.getElementById("atom").value=show("1s² 2s² 2p¹");
		document.getElementById("element1").value=show("بورون");
		
		}
	if(atom == 6) {
		document.getElementById("atom").value=show("1s² 2s² 2p²");
		document.getElementById("element1").value=show("كربون");
		
		}
	if(atom == 7) {
		document.getElementById("atom").value=show("1s² 2s² 2p³");
		document.getElementById("element1").value=show("نتروجين");
		}
	if(atom == 8) {
		document.getElementById("atom").value=show(" 1s² 2s² 2p⁴");
		document.getElementById("element1").value=show("أكسجين");
		
		}
	if(atom == 9) {
		document.getElementById("atom").value=show("1s² 2s² 2p⁵");
		document.getElementById("element1").value=show("فلور");
		
	}
	if(atom == 10) {
		document.getElementById("atom").value=show("1s² 2s² 2p⁶");
		document.getElementById("element1").value=show("نيون");
		
		}
	if(atom == 11) {
		document.getElementById("atom").value=show("[Ne]3s¹");
		document.getElementById("element1").value=show("صوديوم");
		
		}
	if(atom == 12) {
		document.getElementById("atom").value=show("[Ne]3s²");
		document.getElementById("element1").value=show("مغنسيوم");
		
		}
	if(atom == 13) {
		document.getElementById("atom").value=show("[Ne]3s² 3p¹");
		document.getElementById("element1").value=show("المنيوم");
		
		}
	if(atom == 14) {
		document.getElementById("atom").value=show("[Ne]3s² 3p²");
		document.getElementById("element1").value=show("سيليكون");
		
		}
	if(atom == 15) {
		document.getElementById("atom").value=show("[Ne]3s² 3p³");
		document.getElementById("element1").value=show("فوسفور");
		
		}
	if(atom == 16) {
		document.getElementById("atom").value=show("[Ne]3s² 3p⁴");
		document.getElementById("element1").value=show("كبريت");
		
		}
	if(atom == 17) {
		document.getElementById("atom").value=show("[Ne]3s² 3p⁵");
		document.getElementById("element1").value=show("كلور");
		
		}
	if(atom == 18) {
		document.getElementById("atom").value=show("[Ne]3s² 3p⁶");
		document.getElementById("element1").value=show("أرغون");
		
		}
	if(atom == 19) {
		document.getElementById("atom").value=show("[Ar] 4s¹");
		document.getElementById("element1").value=show("بوتاسيوم");
		
		}
	if(atom == 20) {
		document.getElementById("atom").value=show("[Ar] 4s²");
		document.getElementById("element1").value=show("كالسيوم");
		
		}
	if(atom == 21) {
		document.getElementById("atom").value=show("[Ar] 3d¹ 4s²");
		document.getElementById("element1").value=show("سكانديوم");
		
		}
	if(atom == 22) {
		document.getElementById("atom").value=show("[Ar] 3d² 4s²");
		document.getElementById("element1").value=show("تيتانيوم");
		
		}
	if(atom == 23) {
		document.getElementById("atom").value=show("[Ar] 3d³ 4s²");
		document.getElementById("element1").value=show("فاناديوم");
		
		}
	if(atom == 24) {
		document.getElementById("atom").value=show("[Ar] 3d⁵ 4s¹");
		document.getElementById("element1").value=show("كروم");
		
		}
	if(atom == 25) {
		document.getElementById("atom").value=show("[Ar] 3d⁵ 4s²");
		document.getElementById("element1").value=show("مغنيز");
		
		}
	if(atom == 26) {
		document.getElementById("atom").value=show("[Ar] 3d⁶ 4s²");
		document.getElementById("element1").value=show("حديد");
		
		}
	if(atom == 27) {
		document.getElementById("atom").value=show("[Ar] 3d⁷ 4s²");
		document.getElementById("element1").value=show("كوبالت");
		
		}
	if(atom == 28) {
		document.getElementById("atom").value=show("[Ar] 3d⁸ 4s²");
		document.getElementById("element1").value=show("نيكل");
		
		}
	if(atom == 29) {
		document.getElementById("atom").value=show("[Ar] 3d¹⁰ 4s¹");
		document.getElementById("element1").value=show("نحاس");
		
		}
	if(atom == 30) {
		document.getElementById("atom").value=show("[Ar] 3d¹⁰ 4s²");
		document.getElementById("element1").value=show("زنك");
		
		}
	if(atom > 30) {
		document.getElementById("atom").value=show("الاعداد فوق 30 غير متوفرة");
		document.getElementById("element1").value=show("يرجى وضع عدد أقل من 30");
		
		}
		

	
	
}
function show(answer) {
	return answer ;
}