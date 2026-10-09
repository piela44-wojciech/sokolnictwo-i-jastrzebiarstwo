var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
// CREDITS:
// Enhanced DirectX Wipe Effect by Urs Dudli and Peter Gehrig 
// Based upon wipe-script by Microsoft http://msdn.microsoft.com/workshop/samples/all.asp
// Additional scripts can be found at http://www.24fun.com/fast/index.html
// info@24fun.com
// 12/28/2000

// IMPORTANT: 
// If you add this script to a script-library or script-archive 
// you have to add a link to http://www.24fun.com/fast/index.html on the webpage 
// where this script will be running.

// CONFIGURATION:
// Go to http://www.24fun.com/fast/index.html and download the script as ZIP-file 
// with step-by-step instructions and copy-and-paste installation.

if (document.all) {
document.write('<OBJECT ID="DAControl_Wipe" ')
document.write('STYLE="width:'+picturewidth+';height:'+pictureheight+'"')
document.write('CLASSID="CLSID:B6FFC24C-7E13-11D0-9B47-00C04FC2F51D">')
document.write('</OBJECT>')
m = DAControl_Wipe.MeterLibrary;

whatTransformation = new ActiveXObject("DXImageTransform.Microsoft.Wipe");

whatPictures = new Array();      
whatPictures[0] = m.ImportImage(picture1);
whatPictures[1] = m.ImportImage(picture2);

forward = m.Interpolate(0, 1, 3);
back = m.Interpolate(1, 0, 2);
whatMovement = m.Sequence(forward, back).RepeatForever();

whatTransformation.GradientSize = 1.0;
whatTransformation.WipeStyle = 0;

theResult = m.ApplyDXTransform( whatTransformation, whatPictures, whatMovement );

DAControl_Wipe.Image = theResult.OutputBvr;
DAControl_Wipe.Start();

}
}

/*
     FILE ARCHIVED ON 04:04:15 May 01, 2006 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:38:13 Oct 05, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.331
  captures_list: 0.403
  exclusion.robots: 0.051
  exclusion.robots.policy: 0.043
  esindex: 0.007
  cdx.remote: 7.152
  LoadShardBlock: 64.399 (3)
  PetaboxLoader3.datanode: 66.385 (4)
  load_resource: 113.495
  PetaboxLoader3.resolve: 52.054
*/