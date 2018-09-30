 $(document).ready(function() {
            $("#datepicker").datepicker();
            $("#b").click(function() {

                $("#div1").load("#div1");

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
                bf = 1;
                flag = 1;
            }
            if (lname.length < 1) {
                document.getElementById("ls").innerHTML = "Last Name cannot be blank";
                bf = 1;
                flag = 1;
            }

            if (dob.length < 1) {
                document.getElementById("ds").innerHTML = "DOB cannot be blank";
                bf = 1;
                flag = 1;
            }
            if (email.length < 1) {

                document.getElementById("es").innerHTML = "Email cannot be blank";
                bf = 1;
                flag = 1;
            }
            if (number.length < 1) {

                document.getElementById("ns").innerHTML = "Phone Number cannot be blank";
                bf = 1;
                flag = 1;
            }

            if (bf == 0) {
                if (fname.charAt(0).toUpperCase() == fname.charAt(0)) {} else {
                   
                    document.getElementById("fname").value = fname.charAt(0).toUpperCase() + fname.substring(1, fname.length);
                }

                if (lname.charAt(0).toUpperCase() == lname.charAt(0)) {} else {
                    document.getElementById("lname").value = lname.charAt(0).toUpperCase() + lname.substring(1, lname.length);
                }

                var today = new Date();
                var given = new Date(dob);
                if (given > today) {
                    alert("sdasdads");

                    document.getElementById("ds").innerHTML = "DOB cannot be future date";
                    flag = 1;
                }
                if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
                    flag = 1;
                    document.getElementById("es").innerHTML = "Enter a valid email address";

                }
                if (!(/^[a-zA-Z]/.test(email))) {
                    flag = 1;
                    document.getElementById("es").innerHTML = "Email address cannot start with numbers";

                }

                if (!(number.length == 10)) {
                    flag = 1;
                    document.getElementById("ns").innerHTML = "Invalid Phone Number";

                }
                if (number.length == 10 && !(number.charAt(0) == '6' || number.charAt(0) == '7' || number.charAt(0) == '8' || number.charAt(0) == '9')) {
                    flag = 1;
                    document.getElementById("ns").innerHTML = "Phone Number should start with 6,7,8,9 only";

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

            }

        }
    
