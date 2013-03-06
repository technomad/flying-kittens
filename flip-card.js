$(document).ready(function(){

	// center the game board on the screen
	var windowHeight = $(window).height(),
			board = $('.board'),
			cards = $('.card'),
			alert = $('.alert');
	board.css({marginTop: (windowHeight - board.height()) / 3});
	// center the game board on the screen when resizing
	$(window).resize(function() {
		windowHeight = $(window).height();
		board.css({marginTop: (windowHeight - board.height()) / 3});
	});

	alert.delay('2000').fadeOut('slow');

	// create and randomize card numbers
	var cardNums = new Array();
	for (var i = 1; i <= cards.length / 2; i++) {
		cardNums.push(i);
		cardNums.push(i);
	}
	fisherYates(cardNums); // shuffle numbers
	for (var i = 0; i < cards.length; i++) {
		var n = cardNums[i];
		cards.eq(i)
			.attr('data-number', n)
				.append('<p>' + n + '</p>');
	}


	var clickCount = 0, 
			clickArray = new Array();
	cards.on('click', function(){
		var $this = $(this);
		
		if ($this.hasClass('correct') === false) {
			$this.find('p').show();
			$this.toggleClass('selected');
			clickArray.push($this.data('number'));
			clickCount += 1;
		}

		if (clickCount > 1) { // reset after clicking two cards
			var selected = $('.selected');
			if (clickArray[0] === clickArray[1]) { // if clicked cards are a match
				selected.removeClass('selected').addClass('correct');
				alert.find('p').text('Match!').end().css({background: '#B0C770'}).fadeIn('fast').delay('2000').fadeOut('fast');
			}
			else { // if clicked cards are not a match
				selected.find('p').delay(2000).hide(0);
				alert.find('p').text('Not a match!').end().css({background: '#DBAD68'}).fadeIn('fast').delay('2000').fadeOut('fast');
				selected.removeClass('selected').addClass('incorrect').delay(2000)
          .queue(function() {
            $(this).removeClass("incorrect").dequeue();
          });
			}
			clickCount = 0;
			clickArray = [];
		}
	});

	// start and pause button
	var pause = $('.pause');
	pause.hide();
	$('.start').on('click', function() {
		var time = 0;
		$(this).siblings().fadeIn('fast').end().hide();
		$('.board').find('p').each(function(){
			$(this).delay(time).fadeOut('slow')
			time += 40;
		});
	});
	pause.on('click', function() {
		var time = 0;
		$(this).siblings().fadeIn('fast').end().hide();
		$('.board').find('p').each(function(){
			$(this).delay(time).fadeIn('slow')
			time += 40;
		});
	});

	// array element randomizer by Ronald A. Fisher and Frank Yates
	function fisherYates ( myArray ) {
	  var i = myArray.length, j, tempi, tempj;
	  if ( i == 0 ) return false;
	  while ( --i ) {
	     j = Math.floor( Math.random() * ( i + 1 ) );
	     tempi = myArray[i];
	     tempj = myArray[j];
	     myArray[i] = tempj;
	     myArray[j] = tempi;
	   }
	}

});