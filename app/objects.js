exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
  	fn.apply(obj);
    return fn();
  },

  alterObjects: function(constructor, greeting) {
  	constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
  	var result = [];

  	for (let prop in obj) {
  		if (hasOwnProperty.call(obj, prop)) {
  			result.push(`${prop}: ${obj[prop]}`);
  		}
  	}

  	return result;
  }
};
