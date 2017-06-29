exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(...arr);
  },

  speak: function(fn, obj) {
    class Obj {
      constructor() {
        this.greeting = obj.greeting;
        this.name = obj.name;
        this.fn = fn;
      }
    }

    return new Obj().fn();
  },

  functionFunction: function(str) {
    let string = str;

    function fn(str2) {
      return str + ', ' + str2;
    }

    return fn;
  },

  makeClosures: function(arr, fn) {
    var arr2 = [];

    for (let i = 0, l = arr.length; i < l; i++) {
      arr2[i] = function() {
        return fn(arr[i]);
      };
    }

    return arr2;
  },

  partial: function(fn, str1, str2) {
    function func(punctuation) {
      return fn(str1, str2, punctuation);
    }

    return func;
  },

  useArguments: function() {
    let result = 0;

    for (let i = 0, l = arguments.length; i < l; i++) {
      result += arguments[i];
    }

    return result;
  },

  callIt: function(fn, ...args) {
    fn(...args);
  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {
    
  }
};
