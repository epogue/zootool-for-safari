var isInIFrame = (window.location != window.parent.location) ? true : false;
if (isInIFrame == true) {
	
} else {
	var shift = 0;
	
	function handleMessage(msgEvent) {
		var messageName = msgEvent.name;
		var messageData = msgEvent.message;
		if (messageName === "zootool-lasso") {
			if ((shift == 1 && messageData.buttonBehavior == "open") || (shift == 0 && messageData.buttonBehavior == "lasso")) {
				fireLasso();
			} else {
				safari.self.tab.dispatchMessage("openZootool","");
				shift = 0;
			}
		}
	}

	function fireLasso(){
		var u = 'http://zootool.com';
		var d = document;
	
		if(!d.getElementById('zt-script')){
			var s = d.createElement('script');
			s.setAttribute('src', u + '/js/lasso.js?v=1.3');
			s.setAttribute('id', 'zt-script');
			d.body.appendChild(s);
		}
	
		ss = d.createElement('script');
		tt = d.createTextNode("s = setInterval(function(){u=0;try{u=!!(typeof ztinit=='function');}catch(i){}if(u){clearInterval(s);ztinit('1.3');}},200);");
		ss.appendChild(tt);
		d.body.appendChild(ss);
	}
	
	function handleKeyDown(event){
		if (event.keyCode == '16') shift = 1;
	}
	
	function handleKeyUp(event){
		if (event.keyCode == '16') shift = 0;
	}

	document.addEventListener("keydown", handleKeyDown, false);
	document.addEventListener("keyup", handleKeyUp, false);

	safari.self.addEventListener("message", handleMessage, false);
}