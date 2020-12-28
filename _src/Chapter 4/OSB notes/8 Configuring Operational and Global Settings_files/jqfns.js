/*
Copyright 2014, Oracle and/or its affiliates. All rights reserved.
Version: 2014.11.1
*/
$(document).ready(function () {
    var length = 0;
     $(document).on('load','#download',function () {
      var wide1 = $('#download').width() + $('#download').offset().left+10;
       $('#downloadsect').css({'width':wide1+'px !important'});
     });
    $(document).on('load',"#NAV",function () {
      length = $('#NAV').height() - $('#leftsidebar').height() + $('#NAV').offset().top;
      changeDownload();
    });
    $('body').bind('touchmove', function(e) { 
    //alert("moved?");
     length = $('#NAV').height() - $('#leftsidebar').height() + $('#NAV').offset().top;
        var scroll = $(this).scrollTop();
        var bottom = 0;
        var height = $('#leftsidebar').height() + 'px';
        var width = $('#NAV').width() + 'px';
        if($(window).width() > 620) {
        if (scroll < $('#NAV').offset().top) {
            $('#searchField').css({'width' : '80%'});
            $('#leftsidebar').css({
                'position': 'absolute',
                'top': '0',
                'overflow-y' : 'auto',
                //'padding-right' : '2ex',
                'width' : '97%',
                'height' : 'auto'
            });
            $('#feedbackRating').css({
              'top' : (document.getElementById("feedback").getBoundingClientRect().top - 20) +'px'
            });
        } else if (scroll > length) {
            bottom = (scroll - length) + 'px';
            height =  $(window).height() - $("footer").height();
            //alert(scroll + ' ' + length + ' '+height);
            $('#leftsidebar').css({
            'position': 'fixed',
                'top': '0',
                'overflow-y' : 'auto',
                'width' : width,
                'height' : height + 'px'
                
            });
            $('#feedbackRating').css({
              'top' : '0'
            });

        } else {
            //alert(height);
            $('#leftsidebar').css({
                'position': 'fixed',
                'top': '0',
                'overflow-y' : 'auto',
                'width' : width,
                'height' : '100%'
            });
            $('#feedbackRating').css({
              'top' : '0'
            });            

        }
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
         $('#leftsidebar').css({
          'bottom' : '55px'
         });
        }
        } else {
       // alert(screen.width);
             $('#leftsidebar').css({
                'position': 'relative',
                'width' : '100%'
                });
        }
  });
    /*document.addEventListener("touchmove", ScrollStart);
    document.addEventListener("scroll", ScrollStart);
    document.addEventListener("touchstart", ScrollStart);
    document.addEventListener("touchend", ScrollStart);
    document.addEventListener("gesturechange", ScrollStart);
    function ScrollStart() {
        
    }*/
    $(window).scroll(function () {
        var wide1 = $('#download').width() + $('#download').offset().left + 10;
         $('#downloadsect').css({'width':wide1+'px !important'});
        length = $('#NAV').height() - $('#leftsidebar').height() + $('#NAV').offset().top;
        var scroll = $(this).scrollTop();
        var bottom = 0;
        var height = $('#leftsidebar').height() + 'px';
        var width = $('#NAV').width() + 'px';
        if($(window).width() > 620) {
        if (scroll < $('#NAV').offset().top) {

            $('#leftsidebar').css({
                'position': 'absolute',
                'top': '0',
                'overflow-y' : 'auto',
                //'padding-right' : '2ex',
                'width' : '97%',
                'height' : 'auto'
            });
            $('#feedbackRating').css({
              'top' : (document.getElementById("feedback").getBoundingClientRect().top - 20) +'px'
            });            

        } else if (scroll > length) {
            bottom = (scroll - length) + 'px';
            height =  $(window).height() - $("footer").height();
            $('#leftsidebar').css({
            'position': 'fixed',
                'top': '0',
                'overflow-y' : 'auto',
                'width' : width,
                'height' : height + 'px'
            });
            $('#feedbackRating').css({
              'top' : '0'
            });

        } else {
            $('#leftsidebar').css({
                'position': 'fixed',
                'top': '0',
                'overflow-y' : 'auto',
                'width' : width,
                'height' : '100%'
            });
            $('#feedbackRating').css({
              'top' : '0'
            });
        }
        } else {
       // alert(screen.width);
             $('#leftsidebar').css({
                'position': 'relative',
                'width' : '100%'
                });
        }
    });
    $(window).resize(function () {
      var wide1 = $('#download').width() + $('#download').offset().left + 10;
       $('#downloadsect').css({'width':wide1+'px !important'});
        length = $('#NAV').height() - $('#leftsidebar').height() + $('#NAV').offset().top;
        var scroll = $(this).scrollTop();
        var height = $('#leftsidebar').height() + 'px';
        var width = $('#NAV').width() + 'px';
        if($(window).width() > 620) {
         
        if (scroll < $('#NAV').offset().top) {

            $('#leftsidebar').css({
                'position': 'absolute',
                'top': '0',
                'overflow-y' : 'auto',
                'width' : '97%',
                'height' : 'auto'
            });

        } else if (scroll > length) {
            height =  $(window).height() - $("footer").height();
            $('#leftsidebar').css({
             'position': 'fixed',
                'top': '0',
                'overflow-y' : 'auto',
                'width' : width,
                'height' : height + 'px'
            });

        } else {
            $('#leftsidebar').css({
                'position': 'fixed',
                'top': '0',
                'overflow-y' : 'auto',
                'width' : width,
                'height' :'100%'
            });

        }
        } else {
        //alert(screen.width);
             $('#leftsidebar').css({
                'position': 'relative',
                'width' : '100%'
                });
        }
    });
    //changeDownload();
    changeDownload();
});
$(window).resize(function () {
changeDownload();
});
function submitAjax() {
$(".innerRating").css("display","none");
$("#loadImage").css("display","block");
var submitter = $("input:radio[name=submitter]:checked").val();
var userCommentsBody = $("#userCommentsBody").val();
var userCommentsTitle = $("#userCommentsTitle").val();
var path = $("#path").val();
var topictitle = $("#topictitle").val();
var dataString = 'submitter='+ submitter + '&comment_text=' + userCommentsBody + '&title=' + userCommentsTitle + '&path=' + path + '&topictitle=' + topictitle +'';
$.ajax({
type: "POST",
url: "http://www.oracle.com/pls/tahiti/comments_test",
data: dataString,

success: function(){
$('#feedbackRating').css("display","none");
$(".innerRating").css("display","block");
$('#feedback').css("display","inline-block");
$("#loadImage").css("display","none");
$("#userCommentsBody").val('');
$("#userCommentsTitle").val('');
}, 
error: function(){
    $('#feedbackRating').css("display","none");
    $(".innerRating").css("display","block");
    $("#loadImage").css("display","none");
    $('#feedback').css("display","inline-block");
    $("#userCommentsBody").val('');
    $("#userCommentsTitle").val('');
  }
});

function jsonCallback(rtndata) {
  alert("here" +rtndata);
}
}
function changeDownload() {
 var checkReady = function (callback) {
  
      if (document.getElementById("downloadsect") !== undefined && document.getElementById("downloadsect")  !== null) {
      if (window.screen.width <= 620 || window.innerWidth <= 620) {
      if(window.screen.width < 620) {
      document.getElementById("downloadsect").style.width = (window.screen.width*80/100)+'px';
      } else {
      document.getElementById("downloadsect").style.width = "80%";
      }
      document.getElementById("downloadsect").style.left = "2px !important";
      } else {
       document.getElementById("downloadsect").style.width = (document.getElementById("download").offsetWidth + document.getElementById("download").getBoundingClientRect().left +25) + 'px';
       } 
     } else {
        window.setTimeout(function () { checkReady(callback); }, 2);
     }
}
checkReady(function () {});
}
changeDownload();