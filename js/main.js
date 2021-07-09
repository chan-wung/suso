$(function () {
// 햄버거 메뉴
var burger = $('.menu-trigger');

burger.on('click', function(e){
	e.preventDefault();
	burger.toggleClass('active-4');
});
burger.click(function(){
if($(this).hasClass("active-4")){
  $(this).addClass('active-4');
  $("nav").css("display","block");
}
else{
  $(this).removeClass('active-4');
  $("nav").css("display","none");
}
});
 
   // menu_slide
 $(".main_menu > li").on("mouseenter mouseleave click", function(e){
   //alert(e.type);
   if($(window).width() >= "1024" && e.type == "mouseenter"){
   $(this).find(".submenu").stop().slideDown(300);
 
 }else if($(window).width() >= "1024" && e.type == "mouseleave"){
 $(this).find(".submenu").stop().slideUp(300);
 
 }else if($(window).width() < "1024" && e.type == "click"){
   $(this).find(".submenu").stop().slideToggle(500);
   $(this).siblings().find(".submenu").stop().slideUp(500);
   }
 });
 $(window).resize(function(){
 if($(window).width()>=1024) $("nav").css("display","block");
 if($(window).width()>=1024) $(".submenu").css("display","none");
 if($(window).width()>=1024) burger.removeClass("active-4");
 if($(window).width()<1024) $("nav").css("display","none");
 if($(window).width()<1024) $(".submenu").css("display","none");
 });
 
 
     $(".quick_menu_1").mouseenter(function(){
   var srcVal = $(".quick_menu_1 img").attr("src");
   $(".quick_menu_1 img").attr({"src":srcVal.replace("1.png","1_1.png")});
 });
 $(".quick_menu_1").mouseleave(function(){
   var srcVal = $(".quick_menu_1 img").attr("src");
   $(".quick_menu_1 img").attr({"src":srcVal.replace("1_1.png","1.png")});
 });
 $(".quick_menu_2").mouseenter(function(){
 var srcVal = $(".quick_menu_2 img").attr("src");
 $(".quick_menu_2 img").attr({"src":srcVal.replace("2.png","2_1.png")});
 });
 $(".quick_menu_2").mouseleave(function(){
 var srcVal = $(".quick_menu_2 img").attr("src");
 $(".quick_menu_2 img").attr({"src":srcVal.replace("2_1.png","2.png")});
 });
 $(".quick_menu_3").mouseenter(function(){
 var srcVal = $(".quick_menu_3 img").attr("src");
 $(".quick_menu_3 img").attr({"src":srcVal.replace("3.png","3_1.png")});
 });
 $(".quick_menu_3").mouseleave(function(){
 var srcVal = $(".quick_menu_3 img").attr("src");
 $(".quick_menu_3 img").attr({"src":srcVal.replace("3_1.png","3.png")});
 });
 $(".quick_menu_4").mouseenter(function(){
 var srcVal = $(".quick_menu_4 img").attr("src");
 $(".quick_menu_4 img").attr({"src":srcVal.replace("4.png","4_1.png")});
 });
 $(".quick_menu_4").mouseleave(function(){
 var srcVal = $(".quick_menu_4 img").attr("src");
 $(".quick_menu_4 img").attr({"src":srcVal.replace("4_1.png","4.png")});
 });
 $(".quick_menu_5").mouseenter(function(){
 var srcVal = $(".quick_menu_5 img").attr("src");
 $(".quick_menu_5 img").attr({"src":srcVal.replace("5.png","5_1.png")});
 });
 $(".quick_menu_5").mouseleave(function(){
 var srcVal = $(".quick_menu_5 img").attr("src");
 $(".quick_menu_5 img").attr({"src":srcVal.replace("5_1.png","5.png")});
 });
 $(".quick_menu_6").mouseenter(function(){
 var srcVal = $(".quick_menu_6 img").attr("src");
 $(".quick_menu_6 img").attr({"src":srcVal.replace("6.png","6_1.png")});
 });
 $(".quick_menu_6").mouseleave(function(){
 var srcVal = $(".quick_menu_6 img").attr("src");
 $(".quick_menu_6 img").attr({"src":srcVal.replace("6_1.png","6.png")});
 });
 
 
 });
                                                                                                                                                            