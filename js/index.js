let closeBtn = document.getElementById("close");
let lighBoxContainer = document.getElementById("sumarryBox");
function closeSlide()
{
    lighBoxContainer.style.display = "none";
}
closeBtn.addEventListener("click",closeSlide);

//bewdek 3la elsection 

$("a[href^='#']").click(function () {
   
  let aHref  =  $(this).attr("href");//be2olk dost 3la anhy link
  let sectionOffset = $(aHref).offset().top;
  $("html,body").animate({scrollTop:sectionOffset} , 1000)

});


//beda5l wetala3 alnav 
$("#sideBarToggle").click(function () { 

  let colorBoxWidth = $("#sumarryBox").innerWidth();

    if($("#sideBar").css("left") == "-200px")//hwa kda bara
    {
      $("#sideBar").animate({left:`0px`} , 1000);
    }
    else
    {
      $("#sideBar").animate({left:`-${colorBoxWidth}`} , 1000);

    }

 });


 //Change open Color
let homeOffsetTop  = $("#home").offset().top;

$(window).scroll(function () {

  let wScroll =  $(window).scrollTop();

  if(wScroll > homeOffsetTop + 30)
  {
    $("#sideBarToggle").css("backgroundColor","rgba(0,0,0,0.7)");
  }
  else
  {
    $("#sideBarToggle").css("backgroundColor","transparent");
  }

  });

   //Change open Color

   $('.img-item').click(function(e){
    $('#mainImage').animate({opacity:0},1000 , function(){
      let imgSrc = $(e.target).attr("src");
    $('#mainImage').attr("src" , imgSrc);
    });
    
    $('#mainImage').animate({opacity:1},1000);

  })

   //Change open Color

   $(".One").click(function() {
    $( ".detOne" ).fadeToggle( "slow", "linear" );
  });
  $(".Tow").click(function() {
    $( ".detTow" ).fadeToggle( "slow", "linear" );
  });
  $(".Three").click(function() {
    $( ".detThree" ).fadeToggle( "slow", "linear" );
  });
  $(".Four").click(function() {
    $( ".detFour" ).fadeToggle( "slow", "linear" );
  });


  
// Display the countdown timer in an element 
let Days = document.getElementById("days");
let Hours = document.getElementById("hours");
let Minutes = document.getElementById("minutes");
let Seconds = document.getElementById("seconds");
// Set the date we're counting down to
let countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
let timeCounter = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  Days.innerHTML ="- " + days + "d ";
  Hours.innerHTML ="- " + hours + "h ";
  Minutes.innerHTML = "- " + minutes + "m ";
  Seconds.innerHTML = "- " + seconds + "s ";
 

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(timeCounter);
    document.getElementById("timeCounter").innerHTML = "EXPIRED";
  }
});