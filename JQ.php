<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
</head>
<body>
  <h1 id="title">標題</h1>
  <p class="content">ok</p>
  <p class="content">ok</p>
  <p class="content">ok</p>
  <script>
  $("#title")[0].innerHTML="進度條";
  // $(".content").html("進度條");
  $(function(){
    // $(".content").html("進度條");
    document.getElementById("title").innerHTML= "進度條";
  });
  
  // document.getElementById("header").classList.add("myhead");
      // jQuery("#header").addClass("hishead"); 跟樓下一樣意思
      // $("#header").addClass("yourhead");
  </script>
</body>
</html>