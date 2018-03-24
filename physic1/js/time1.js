if(t0||t1||t2) {
		if(!t0) t0=0;
		if(!t1) t1=0;
		if(!t2) t2=0;
		t=3600*t0+60*t1+t2;
	}
	 if(!t0&&!t1&&!t2) {
		t=(v1-v0)/g/9.80665;
		t0=Math.floor(t/3600);
		t-=t0*3600;
		while(t1>=60) {
			++t0;
			t1-=60;
		}
		t1=Math.floor(t/60);
		t2=rounddig(t-t1*60,rr);
		while(t2>=60) {
			++t1;
			t2-=60;
		}