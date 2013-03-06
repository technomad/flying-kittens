$(document).ready(function(){

	function animateRainbow(target, direction) {
		var target = $(target);
		var opposite = '+'
		if (direction == '+') {
			var opposite = '-';
		}
		target.delay(200).animate({ top: direction + "=6px", left: "+=6px" }, 5, function(){
			target.delay(200).animate({ top: opposite + "=6px", left: "-=6px"  }, 5, function(){
				animateRainbow(target, direction);
			});
		});
	}
	animateRainbow('.one', '+');
	animateRainbow('.two', '-');
	animateRainbow('.three', '+');
	animateRainbow('.four', '-');
});

function randomNumber(max) {
	return Math.floor(Math.random() * max) + 1;
}

function moveStar(star){
	var star = $(star);
	star.css({left: '600px', top: randomNumber(550) + 'px' })
	star.delay(randomNumber(2500)).animate({left: '-=650px'}, 2000, function(){
		moveStar(star);
	});
}

$('div.star').each(function() {
	moveStar($(this));
});

function animateStar(){
	var starTop = $('span.top'),
			starRight = $('span.right'),
			starBottom = $('span.bottom'),
			starLeft = $('span.left'),
			starCenter = $('span.center'),
			starCorner = $('span.corner'),
			interval = 200,
			animInterval = 0,
			cycle = interval + animInterval,
			totalCycle = cycle * 6;
	
	// star animation
	starTop
		.delay(interval).animate({top: "-=6px", height: "+=1px"},animInterval)
			.delay(interval).animate({top: "-=5px",height: "+=5px"},animInterval)
				.delay(interval).animate({top: "-=5px"},animInterval)
					.delay(interval).animate({height: "-=5px"},animInterval)
						.delay(interval)
							.css({top: 0, left: 0, height: 5});

	starRight
		.delay(interval).animate({left: "-=6px", width: "+=1px"}, animInterval)
			.delay(interval).animate({left: "-=5px", width: "+=5px"}, animInterval)
				.delay(interval).animate({left: "-=5px"}, animInterval)
					.delay(interval).animate({width: "-=5px"}, animInterval)
						.delay(interval)
							.css({top: 0, left: 0, width: 5});

	starBottom
		.delay(interval).animate({top: "+=5px", height: "+=1px"}, animInterval)
			.delay(interval).animate({height: "+=5px"}, animInterval)
				.delay(interval).animate({top: "+=5px"}, animInterval)
					.delay(interval).animate({top: "+=5px", height: "-=5px"}, animInterval)
						.delay(interval)
							.css({top: 0, left: 0, height: 5});;

	starLeft
		.delay(interval).animate({left: "+=5px", width: "+=1px"}, animInterval)
			.delay(interval).animate({width: "+=5px"}, animInterval)
				.delay(interval).animate({left: "+=5px"}, animInterval)
					.delay(interval).animate({left: "+=5px", width: "-=5px"}, animInterval)
						.delay(interval)
							.css({top: 0, left: 0, width: 5});

	starCenter.hide(0).delay(cycle*3).show(0).delay(cycle).hide(0).delay(cycle*2).css({top: 0, left: 0});

	starCorner.hide(0).delay(cycle*4).show(0).delay(cycle).hide(0).delay(cycle);

	// loop star animation
	setTimeout(animateStar, totalCycle);
}
animateStar();