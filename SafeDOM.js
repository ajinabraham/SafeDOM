
var SafeSource =
{	StripAll:function(data)
	{
		if (data){
		data=data
		.replace(/([<>`'"${}()\/])/g,"");

		console.log("Stripped - "+data);
		}
		return data;

    },
    StripnEncode:function(data)
	{
		if(data){
		data=data
		.replace(/([<>`{}()])/g, "")
		.replace(/'/g, "&#x27;")
		.replace(/"/g, "&quot;");

		console.log("Stripped and Encoded - "+data);
		}
		return data;
    },
    JsEncode:function(data)
    {
    	if(data){
    	data=data
    	.replace(/</g, "\u003c")
    	.replace(/>/g, "\u003e")
    	.replace(/"/g, "\u0022")
    	.replace(/'/g, "\u0027")
    	.replace(/`/g, "\u0060")
    	.replace(/\(/g, "\u0028")
    	.replace(/\)/g, "\u0029")
    	.replace(/{/g, "\u007b")
    	.replace(/}/g, "\u007d")
    	.replace(/-/g, "\u002d")
    	.replace(/\+/g, "\u002b")
    	.replace(/\//g, "\u002f")
    	.replace(/\$/g, "\u0024");
    	
    	console.log("JavaScript Encoded - "+data);
    	}
    	return data;
    },
    HTMLEncode:function(data)
    {
    	if(data){
    	data=data
    	.replace(/</g, "&lt;")
    	.replace(/>/g, "&gt;")
    	.replace(/"/g, "&quot;")
    	.replace(/'/g, "&#x27;")
    	.replace(/`/g, "&#x60;")
    	.replace(/\(/g, "&#x28;")
    	.replace(/\)/g, "&#x29;")
    	.replace(/{/g, "&#x7B;")
    	.replace(/}/g, "&#x7D;")
    	.replace(/-/g, "&#x2D;")
    	.replace(/\+/g, "&#x2B;");

    	console.log("HTML Encoded - "+data);
    	}
    	return data;

    },
    CookieStrip:function(data)
    {
    	if(data){
    	data=data
    	.replace(/([;," \/])/g, "");
    	
    	console.log("Cookie Stripped - "+data);
    	}
    	return data;

    },
	Hooks:function()
	{
		try
		{
		//window.name
		var win = window.name;
		Object.defineProperty(window, "name", { get : function() { return SafeSource.StripnEncode(win)}});
		}
		catch(e)
		{
			console.log("Error - "+e.message);
		}
		try
		{
		//document.domain
		var domain = document.domain;
		Object.defineProperty(document, "domain", { get : function() { return SafeSource.StripAll(domain)}});
		}
		catch(e)
		{
			console.log("Error - "+e.message);
		}
		try
		{
		//document.URL
		var url = document.URL;
		Object.defineProperty(document, "URL", { get : function() { return SafeSource.StripnEncode(url)}});
		}
		catch(e)
		{
			console.log("Error - "+e.message);
		}
		try
		{
		//document.documentURI
		var URI = document.documentURI;
		Object.defineProperty(document, "documentURI", { get : function() { return SafeSource.StripnEncode(URI)}});
		}
		catch(e)
		{
			console.log("Error - "+e.message);
		}
		try
		{
		//document.URLUnencoded
		var URLUnEncode = document.URLUnencoded;
		Object.defineProperty(document, "URLUnencoded", { get : function() { return SafeSource.StripnEncode(URLUnEncode)}});
		}
		catch(e)
		{
			console.log("Error - "+e.message);
		}
		try
		{
		//document.baseURI
		var bURI = document.baseURI;
		Object.defineProperty(document, "baseURI", { get : function() { return SafeSource.StripnEncode(bURI)}});
		}
		catch(e)
		{
			console.log("Error - "+e.message);
		}
		try
		{
		//document.referrer
		var ref = document.referrer;
		Object.defineProperty(document, "referrer", { get : function() { return SafeSource.StripnEncode(ref)}});
		}
		catch(e)
		{
			console.log("Error - "+e.message);
		}
		try
		{
		//document.location.hash
		var hash = document.location.hash;
		Object.defineProperty(document.location, "hash", { get : function() { return SafeSource.StripnEncode(hash)}});
		}
		catch(e)
		{
			console.log("Error - "+e.message);
		}
		try
		{
		//document.location.host
		var host = document.location.host;
		Object.defineProperty(document.location, "host", { get : function() { return SafeSource.StripAll(host)}});
		}
		catch(e)
		{
			console.log("Error - "+e.message);
		}
		try
		{
		//document.location.hostname
		var hostname = document.location.hostname;
		Object.defineProperty(document.location, "hostname", { get : function() { return SafeSource.StripAll(hostname)}});
		}
		catch(e)
		{
			console.log("Error - "+e.message);
		}
		try
		{
		//document.location.origin
		var origin = document.location.origin;
		Object.defineProperty(document.location, "origin", { get : function() { return SafeSource.StripnEncode(origin)}});
		}
		catch(e)
		{
			console.log("Error - "+e.message);
		}
		try
		{
		//document.location.pathname
		var pathname = document.location.pathname;
		Object.defineProperty(document.location, "pathname", { get : function() { return SafeSource.StripnEncode(pathname)}});
		}
		catch(e)
		{
			console.log("Error - "+e.message);
		}
		try
		{
		//document.location.search
		var search = document.location.search;
		Object.defineProperty(document.location, "search", { get : function() { return SafeSource.StripnEncode(search)}});
		}
		catch(e)
		{
			console.log("Error - "+e.message);
		}
		try
		{
		//navigator.userAgent
		var nav = navigator.userAgent;
		Object.defineProperty(navigator, "userAgent", { get : function() { return SafeSource.HTMLEncode(nav)}});
		}
		catch(e)
		{
			console.log("Error - "+e.message);
		}
		try
		{
		//navigator.appName
		var app = navigator.appName;
		Object.defineProperty(navigator, "appName", { get : function() { return SafeSource.StripAll(app)}});
		}
		catch(e)
		{
			console.log("Error - "+e.message);
		}
		try
		{
		//navigator.appCodeName
		var appc = navigator.appCodeName;
		Object.defineProperty(navigator, "appCodeName", { get : function() { return SafeSource.StripAll(appc)}});
		}
		catch(e)
		{
			console.log("Error - "+e.message);
		}
		try
		{
		//navigator.appVersion
		var appv = navigator.appVersion;
		Object.defineProperty(navigator, "appVersion", { get : function() { return SafeSource.HTMLEncode(appv)}});
		}
		catch(e)
		{
			console.log("Error - "+e.message);
		}
		try
		{
		//navigator.language
		var lan = navigator.language;
		Object.defineProperty(navigator, "language", { get : function() { return SafeSource.StripAll(lan)}});
		}
		catch(e)
		{
			console.log("Error - "+e.message);
		}
		try
		{
		//navigator.platform
		var plat = navigator.platform;
		Object.defineProperty(navigator, "platform", { get : function() { return SafeSource.StripAll(plat)}});
		}
		catch(e)
		{
			console.log("Error - "+e.message);
		}
		try
		{
		//navigator.product
		var prod = navigator.product;
		Object.defineProperty(navigator, "product", { get : function() { return SafeSource.StripAll(prod)}});
		}
		catch(e)
		{
			console.log("Error - "+e.message);
		}
		try
		{
		//navigator.productSub
		var ps = navigator.productSub;
		Object.defineProperty(navigator, "productSub", { get : function() { return SafeSource.StripAll(ps)}});
		}
		catch(e)
		{
			console.log("Error - "+e.message);
		}
		try
		{
		//navigator.vendor
		var vend = navigator.vendor;
		Object.defineProperty(navigator, "vendor", { get : function() { return SafeSource.StripAll(vend)}});
		}
		catch(e)
		{
			console.log("Error - "+e.message);
		}
		try
		{
		//navigator.vendorSub
		var vs = navigator.vendorSub;
		Object.defineProperty(navigator, "vendorSub", { get : function() { return SafeSource.StripAll(vs)}});
		}
		catch(e)
		{
			console.log("Error - "+e.message);
		}
		
		try
		{
		//document.cookie
		var ck = document.cookie;
		Object.defineProperty(document, "cookie", { get : function() { return SafeSource.CookieStrip(ck)}});
		}
		catch(e)
		{
			console.log("Error - "+e.message);
		}
		try
		{
		//document.location.href
		var href = document.location.href;
		Object.defineProperty(document.location, "href", { get : function() { return SafeSource.StripnEncode(href)}});
		}
		catch(e)
		{
			console.log("Error - "+e.message);
		}

		//Functions
		try
		{
		//localStorage
		(function() {
 	    var proxied = localStorage.setItem;
        localStorage.setItem = function() {
        arguments[1]=SafeSource.StripnEncode(arguments[1]);
    	return proxied.apply(this, arguments);};})();
    	}
		catch(e)
		{
			console.log("Error - "+e.message);
		}
		try
		{
		//Storage
		(function() {
 	    var proxied = sessionStorage.setItem;
        sessionStorage.setItem = function() {
        arguments[1]=SafeSource.StripnEncode(arguments[1]);
    	return proxied.apply(this, arguments);};})();
    	}
		catch(e)
		{
			console.log("Error - "+e.message);
		}

    }
};


    Object.freeze(SafeSource);
