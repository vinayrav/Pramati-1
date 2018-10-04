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
  var focus = 0;
 
  
  
  $('#first_name').focusout(function() {
    focus = 1;
    $('#first_name_error').text("Invalid first name");
    if ($('#first_name').val().length < 1 || !/^[a-zA-Z\' ']+$/.test($('#first_name').val())) {
      $('#first_name_error').show();
    } else {
      $('#first_name_error').hide();
    }
  });
  
  $('#last_name').focusout(function() {
    focus = 1;
    $('#last_name_error').text("Invalid last name");
    if ($('#last_name').val().length < 1 || !/^[a-zA-Z\' ']+$/.test($('#last_name').val())) {     
      $('#last_name_error').show();
    } else {    
      $('#last_name_error').hide();
    }
  });
  
  $('#email').focusout(function() {
    focus = 1;
    $("#email_error").text("Invalid Email");
    if ($('#email').val().length < 1 || !/^([a-zA-Z]+[\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test($('#email').val())) {      
      $("#email_error").show();
    } else {     
      $("#email_error").hide();
    }
  });

  $('#phone_number').focusout(function() {
    focus = 1; 
    $("#phone_number_error").text("Invalid Mobile Number");  
    if ($('#phone_number').val().length < 1 || !/^([6-9]+[\d]{9})?$/.test($('#phone_number').val())) {      
      $("#phone_number_error").show();
    } else {      
      $("#phone_number_error").hide();
    }
  });


  $('#datepicker').focusout(function() {
    focus = 1;
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
    if (error_flag == 0 && focus == 1) {
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
      focus=0
    } else if(focus==0) {
	  $('#first_name_error').text("Invalid first name");
      $('#last_name_error').text("Invalid last name");
      $("#email_error").text("Invalid Email");
      $("#phone_number_error").text("Invalid Mobile Number");
      $('#dob_error').text("Invalid date of birth");
      $("#first_name_error").show();
      $("#last_name_error").show();
      $("#email_error").show();
      $("#phone_number_error").show();
      $("#dob_error").show();		
      //alert("No Black fileds are allowed!");
    }
    else if(error_flag==1){
		alert("Please correct the errors !");
	}
  });
});
