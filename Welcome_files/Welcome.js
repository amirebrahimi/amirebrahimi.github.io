// Created by iWeb 3.0.1 local-build-20100527

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({reflection_5:new IWReflection({opacity:0.50,offset:1.00}),reflection_2:new IWReflection({opacity:0.50,offset:1.00}),reflection_4:new IWReflection({opacity:0.50,offset:1.00}),reflection_1:new IWReflection({opacity:0.50,offset:1.00}),reflection_3:new IWReflection({opacity:0.50,offset:1.00}),reflection_0:new IWReflection({opacity:0.50,offset:1.00})});registry.applyEffects();}
function hostedOnDM()
{return true;}
function onPageLoad()
{loadMozillaCSS('Welcome_files/WelcomeMoz.css')
adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');detectBrowser();adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id1');fixupIECSS3Opacity('id3');applyEffects()}
function onPageUnload()
{Widget.onunload();}
