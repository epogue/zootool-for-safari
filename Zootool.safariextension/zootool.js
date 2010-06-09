function handleMessage(msgEvent) {
	var messageName = msgEvent.name;
	var messageData = msgEvent.message;
	if (messageName === "zootool-lasso") {
		fireLasso();
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

safari.self.addEventListener("message", handleMessage, false);
