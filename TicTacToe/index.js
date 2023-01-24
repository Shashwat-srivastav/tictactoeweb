// alert("working");
var c=0;
var arr=[[0,0,0],[0,0,0],[0,0,0]];
$(".reset").click(function(){
  $("button").css("background-color","#D0BED4");
  // $(".1").css("background-image","url(pure-white-background-85a2a7fd.jpg)");
}
);
// $(".1").click(function(e){
//   $(".1").css("background-image","url(zero-removebg-preview.jpg)");
// });
$(".1").click(function(e){

  if(c%2!=0)
  {
    arr[0][0]=1;
    $(".1").css("background-color","#b0e0a8");
  }else{
    arr[0][0]=-1;
  $(".1").css("background-color","#fa9191");
  }
  c++;
    //alert(arr);
});
$(".2").click(function(e){

  if(c%2!=0)
  {
    arr[0][1]=1;
    $(".2").css("background-color","#b0e0a8");
  }else{
    arr[0][1]=-1;
  $(".2").css("background-color","#fa9191");
  }
  c++;
    //alert(arr);
});
$(".3").click(function(e){

  if(c%2!=0)
  {
      arr[0][2]=1;
    $(".3").css("background-color","#b0e0a8");
  }else{
      arr[0][2]=-1;
  $(".3").css("background-color","#fa9191");
  }
  c++;
    //alert(arr);
});
$(".4").click(function(e){

  if(c%2!=0)
  {
      arr[1][0]=1;
    $(".4").css("background-color","#b0e0a8");
  }else{
      arr[1][0]=-1;
  $(".4").css("background-color","#fa9191");
  }
  c++;
    //alert(arr);
});
$(".5").click(function(e){

  if(c%2!=0)
  {
      arr[1][1]=1;
    $(".5").css("background-color","#b0e0a8");
  }else{
      arr[1][1]=-1;
  $(".5").css("background-color","#fa9191");
  }
  c++;
    //alert(arr);
});
$(".6").click(function(e){

  if(c%2!=0)
  {
    arr[1][2]=1;
    $(".6").css("background-color","#b0e0a8");
  }else{
    arr[1][2]=-1;
  $(".6").css("background-color","#fa9191");
  }
  c++;
    //alert(arr);
});
$(".7").click(function(e){

  if(c%2!=0)
  {
      arr[2][0]=1;
    $(".7").css("background-color","#b0e0a8");
  }else{
      arr[2][0]=-1;
  $(".7").css("background-color","#fa9191");
  }
  c++;
    //alert(arr);
});
$(".8").click(function(e){

  if(c%2!=0)
  {
      arr[2][1]=1;
    $(".8").css("background-color","#b0e0a8");
  }else{
      arr[2][1]=-1;
  $(".8").css("background-color","#fa9191");
  }
  c++;
  //alert(arr);
});
$(".9").click(function(e){

  if(c%2!=0)
  {
      arr[2][2]=1;
    $(".9").css("background-color","#b0e0a8");
  }else{
      arr[2][2]=-1;
  $(".9").css("background-color","#fa9191");
  }
  c++;
    //alert(arr);
});

// function check(var arr[][])
// {
//   for(int i=0;i<3;i++)
//   {
//     for(int j=0;j<3;j++)
//     {
//
//     }
//   }
// }
