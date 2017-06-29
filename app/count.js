exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    let num = start;

    console.log(num);

  	let counter = setInterval(function() {
      num++;

      if (num <= end) {
        console.log(num);
      } else {
  			clearInterval(counter);
      }

  	}, 100); 

  	return {
  		cancel: function() {
  			clearInterval(counter);
  		}
  	};

  }
};
