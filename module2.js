try {
  console.log("Module2: pre-require");
  var async = require('async1');
  console.log("Module2: async " + async.each);
}
catch (err) {
  console.log("Module2: post-require (error)");
}
finally {
  console.log("Module2: post-require (finally)");
}
