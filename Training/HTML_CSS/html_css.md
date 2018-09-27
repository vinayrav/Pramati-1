# **CSS:**

```
body{
width:1000px;
margin:0 auto;
}
.one{
height:100px;
border-bottom:1.7px dashed lightgray;
}
.oneleft{
float:left;
}

.oneright{
float:right;

}

.icontext{
top:0px;
}


.two{
height:290px;
padding-top:6px;
padding-bottom:6px;
top:10px;
border-bottom:1.7px dashed lightgray;
}

.three{
top:10px;
height:110px;
padding-top:3px;
border-bottom:1.7px dashed lightgray;
padding-bottom:6px;
}
.p1{
font-size:23px;
font-weight:bold;
color:green;
}

.four{

display:table;
top:20px;
height:200px;
border-bottom:1.7px dashed lightgray;
padding-bottom:2px;
}

.lefttext {
    float:left;
    width: 250px;
    top:-115px;
    margin-left:17px; 
   
    padding-left:6px;
    padding-right:10px;
    border-right:1.7px dashed lightgray;
    text-align:justify;
}


.middletext {
    display: inline-block;
    width: 250px;
    top:-115px;
    margin-left:17px;
    padding-left:3px; 
    padding-right:1px;
    text-align:justify;
    
}
.righttext {
  
    float:right;
    width: 400px;
    text-align:justify;
    padding-left:10px;
    margin-top:12px;
    margin-left:17px;
    border:7px solid #99994d;
    background-color:#e5e5cc;
}


.five{

height:50px;
top:10px;

}

.rightfive{
float:right;

}


a:link {
    color: black;
    background-color: transparent;
    text-decoration: none;
}
a:hover {
    color: red;
    background-color: transparent;
    text-decoration: none;
}

.over{
overflow:auto;
}

```

# **HTML:**

```
<!DOCTYPE html>
<html>
  <head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
<div class="one">
<div class="oneleft">
<img src="logo.png">
</div>

<div class="oneright">
<img src="icon_sprite.png" ><br>
<a href="home.html" target="_blank">home</a> &nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp<a href="about.html" target="_blank"> about</a> &nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp<a href="ideas.html" target="_blank"> idea</a> 
</div>
</div>

<div class="two">
<img src="banner_image.jpg" width=100%">

</div>
<div class="three">
<p><font class="p1">Why HTML and CSS?</font><br>
<font size="2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.<font></p>
</div>

<div class="four">

<div class="lefttext">
<p class="p1">Learn HTML</p>
<p><font size="2" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<font></p><br><br><a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML" style="a:hover color:red"><p align=right><b>read more</b></a></p></div>



<div class="middletext">

<p class="p1">Learn CSS</p>
<p><font size="2" text-align="justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<font></p><br><br><a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML" style="a:hover color:red"><p align=right><b>read more</b></a></p></div>


<div class="righttext">

<p class="p1">Why SEO?</p>
<p><font size="2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with.<font></p>

<p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<img src="bullet.png"> &nbsp &nbspList item one</p>
<p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<img src="bullet.png"> &nbsp &nbspList item two</p>
<p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<img src="bullet.png"> &nbsp &nbspList item three</p>
<p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<img src="bullet.png"> &nbsp &nbspList item four</p></div>
</div>

<div class="five">
<div class="rightfive">
<p><a href="home.html" target="_blank">home</a> &nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp<a href="about.html" target="_blank"> about</a> &nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp<a href="ideas.html" target="_blank"> idea</ a> </p>
</div>
</div>


</body></html>
```
