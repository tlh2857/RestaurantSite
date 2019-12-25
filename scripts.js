if(true){
document.getElementById('warning').style.display='none';
}


function validate() {
      
    if( document.getElementById('name').value == "") {
       
       alert( "Please provide your name!" );
       document.contactForm.name.focus() ;
       return false;
    } else if(document.getElementById('name').value.split('').some(x=>isNaN(Number(x)))){
        alert( "Please enter a valid name without numbers or special characters" );
        document.contactForm.name.focus() ;
        return false;
    }
    if( document.getElementById('email').value == "" ) {
       alert( "Please provide your Email!" ); //HTML form validation already checks email so validity
       document.contactForm.email.focus();
       return false;
    }
    if( document.getElementById('phone').value == "" || isNaN( document.getElementById('phone').value ) ||
       document.getElementById('phone').value.length != 10 ) {
       
       alert( document.getElementById('phone').value + "Please provide a 10 digit phone number." );
       document.contactForm.phone.focus() ;
       return false;
    }
    if( document.getElementById('additionalInformation').value == "" ) {
        alert( "Please provide a description of your request!" );
        document.getElementById('additionalInformation').focus() ;
        return false;
     }
    return( true );
 }