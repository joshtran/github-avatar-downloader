var myArgs = process.argv;
var gitOwner = myArgs[2];
var gitRepo = myArgs[3];
var request = require("request");
var fs = require("fs")
var GITHUB_USER = "joshtran";
var GITHUB_TOKEN = "605b127ccace488342149ee40f538cd6b8e191c1";


//Create avatars folder
var mkdirSync = function () {
  try {
    fs.mkdirSync("avatars");
  } catch (e) {
    if (e.code != 'EEXIST') throw e;
  }
}();

console.log('Welcome to the GitHub Avatar Downloader!');


//Retrieve info from github
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


//Download image
function downloadImageByURL(url, filePath) {
  request.get(url).pipe(fs.createWriteStream(filePath));
}

//Require proper input from command line
if (gitOwner && gitRepo) {
//Initiate program
getRepoContributors(gitOwner, gitRepo, function(contributorObj) {
  contributorObj.forEach(function(avatars) {
    var avatarPath = "avatars/" + avatars.login +".jpg";
    var avatarURL = avatars.avatar_url;
    downloadImageByURL(avatarURL, avatarPath);
  });
});

} else {
  console.log("Please enter both GitHub owner and GitHub Repo.");
}




