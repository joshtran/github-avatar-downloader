var request = require("request");
var fs = require("fs")
var GITHUB_USER = "joshtran";
var GITHUB_TOKEN = "605b127ccace488342149ee40f538cd6b8e191c1";


console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors (repoOwner, repoName, cb) {

  var requestURL = "https://"+ GITHUB_USER + ':' + GITHUB_TOKEN + "@api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors";

  var options = {
    url: requestURL,
    headers: {
      "User-Agent": "GitHub Avatar Downloader - Student Project"
    }
  };

  request (options, function (err, response, avatars) {

    if (err) {
      console.log("There was an error.")
      return false;
    }

    if (response.statusCode < 400) {
      console.log("Should be working now");
      console.log(response.statusMessage);
      console.log(response.statusCode);
      var body = JSON.parse(avatars);
      cb(body);

    } else {
      console.log("Something unexpected happened - Status Code 400 plus");
    }

  });

}


getRepoContributors("jquery", "jquery", function(contributorObj) {
  contributorObj.forEach(function(avatars) {
    console.log(avatars.avatar_url);

  });
});

function downloadImageByURL(url, filePath) {
  request.get(url).pipe(fs.createWriteStream("kvirani.jpg"));
}

downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "avatars/kvirani.jpg");

