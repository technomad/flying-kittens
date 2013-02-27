$(document).ready(function(){

	var $ball = $('div.red.ball'),
			$shadow = $('div.ball.shadow'),
			$counter = $('span.counter'),
			count = 0;

	$ball.on('click', function(){
		
		if(/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())){
			$shadow.addClass('moveShadow'); // fixes shadow position jumps after first ball click on Chrome, not sure why it happens
		}

		$ball
			.animate({top : '-=100', boxShadow: 'inset 0 -5px 10px rgba(0,0,0,0.1)'}, 300, 'swing')
				.animate({top : '+=100', boxShadow: 'inset 0 -10px 20px rgba(0,0,0,0.3)'}, 250, 'swing', function() {
					$(this).animate({width : '+=4', height : '-=2', left : '-=2', top : '+=1'}, 100).animate({width : '-=4', height : '+=2', left : '+=2', top : '-=1'}, 50);
				}),
		$shadow
			.animate({height: 50, width: 50, opacity: 0.4, left: '+=25', top: '+=25'}, 300, 'swing')
				.animate({height: 100, width: 100, opacity: 1, left: '-=25', top: '-=25'}, 250, 'swing'),
		count += 1,
		$counter.text(count);

		if (count == 3) {
			$('<p></p>', {
				text: 'Like clicking stuff, do you?',
				class: 'note'
			}).insertAfter($counter);
		} 
		else if (count == 6) {
			$('p.note').text('Well, you just keep on clicking then.');
		}
		else if (count == 9) {
			$ball.wrap('<a href="http://youtu.be/dQw4w9WgXcQ" target="_blank"></a>');
		}
		else if (count == 10) {
			$('p.note').text(":) That's all folks."),
			$ball.unwrap();
		}; 
	});
});