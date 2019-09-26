/*
   New Perspectives on JavaScript, 2nd Edition
   Final Project
   

   Author: Ula Qasim
   Date:   5/10/1015

   Filename: cursor.js

   
 
   
*/
	
//pre loading the images into an image object and use the src property for specifying the image source
var RUp=new Image();
RUp.src="Rrow.jpg";

var LUp=new Image();
LUp.src="Lrow.jpg";


var Slides=new Array();
Slides[0]=new Image();
Slides[1]=new Image();
Slides[2]=new Image();
Slides[3]=new Image();
Slides[4]=new Image();

Slides[0].src="1.png";
Slides[1].src="2.jpg";
Slides[2].src="3.jpg";
Slides[3].src="4.jpg";
Slides[4].src="s1.jpg";


function LOut() {
document.images.LeftArrow.src = LUp.src;   //set the source of the leftarrow image to the source of LUp image object
}

function ROut() {
document.images.RightArrow.src = RUp.src;   // set the source of the Rightarrow image to the source of RUp image object
}




var SlideNum = 0;
function SlideShow(direction) {
	
if (direction == "forward") {
SlideNum = (SlideNum == 4) ? 0: SlideNum+1;
} else {
SlideNum = (SlideNum == 0) ? 4: SlideNum-1;
}
document.images.Photo.src=Slides[SlideNum].src;  /*change the source of the photo image to the image in the slides image array with the index equal to 
                                                   SlideNum    */      


}


