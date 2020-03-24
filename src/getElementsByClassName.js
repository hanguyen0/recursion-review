// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   console.log("what is the valu", document.getElementsByClassName(className))
//   //  [body.targetClassName, div.targetClassName]
//   return document.getElementsByClassName(className);
// };


// We just wanted a sanity check on expected vs. actual result and our confused on

// We compared the test getElementsByClassName('targetClassName') with the built in implementation to make sure they deeply equaled each and other and they don't and were confused as to why that is...


// But instead we're going to implement it from scratch:

const getElementsByClassName = function (className) {
  // You should use document.body, element.childNodes, and element.classList
  //TODO -consider how we might use args, would that require chaning the test files, and if so is that a good idea?s
  let result = []
  if (document.body.classList) {
    if (document.body.classList.contains(className)) {
      result.push(document.body);
    }
  }
  // console.log(document.body)
  function doWork(element) {
    for (let i = 0; i < element.childNodes.length; i++) {

      if (element.childNodes[i].classList) {
        if (element.childNodes[i].classList.contains(className)) {
          result.push(element.childNodes[i]);
        }
      }

      doWork(element.childNodes[i])
    }
  }

  doWork(document.body)

  console.log('final result ', result)
  return result
}

