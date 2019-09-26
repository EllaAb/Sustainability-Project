/*
   New Perspectives on JavaScript, 2nd Edition
   Final Project - Sustainability 

   Author:   Ula Qasim  
   Date:     5/12/2015

   Filename: contact.js



   Functions List:
   startForm()
      Sets up and initializes the form2 Web form.

   checkForm()
      Checks the form to ensure that all required fields have been
      entered by the user.

   checkZipRE()
      Checks that a proper zip code has been entered by the user
      with regular expressions

   checkZip()
      Checks that a proper zip code has been entered by the user

   isNonNumeric()
      Returns a Boolean value indicating whether a text string 
      contains non-numeric characters

    ValidateEmail()
	Returns a Boolean value indicating whether a text string 
	contains valid email address 
*/

window.onload = startForm;

function startForm() {
   document.forms[0].onsubmit = checkForm;
}

function checkForm() {
   if (document.forms[0].myFName.value.length == 0)
      {alert("You must enter a first name");
       return false;}
   else if (document.forms[0].myLName.value.length == 0)
      {alert("You must enter a last name");
       return false;}
   else if (ValidateEmail(document.forms[0].myEmail.value) == false)
      { alert("You have entered an invalid email address!") ;
       return false;}
   else if (document.forms[0].myPhone.value.length == 0)
      {alert("You must enter a phone number ")  ;
       return false; } 
    else if (checkZipRE(document.forms[0].myZip.value) == false)
      {alert("Invalid zip code");
       return false;}    
   else return true;
}

function checkZipRE(myZip) {
   regx = /^\d{5}(-\d{4})?$|^$/;
   return regx.test(myZip);
}

function checkZip(myZip) {
   if (myZip.length != 0 && myZip.length != 5) return false
   else if (isNonNumeric(myZip)) return false
   else return true;
}




function isNonNumeric(tString) {
   validchars = "0123456789";

   for (var i = 0; i < tString.length; i++) {
      char = tString.charAt(i);
      if (validchars.indexOf(char) == -1) return true;
   }

   return false;
}


function ValidateEmail(myEmail)   
{   
  regE =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
 if ( regE.test(form.myEmail.value))  
  {  
    return (true)  
  }  
     
    return (false)  
}  


