var questions = [
  ["The weight of diamonds is usually measured in what?", "[A] Tola", "[B] Carat", "[C] Maund", "[D] Troy", "[B]"],
  ["Which of these viruses takes it's name from a place in Malaysia?", "[A] Nipah", "[B] Ebola", "[C] Influenza", "[D] HIV", "[C]"],
  ["Which state of India has the shortest coastline?", "[A] Goa", "[B] Maharashtra", "[C] Odisha", "[D] West Bengal", "[D]"],
  ["Which of these planets has a solid surface?", "[A] Mars", "[B] Saturn", "[C] Jupiter", "[D] Uranus", "[A]"],
  ["The International Literacy Day is observed on", "[A] Sep 8", "[B] Nov 28", "[C] May 2", "[D] Sep 22", "[A]"]
];
score = 0;
timer_flag=0;
function display_color() {
  clicked_flag = 0;
  $("#a_radio").attr('disabled', true);
  $("#b_radio").attr('disabled', true);
  $("#c_radio").attr('disabled', true);
  $("#d_radio").attr('disabled', true);
  if ($("#a_radio").prop('checked')) {

    clicked_flag = 1;
    if (questions[x][5] == "[A]") {
      $("#option_a").css('background-color', 'green');
      score += 1;

    } else {
      $("#option_a").css('background-color', 'red');
    }
  }

  if ($("#b_radio").prop('checked')) {

    clicked_flag = 1;
    if (questions[x][5] == "[B]") {
      $("#option_b").css('background-color', 'green');
      score += 1;

    } else {
      $("#option_b").css('background-color', 'red');
    }
  }
  if ($("#c_radio").prop('checked')) {
    clicked_flag = 1;
    if (questions[x][5] == "[C]") {
      $("#option_c").css('background-color', 'green');
      score += 1;
    } else {
      $("#option_c").css('background-color', 'red');
    }
  }
  if ($("#d_radio").prop('checked')) {
    clicked_flag = 1;
    if (questions[x][5] == "[D]") {
      $("#option_d").css('background-color', 'green');
      score += 1;
    } else {
      $("#option_d").css('background-color', 'red');
    }
  }


}

function initiator() {
  $("#a_radio").attr('disabled', false);
  $("#b_radio").attr('disabled', false);
  $("#c_radio").attr('disabled', false);
  $("#d_radio").attr('disabled', false);
  $('#submit').prop('disabled', false);
  $("#option_a").css('background-color', 'MidnightBlue');
  $("#option_b").css('background-color', 'MidnightBlue');
  $("#option_c").css('background-color', 'MidnightBlue');
  $("#option_d").css('background-color', 'MidnightBlue');
  $(':radio').prop('checked', false);
  question_pick();
  alert(x);

  id = setInterval(function () {
    myTimer()
  }, 1000);

  d = 5;

  function myTimer() {
    if (d >= 0)
      document.getElementById("timer").innerHTML = d--;
    else {
      if (tick <= 0) {

        d = 0;
        clearInterval(id);
        alert(score);
        
      }else if(tick>0 && d==0){
		$('#submit').prop('disabled', true);//check the disabled not working
	  } 

    }
  }
}

function question_pick() {

  x = Math.floor(Math.random() * 4) + 1;
  //alert(x);
  $("#question").text(questions[x][0]);
  $("#option_a").text(questions[x][1]);
  $("#option_b").text(questions[x][2]);
  $("#option_c").text(questions[x][3]);
  $("#option_d").text(questions[x][4]);

}

function submit_button(){
	if (confirm("Press yes to submit the answer!")) {
        display_color();
    } else {
       alert("The answer is not submited!sumit it before the timer ends!");
    }
}

$(document).ready(function () {
	$('#submit').prop('disabled', true);

  //alert("here we go");
  $("#start_quiz").on('click', function () {
	  
    alert(score);
    tick = 3;
    alert("started");
    initiator();
  });

  $("#next").on('click', function () {

    tick--;
    if (tick <= 0) {
      alert(score);
      clearInterval(id);
      alert("quiz over");

    } else {

      clearInterval(id);
      initiator();

    }

  });
  
  
  $("#submit").on('click',function(){

	  submit_button();
  
  });


});

