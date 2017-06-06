const express = require('express');
const pug = require('pug');
const router = express.Router();
const path = require('path');
var http = require("https");

const app = express();

app.set('port', process.env.PORT || 3000);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

app.set('views', path.join(__dirname, 'views')); // this is the folder where we keep our pug files
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

let posts = [{
    poster: "Arjun Munji",
    photo: "",
    audience: "public",
    time: "yesterday at 10:35",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In fugiat officiis repellendus labore illo maiores quia aut quibusdam cupiditate temporibus rerum, explicabo aspernatur, molestias enim tempore fugit error vero aliquam!",
    likers: [
      "Shri Ram",
      "Shashank Reddy"
    ]
},{
    poster: "Arjun Munji",
    photo: "",
    audience: "public",
    time: "yesterday at 10:35",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In fugiat officiis repellendus labore illo maiores quia aut quibusdam cupiditate temporibus rerum, explicabo aspernatur, molestias enim tempore fugit error vero aliquam!",
    likers: [
      "Shri Ram",
      "Shashank Reddy"
    ]
},{
    poster: "Arjun Munji",
    photo: "",
    audience: "public",
    time: "yesterday at 10:35",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In fugiat officiis repellendus labore illo maiores quia aut quibusdam cupiditate temporibus rerum, explicabo aspernatur, molestias enim tempore fugit error vero aliquam!",
    likers: [
      "Shri Ram",
      "Shashank Reddy"
    ]
},{
    poster: "Arjun Munji",
    photo: "",
    audience: "public",
    time: "yesterday at 10:35",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In fugiat officiis repellendus labore illo maiores quia aut quibusdam cupiditate temporibus rerum, explicabo aspernatur, molestias enim tempore fugit error vero aliquam!",
    likers: [
      "Shri Ram",
      "Shashank Reddy"
    ]
},{
    poster: "Arjun Munji",
    photo: "",
    audience: "public",
    time: "yesterday at 10:35",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In fugiat officiis repellendus labore illo maiores quia aut quibusdam cupiditate temporibus rerum, explicabo aspernatur, molestias enim tempore fugit error vero aliquam!",
    likers: [
      "Shri Ram",
      "Shashank Reddy"
    ]
},{
    poster: "Arjun Munji",
    photo: "",
    audience: "public",
    time: "yesterday at 10:35",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In fugiat officiis repellendus labore illo maiores quia aut quibusdam cupiditate temporibus rerum, explicabo aspernatur, molestias enim tempore fugit error vero aliquam!",
    likers: [
      "Shri Ram",
      "Shashank Reddy"
    ]
},{
    poster: "Arjun Munji",
    photo: "",
    audience: "public",
    time: "yesterday at 10:35",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In fugiat officiis repellendus labore illo maiores quia aut quibusdam cupiditate temporibus rerum, explicabo aspernatur, molestias enim tempore fugit error vero aliquam!",
    likers: [
      "Shri Ram",
      "Shashank Reddy"
    ]
},{
    poster: "Arjun Munji",
    photo: "",
    audience: "public",
    time: "yesterday at 10:35",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In fugiat officiis repellendus labore illo maiores quia aut quibusdam cupiditate temporibus rerum, explicabo aspernatur, molestias enim tempore fugit error vero aliquam!",
    likers: [
      "Shri Ram",
      "Shashank Reddy"
    ]
}]
let friends = {};

    var options = {
    "method": "GET",
    "hostname": "randomuser.me",
    "port": null,
    "path": "/api/?inc=name%2Cpicture&results=15&noinfo",
    "headers": {
      "cache-control": "no-cache",
    }
  };

  var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function () {
      var body = Buffer.concat(chunks);
      console.log(body.toString());
      friends = body.toString();
      friends = JSON.parse(friends);
      
    });
  });
  req.end();

app.get('/', function(req, res) {
  console.log(friends);
  res.render('home', {posts: posts, friends: friends.results});
});




