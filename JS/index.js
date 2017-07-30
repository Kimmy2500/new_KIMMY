/*part.16, 17, 18_used toggle and slide*/
function toggleDiv(divId) {
   $("#"+divId).slideToggle();
}

/*used fancy box*/
 $(document).ready(function() {
	               $(".fancybox").fancybox({
	                    openEffect  : 'none',
	                    closeEffect : 'none',
	                    afterClose : (function() {location.reload();return;})
	                  });
	           });

 /*part.18_used hide and show*/
$(document).ready(function(){
    $("#hide").click(function(){

        $("#notice_t").hide();
    });
    $("#show").click(function(){
        $("#notice_t").show();
    });
});

 /*part.19_used animate*/
$(document).ready(function(){
    $("button").click(function(){
        var div = $("#ani_box");
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "slow");
        div.animate({height: '100px', opacity: '0.4'}, "slow");
        div.animate({width: '100px', opacity: '0.8'}, "slow");
    });
});

 /*part.19_used CSS properties*/
$(document).ready(function(){
  $("#btnShow").click(function(){
    $("#notice_t").css("background-color","#ffd2c2");
  });
});



/*part.20_used form event_When you press the input box, the background color changes.*/

$(document).ready(function(){
    $(".inputS").focus(function(){
        $(this).css("background-color", "#cccccc");
    });
    $(".inputS").blur(function(){
        $(this).css("background-color", "#ffffff");
    });
});

/*part.20_used keyboard event_when clicked esc key, an alert window appears.*/
function myFunction(event) {
    var x = event.which || event.keyCode;
    if (x == 27) {
        alert ("You pressed the Escape key!");
    }
}
/*part.20_used mouse event*/

$(document).ready(function(){
    $(".pHover").hover(function(){
        $(this).css("background-color", "#ffd2c2");
        }, function(){
        $(this).css("background-color", "pink");
    });
});


/*part.21_used droppable*/
 function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
}

function dragEnd(event) {
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
}
/*part.18_used hide and show*/
$(function () {
  $("#btnHide").click(function () {
    $("#notice_t").hide(600);
  });

  $("#btnShow").click(function () {
    $("#notice_t").show(600);
  })
})