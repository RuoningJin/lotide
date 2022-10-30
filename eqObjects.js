const eqObjects = function(object1, object2) {
  
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let key in object1) {

    if (typeof object1[key] === 'object' && !Array.isArray(object1[key])) {
      if (eqObjects(object1[key], object2[key])) {
        continue;
      }
    }

    if (Array.isArray(object1[key])) {
      for (let i = 0; i < object1[key].length; i++) {
        if (object1[key][i] !== object2[key][i] || object1[key].length !== object2[key].length) {
          return false;
        }
      }
    }

    if (object2[key] !== object1[key]) {
      return false;
    }
  }

  return true;

};

module.exports = eqObjects;