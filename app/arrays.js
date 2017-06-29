exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (let i = 0, l = arr.length; i < l; i++) {
      if (arr[i] == item) {
        return i;
      }
    }

    return -1;
  },

  sum: function(arr) {
    let result = 0;

    for (let i = 0, l = arr.length; i < l; i++) {
      result += arr[i];
    }

    return result;
  },

  remove: function(arr, item) {
    let result = arr.filter(function(i) {
      return i !== item;
    }); 

    return result;
  },

  removeWithoutCopy: function(arr, item) {
    
    for (let i = arr.length; i > 0; i--) {
      if (arr[i] == item) {
        arr.splice(i, 1);
      }
    } 
    
    return arr;
  },

  append: function(arr, item) {
    arr[arr.length] = item;
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    let result = 0;

    for (let i = 0, l = arr.length; i < l; i++) {
      if (arr[i] == item) {
        result++;
      }
    }

    return result;
  },

  duplicates: function(arr) {
    let result = [];
    let sorted = arr.slice().sort(); 

    for (let i = 0, l = sorted.length; i < l; i++) {
        if (
          sorted[i] == sorted[i+1] 
          && this.indexOf(result, sorted[i]) == -1
        ){
            result.push(sorted[i]);
        }
    }

    return result;
  },

  square: function(arr) {
    for (let i = 0, l = arr.length; i < l; i++) {
      arr[i] *= arr[i]; 
    }

    return arr;
  },

  findAllOccurrences: function(arr, target) {
    var result = [];

    for (let = i = 0, l = arr.length; i < l; i++) {
      if (arr[i] == target) {
        result.push(i);
      }
    }
    return result;
  }
};
