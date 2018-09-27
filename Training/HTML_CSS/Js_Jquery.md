```
<html>
<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js"></script>
<script>
   $(function () {
                $("#datepicker").datepicker();
            });
 </script>
</head>
<body>

<div class="row center ">
<div class="col-md-4"></div>


<div class="col-md-4">
 <form action="/action_page.php">

  <div class="form-group">
    <label for="fname">First Name:</label>
    <input type="text" class="form-control" id="fname">
  </div>

  <div class="form-group">
    <label for="lname">Last Name:</label>
    <input type="text" class="form-control" id="lname">
  </div>
<div class="form-group">

	<label for="dob">Date Of Birth:</label>
 <input type="text" class="form-control"  id="datepicker">
 <label class="input-group-addon btn" for="date"><span id="datepicker" class="glyphicon-calendar glyphicon" ></span>
       <span id ="datepicker"class="fa fa-calendar open-datetimepicker"></span>
    </label>
</div>

  <div class="form-group">
    <label for="email">Email:</label>
   <input type="email"  class="form-control">
  </div>

<div class="form-group">
    <label for="number">Phone Number:</label>
   <input type="number"  class="form-control">
  </div>

  <button type="submit" class="btn btn-default">Submit</button>
</form> 

</div>
</div>
</body>
</html>
```
