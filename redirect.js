var target;
if (window.location.href.indexOf('http://172.20.6.254/webAuth/index.htm?') === 0) {
	target = window.location.search.substr(1);
	alert(target);
	window.location.href = 'http://' + target;
}