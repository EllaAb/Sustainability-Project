/*
   New Perspectives on JavaScript, 2nd Edition
   Final Project
   

   Author: Ula Qasim
   Date:   5/10/1015

   Filename: slide.js

   
 
   slideit() function uses to slide images for the banner every 2 seconds 
*/
	

function addEvent(object, evName, fnName, cap) {
   if (object.attachEvent)
       object.attachEvent("on" + evName, fnName);
   else if (object.addEventListener)
       object.addEventListener(evName, fnName, cap);
}
addEvent(window, "load",slideit , false);

//pre loading the images into an image object and use the src property for specifying the image source
   var image1=new Image();
   image1.src="banner.jpg";
   var image2=new Image();
   image2.src="logo1.jpg";
   var image3=new Image();
   image3.src="logo2.jpg";
   var image4=new Image();
   image4.src="logo3.jpg";

//variable that will increment through the images
  var step=1
  function slideit(){
//if browser does not support the image object, exit.
  if (!document.images)
      return
 document.images.slide.src=eval("image"+step+".src")
 if (step<4)
   step++
else
  step=1
//call function "slideit()" every 2 seconds
setTimeout("slideit()",2000)
}




