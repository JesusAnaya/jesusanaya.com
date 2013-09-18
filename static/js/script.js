jQuery(document).ready(function($){
	"use strict";

	//Add class if retina detected
var retina = window.devicePixelRatio > 1;
if (retina) {
   $('body').addClass('retina');
}
//menu li href implementantion
$('.menu li').click(function(){
	document.location = $('a',this).attr('href');
});
//bootstrap tooltip script
$('.menu li, .share_expand .buttons li, .comments span').tooltip();

//background image fade script

var bgimage = new Image();
bgimage.src="/static/img/background.png";
$(bgimage).load(function(){
    $('#bgmimick').animate({
		opacity:1
		},1500);
	});
//bars loading script
	if($(".container.resume").length > 0){
		var x = 3;
		while(x<=4){
			var i = 1;
			while(i<=4){
				var the_bar = $('.span3:nth-child('+x+') .skills li:nth-child('+i+') .loading .bar');
				var the_percent = $('.span3:nth-child('+x+') .skills li:nth-child('+i+') .percent').html();
				the_bar.animate({
					width:the_percent
				},1000);
				i++;
			}
			x++;
		}
}
	//if, it's the portfolio page
	if($(".container.portfolio").length > 0){
		//share select start
		$('.copy').click(function(){
			$(this).parent('.share_expand').children('input').select();
		});
		//share select end
		//share click start
		var isshare = 0;
		$('.hover_bg .share a').click(function(){
			$(this).parents('.hover_bg').children('.share_expand').animate({
				marginTop: "-238px",
			},400,function(){
				if(isshare===0){
					isshare = 1;
				}
			});
			var hover_bg =$(this).parents('.hover_bg');

			hover_bg.children('.preview').animate({
					marginLeft: "-119",
				},400);
			hover_bg.children('.share').animate({
				marginLeft: "238",
			},400);
		});
		//share click end

		//colorbox script start
		$('.hover_bg .preview a').colorbox();

		//the hover effect:
		var marginTop = 0;
		$('.portfolio .span3 .slideshow').hover(function(){
			//hover in script
			marginTop = $('.container ',this).css('marginTop');
			var xthis = this;
			$('.container ',this).animate({
				marginTop: "0",
			},400);
			$('.hover_bg .preview ',xthis).animate({
					marginLeft: "0",
				},400);
			$('.hover_bg .share ',xthis).animate({
				marginLeft: "119px",
			},400);
		},function(){
			//hover out script
			var xthis = this;
			if(isshare===1){
				$('.hover_bg .share_expand',xthis).animate({
				marginTop: "-476px",
			},400,function(){
					isshare = 0;
			});
			}
			$('.container ',this).animate({
				marginTop: '-90',
			},400);
			$('.hover_bg .preview ',xthis).animate({
					marginLeft: "-119",
				},400);
			$('.hover_bg .share ',xthis).animate({
				marginLeft: "238",
			},400);
		});
		//the hover effect end
	}
	// portfolio page script end

	//if, it's the portfolio page
	if($(".container.contact,.container.blog").length > 0){
		//checking form info
		$('form').submit(function(){
			var submit_return = true;
			if($('.description input[name="samsa_name"]').val()===""){
				$('.description input[name="samsa_name"]').addClass('error').attr('placeholder','Please enter your name here...');
				submit_return = false;
			}
			if($('.description input[name="samsa_email"]').val()===""){
				$('.description input[name="samsa_email"]').addClass('error').attr('placeholder','Please enter your email here...');
				submit_return = false;
			}
			if($('.description input[name="samsa_email"]').val().indexOf('@')===-1){
				$('.description input[name="samsa_email"]').addClass('error').val('');
				$('.description input[name="samsa_email"]').addClass('error').attr('placeholder','Enter a valid email address..');
				submit_return = false;
			}
			var the_textarea = $('.description textarea');
			if(the_textarea.val()===""){
				the_textarea.addClass('error').attr('placeholder','Please enter your message here...');
				submit_return = false;
			}
			return submit_return;
		});
	}
		//if, it's the portfolio page
	if($(".container.blog").length > 0){
		//the scrollbar script
		$('#loop').tinyscrollbar({size:539,invertscroll:true});
	}
});