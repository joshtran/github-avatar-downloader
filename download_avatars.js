var request = require('request');
const API_URL = "https://api.github.com/users/lighthouse-labs";

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors (repoOwner, repoName, cb) {

  request (API_URL, function (err, res, avatars) {

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
  console.log("Errors:", err);
  console.log("Result:", result);
});

