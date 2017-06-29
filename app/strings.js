exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {

  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {
  	let result = '';

  	for (let i = str.length-1; i >= 0; i--) {
  		result += str.charAt(i);
  	}

  	return result;
  }
};
