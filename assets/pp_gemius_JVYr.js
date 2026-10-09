var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
// (c) 2000-2006 by Gemius SA

function pp_gemius_parameters() {
	var d=document;
	var href=new String(d.location.href);
	var ref;
	if (d.referrer) { ref = new String(d.referrer); } else { ref = ""; }
	var t=typeof Error;
	if(t!='undefined') {
		eval("try { if (typeof(top.document.referrer)=='string') { ref = top.document.referrer } } catch(exception) { } try { if (parent && parent.location && href.indexOf('gemius.html')>=0) { href = new String(parent.location) } }	catch(exception) { }")
	}
	var url='&tz='+(new Date()).getTimezoneOffset()+'&href='+escape(href.substring(0,299))+'&ref='+escape(ref.substring(0,299));
	if (screen) {
		var s=screen;
		if (s.width) url+='&screen='+s.width+'x'+s.height;
		if (s.colorDepth) url+='&col='+s.colorDepth;
	}
	return url;
}

var pp_gemius_url='https://web.archive.org/web/20060525122308/http://idm.hit.gemius.pl/_'+(new Date()).getTime()+'/ppdot.js?l=11&id=';
if (typeof pp_gemius_identifier == 'undefined') {
	if (typeof gemius_identifier != 'undefined') {
		pp_gemius_identifier = gemius_identifier;
	} else {
		pp_gemius_identifier = "";
	}
}
pp_gemius_url+=pp_gemius_identifier;
pp_gemius_url+=pp_gemius_parameters();
document.write('<'+'script src="'+pp_gemius_url+'" type="text/javascript"></'+'script>');

}

/*
     FILE ARCHIVED ON 12:23:08 May 25, 2006 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:38:14 Oct 05, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 12.149
  load_resource: 102.123
  PetaboxLoader3.resolve: 43.617
  PetaboxLoader3.datanode: 57.975
*/