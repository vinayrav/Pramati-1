 $(document).ready(function() {
            $("#datepicker").datepicker();
            
            
             $("#fname").keyup(function () {  
                $('#fname').css('textTransform', 'capitalize');  
            });
            $("#lname").keyup(function () {  
                $('#lname').css('textTransform', 'capitalize');  
            });

        });

        function val() {
            var i = 0;

            var flag = 0;
            var bf = 0;
            var fname = document.getElementById("fname").value;
            var lname = document.getElementById("lname").value;
            var email = document.getElementById("email").value;
            var number = document.getElementById("number").value;
            var dob = document.getElementById("datepicker").value;

            if (fname.length < 1) {
                document.getElementById("fs").innerHTML = "First Name cannot be blank";
                $("#fs").show();
                bf = 1;
                flag = 1;
            }
            if (lname.length < 1) {
                document.getElementById("ls").innerHTML = "Last Name cannot be blank";
                 $("#ls").show();
                bf = 1;
                flag = 1;
            }

            if (dob.length < 1) {
                document.getElementById("ds").innerHTML = "DOB cannot be blank";
                $("#ds").show();
                bf = 1;
                flag = 1;
            }
            if (email.length < 1) {

                document.getElementById("es").innerHTML = "Email cannot be blank";
                $("#es").show();
                bf = 1;
                flag = 1;
            }
            if (number.length < 1) {

                document.getElementById("ns").innerHTML = "Phone Number cannot be blank";
                $("#ns").show();
                bf = 1;
                flag = 1;
            }

            if (bf == 0) {
                

                var today = new Date();
                var given = new Date(dob);
                if (given > today) {
                    

                    document.getElementById("ds").innerHTML = "DOB cannot be future date";
                    $("#ds").show();
                    flag = 1;
                }
                if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
                    flag = 1;
                    document.getElementById("es").innerHTML = "Enter a valid email address";
                    $("#es").show();

                }
                if (!(/^[a-zA-Z]/.test(email))) {
                    flag = 1;
                    document.getElementById("es").innerHTML = "Email address cannot start with numbers";
                    $("#es").show();

                }

                if (!(number.length == 10)) {
                    flag = 1;
                    document.getElementById("ns").innerHTML = "Invalid Phone Number";
                    $("#ns").show();

                }
                if (number.length == 10 && !(number.charAt(0) == '6' || number.charAt(0) == '7' || number.charAt(0) == '8' || number.charAt(0) == '9')) {
                    flag = 1;
                    document.getElementById("ns").innerHTML = "Phone Number should start with 6,7,8,9 only";
                    $("#ns").show();

                }

            }

            if (flag == 0) {

                var tab = document.getElementById("form_details");

                var row = tab.insertRow(++i);
                var c1 = row.insertCell(0);

                var c2 = row.insertCell(1);
                var c3 = row.insertCell(2);
                var c4 = row.insertCell(3);
                var c5 = row.insertCell(4);
                fname = fname.charAt(0).toUpperCase() + fname.substring(1, fname.length);
                lname = lname.charAt(0).toUpperCase() + lname.substring(1, lname.length);
                c1.innerHTML = fname;
                c2.innerHTML = lname;
                c3.innerHTML = email;
                c4.innerHTML = number;
                c5.innerHTML = dob;
                document.getElementById("sample").reset();
                document.getElementById("fs").innerHTML = " ";
                document.getElementById("ls").innerHTML = " ";
                document.getElementById("es").innerHTML = " ";
                document.getElementById("ns").innerHTML = " ";
                document.getElementById("ds").innerHTML = " ";
                $("#fs").hide();
                $("#ls").hide();
                $("#es").hide();
                $("#ns").hide();
                $("#ds").hide();

            }

        }
    
