console.log('simple dropdown nav');

// $(document).ready((e) =>
// {
$("nav *").css("list-style", "none");

$("nav > ul").addClass("nav");

$(".nav ul")
.addClass("dropdown")
.addClass("hidden");

$(".nav li").addClass("nav-item");

$('.nav > li').eq(0).removeClass("nav-item")

$(".nav > li")
.addClass("nav-toggle")
.addClass("inactive");

$(".nav-toggle").on("click", e =>
{
e.preventDefault();

if ($(".dropdown").hasClass("visible"))
{
  console.log("visible");
  $(".dropdown")
    .removeClass("visible")
    .addClass("hidden");

  $(".nav-toggle")
    .addClass('inactive')
    .removeClass('active');
}
else
{
  console.log("hidden");
  $(".dropdown")
    .removeClass("hidden")
    .addClass("visible");

  $(".nav-toggle")
    .addClass('active')
    .removeClass('inactive');
}
});


$(window).on('hashchange', e =>
{
if ($(".dropdown").hasClass("visible"))
{
//   e.preventDefault();
  console.log("dropdown visible");
  $(".dropdown")
    .removeClass("visible")
    .addClass("hidden");

  $(".nav-toggle")
    .addClass('inactive')
    .removeClass('active');
}
});

console.log($('nav').html());

console.log("adding css file to DOM");
$("<link/>",
{
    rel: "stylesheet",
    type: "text/css",
    href: "simple-dropdown-navigation.css"
})
.appendTo("head");


console.log("done with nav script");

//   console.log("redrawing nav");
//   $('nav').hide().show(0);
//   $('nav').focus();
// });
