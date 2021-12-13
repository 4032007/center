$(function() {
	
//main slider
	$('.slider-mn').slick({
	  dots: true,
	  infinite: true,
	  slidesToShow: 1,
	  adaptiveHeight: true,
	  fade: true
	});
	
	$('.head-faq').click(function(){
		$(this).next().toggle()
	});
	
//nav card
	$('#nav').onePageNav();
	
	if($('.floating').length){
		var topPos = $('.floating').offset().top;
		$(window).scroll(function() {
			var top = $(document).scrollTop();
			if (top > topPos) $('.floating').addClass('fixed');
			else $('.floating').removeClass('fixed');
		});
	};	
		
//scroll
	$('.scroll').click(function(event){
		event.preventDefault();
		var full_url = this.href;
		var parts = full_url.split("#");
		var trgt = parts[1];
		var target_offset = $("#"+trgt).offset();
		var target_top = target_offset.top;
		$('html, body').animate({scrollTop:target_top}, 1000);
	});
	
	
//select	
	$('.sel-t select').niceSelect();
	
//yandex map
	ymaps.ready(function () {
		var myMap = new ymaps.Map('map', {
				center: [55.6614326, 37.5500163],
				zoom: 17,
				controls: []
			}, {
				suppressMapOpenBlock: true
			}),
	
			MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
				'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
			),
			
			myPlacemark = new ymaps.Placemark([55.6614326, 37.5500163], {
				balloonContent: ''
			}, {

				iconLayout: 'default#image',
				iconImageHref: 'images/ico-map.png',
				iconImageSize: [46, 56],
				iconImageOffset: [0, 0]
			});
			myMap.behaviors.disable('scrollZoom');
	
			myMap.geoObjects
			.add(myPlacemark);
	});
});

