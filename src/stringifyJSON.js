// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function (obj) {
  // console.log("json check true", JSON.stringify(true))
  // your code goes here
  //innerfunc
  //obj === string
  if (typeof obj === 'string') {
    return `"${obj}"`
  }


  ///obj === number
  if (typeof obj === "number") {
    return "" + obj
  }
  //obj === undefined //obj === function
  if (typeof obj === undefined || typeof obj === "function") {
    return undefined;
  }


  if (obj === null) {
    return "null";
  }

  //obj === true

  //obj === false
  if (typeof obj === "boolean") {
    return "" + obj;
  }
  //obj === array
  if (Array.isArray(obj)) {
    // return `[${stringifyJSON(obj)}]`
    return `[${obj.map((val) => stringifyJSON(val))}]`
    //iterate
  }

  // //obj === obj
  if (typeof obj === "object") {
    // let len = Object.entries(obj).length;
    console.log("what is failing", obj);

    if (Object.entries(obj).length === 0) {
      return "{}";
    }
    // console.log("entries", );
    // console.log("hitting");

    // // console.log(`{${Object.entries(obj).map(val => {
    // //   console.log(val);
    // //   return `{${val[0]} : ${stringifyJSON(val[1])}}`
    // // })}}`);
    let finalLength = Object.entries(obj).length - 1;
    let curIdx = 0;
    let objString = "{";
    for (let [key, value] of Object.entries(obj)) {

      if (typeof value === "undefined" || typeof key === "function") {
        return "[{}]"
      }

      if (curIdx < finalLength) {
        objString += `"${key}":${stringifyJSON(value)},`
      } else {
        objString += `"${key}":${stringifyJSON(value)}`
      }
      curIdx++;
    }

    objString += "}";
    return objString;
    // return `{ } `
  }

};


// stringifyJSON({
//   a: "apple",
//   b: "banana",
//   c: "canada"
// })


// console.log("testing");
// stringifyJSON();