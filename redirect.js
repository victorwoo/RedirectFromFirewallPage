var pattern = /^http:\/\/\S+\/webAuth\/index\.htm\?(.+)$/m,
	match,
	target;
match = pattern.exec(window.location.href);
if (match != null) {
	target = match[1];
	window.location.href = 'http://' + target;
}