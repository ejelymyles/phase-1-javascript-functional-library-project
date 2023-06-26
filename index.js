function myEach(collection, alert) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        alert(collection[i]);
      }
    } else if (typeof collection === 'object' && collection !== null) {
      const values = Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        alert(values[i]);
      }
    }
    
    return collection;
  }

  
  function myMap(collection, callback){
    const newArray = [];
    
    if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++) {
            newArray.push(callback(collection[i]));
        }
    } else if (typeof collection === `object` && collection !== null){
        const values = Object.values(collection);
        for (let i = 0; i < values.length; i++) {
            newArray.push(callback(values[i]));
        }
    }
    return newArray
  }


  function myReduce(collection, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : collection[Object.keys(collection)[0]];
  
    if (Array.isArray(collection)) {
      for (let i = initialValue !== undefined ? 0 : 1; i < collection.length; i++) {
        accumulator = callback(accumulator, collection[i], collection);
      }
    } else if (typeof collection === 'object' && collection !== null) {
      const values = Object.values(collection);
      const keys = Object.keys(collection);
      for (let i = initialValue !== undefined ? 0 : 1; i < values.length; i++) {
        accumulator = callback(accumulator, values[i], collection[keys[i]]);
      }
    }
  
    return accumulator;
  }

  function myFind(collection, predicate) {
    if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
            if (predicate(collection[i])){
                return collection[i];
            }
        }
    } else if (typeof collection === `object` && collection !== null) {
        const keys = Object.keys(collection);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            if (predicate(collection[key])){
                return collection[key];
            }
        }
    }
    return undefined;
  }

  function myFilter(collection, predicate) {
    let result = [];

    if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
            if (predicate(collection[i])){
                result.push(collection[i]);
            }
        }
    } else if (typeof collection === `object` && collection !== null) {
        const keys = Object.keys(collection);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            if (predicate(collection[key])){
                result.push(collection[key]);
            }
        }
    }
    return result;
  }

  function mySize(collection) { 
    if(Array.isArray(collection)){
        return collection.length;
    } else if (typeof collection === `object` && collection !== null){
        return Object.keys(collection).length;
    } else {
        return 0;
    }
  }

function myFirst(array, n = 1) {
  if (n === 1) {
    return array[0];
  } else {
    return array.slice(0, n);
  }
}

function myLast(array, n = 1) {
    if (n === 1) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }

  function myKeys(object) {
    return Object.keys(object);
  }

  function myValues(object) {
    return Object.values(object);
  }