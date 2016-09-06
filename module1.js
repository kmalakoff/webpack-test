try {
  console.log("Module1: pre-require");
  var async = require('async1');
  console.log("Module1: async " + async.each);
}
catch (err) {
  console.log("Module1: post-require (error)");
}
finally {
  console.log("Module1: post-require (finally)");
}
