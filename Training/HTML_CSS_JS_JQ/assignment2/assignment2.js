function name_validation(name){
	 if (name.length < 1 || !/^[a-zA-Z\' ']+$/.test(name))
	 {
		 return false;
	 }else{
		 return true;
	 }
 }
function email_validation(email){
	if (email.length < 1 || !/^([a-zA-Z]+[\d\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email))
	{
		return false;
	}else{
		return true;
	}
}
function phone_number_validation(phone_number){
	 if (phone_number.length < 1 || !/^([6-9]+[\d]{9})?$/.test(phone_number))
	 {
		 return false;
	 }else{
		 return true;
	 }
 }
 
function date_of_birth_validation(dob){
	if(dob.length < 1){
		return true;
	}else{
		return false;
	}	
}	
	
$(document).ready(function() {
  $("#datepicker").datepicker({
    format: 'mm-dd-yyyy',
    endDate: '+0d',
    autoclose: true
  });
  $('#first_name').css('textTransform', 'capitalize');
  $('#last_name').css('textTransform', 'capitalize');
  var tale_row = 0;
  var error_flag = 0;
  var focus_firstname = 0;
  var focus_lastname = 0; 
  var focus_email = 0; 
  var focus_phonenumber = 0;
  var focus_dob = 0;   
  $('#first_name').focusout(function() {
    focus_firstname = 1;
    $('#first_name_error').text("Invalid first name");
    if (!name_validation($('#first_name').val())) {
      $('#first_name_error').show();
    } else {
      $('#first_name_error').hide();
    }
  });
  
  $('#last_name').focusout(function() {
    focus_lastname = 1;
    $('#last_name_error').text("Invalid last name");
    if (!name_validation($('#last_name').val())) {     
      $('#last_name_error').show();
    } else {    
      $('#last_name_error').hide();
    }
  });
  
  $('#email').focusout(function() {
    focus_email = 1;
    $("#email_error").text("Invalid Email");
    if (!email_validation($('#email').val())) {      
      $("#email_error").show();
    } else {     
      $("#email_error").hide();
    }
  });

  $('#phone_number').focusout(function() {
    focus_phonenumber = 1; 
    $("#phone_number_error").text("Invalid Mobile Number");  
    if (!phone_number_validation($('#phone_number').val())) {      
      $("#phone_number_error").show();
    } else {      
      $("#phone_number_error").hide();
    }
  });


  $('#datepicker').focus(function() {
    focus_dob = 1;
    $('#dob_error').text("Invalid date of birth");   
    if ($('#datepicker').val().length < 1) {      
      $('#dob_error').show();
    } else {      
      $('#dob_error').hide();
    }
  });

  function capitalize(name) {
    var words = name.split(" ");
    final_name = "";
    var i = 0;
    for (i = 0; i < words.length; i++) {
      final_name += words[i].charAt(0).toUpperCase() + words[i].substring(1, words[i].length) + " ";
    }
    return final_name;
  }

  $('#submit_button').click(function() {
	if( $("#first_name_error").is(":visible") || $("#last_name_error").is(":visible") || $("#email_error").is(":visible") || $("#phone_number_error").is(":visible") || $("#dob_error").is(":visible") ){
		error_flag=1;
	}
	else{
		error_flag=0;
	}	    
    //alert(error_flag);
    if(focus_firstname == 0 )
     { 
	    $('#first_name_error').text("Invalid first name");
	    $("#first_name_error").show();
     } if (focus_lastname==0 ){
	    $('#last_name_error').text("Invalid last name");
	    $("#last_name_error").show();
	 } if (focus_phonenumber==0){
		$("#phone_number_error").text("Invalid Mobile Number");
		$("#phone_number_error").show();
	 } if (focus_email==0){
	    $("#email_error").text("Invalid Email"); 
	    $("#email_error").show();
	 } if (focus_dob==0){
		$('#dob_error').text("Invalid date of birth"); 
		$("#dob_error").show();
	 }     		
      //alert("No Black fileds are allowed!");
    
     if(error_flag==1){
		alert("Please correct the errors !");
	}
	if (error_flag == 0 && focus_firstname == 1 && focus_lastname==1 && focus_phonenumber==1 && focus_email==1 && focus_dob==1) {
	  $("#first_name_error").hide();
      $("#last_name_error").hide();
      $("#email_error").hide();
      $("#phone_number_error").hide();
      $("#dob_error").hide();
      var tab = $('#form_details_table');
      var first_name = capitalize($('#first_name').val());
      var last_name = capitalize($('#last_name').val());
      var email = $('#email').val();
      var phone_number = $('#phone_number').val();
      var dob = $('#datepicker').val();
      tab.append("<tr ><td class='text-center' >" + first_name + "</td><td class='text-center'>" + last_name + "</td><td class='text-center'>" + email + "</td><td class='text-center' >" + phone_number + "</td><td class='text-center'>" + dob + "</td></tr>");
      $('#sample_form').trigger("reset");
      focus_firstname=0;
      focus_lastname=0;
      focus_email=0;
      focus_phonenumber=0;
      focus_dob=0;
      focus=0
    } 
  });
});
