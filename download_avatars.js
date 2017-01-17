var request = require('request');
var GITHUB_USER = "joshtran";
var GITHUB_TOKEN = "605b127ccace488342149ee40f538cd6b8e191c1";

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors (repoOwner, repoName, cb) {

  var requestURL = "https://"+ GITHUB_USER + GITHUB_TOKEN + "@api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors";

  console.log(requestURL);

  request (requestURL, function (err, res, avatars) {

    // if (err) {
    //   console.log("There was an error.")
    //   return false;
    // }

    // if (res.statusCode < 400) {
    //   console.log("Should be working now");

    // } else {
    //   console.log("Something unexpected happened - Status Code 400 plus");
    // }

  });

}


getRepoContributors("jquery", "jquery", function(err, result) {
  console.log(requestURL);
  console.log("Errors:", err);
  console.log("Result:", result);
});

