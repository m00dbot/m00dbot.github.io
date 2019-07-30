//tabs----------------------------------------------------
function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";
  // Add the specific color to the button used to open the tab content
  //elmnt.style.backgroundColor = color;
}

// Get the element with id="genOpen" and click on it
function genlink() {
  document.getElementById("genOpen").click();
}



//get userinput values
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};




// watchGenerator--------------------------------------------------

var watch = {
  // happy movies
  "movie1":{"name": "Mulan", "mood":"happy","time": "reallyLong","img":"https://vignette.wikia.nocookie.net/disney/images/0/04/Profile_-_Mulan.jpeg/revision/latest?cb=20190312015124"},
  "movie2":{ "name": "Moana","mood": "happy","time":"reallyLong", "img":"https://compote.slate.com/images/9a824e6f-c28f-4eca-9606-7c6e2e3ac95b.jpg"},
  "movie3":{"name": "Crazy Rich Asians","mood":"happy","time":"reallyLong","img":"https://i1.wp.com/newsfeed.ph/wp-content/uploads/2018/07/crazy-rich-asians.jpg?resize=696%2C696&ssl=1"},
  "movie4":{ "name": "Pitch Perfect","mood": "happy","time":"reallyLong", "img":"https://tinyurl.com/y6gtuy7w"},
  "movie5":{ "name": "Mean Girls","mood": "happy","time":"reallyLong", "img":"https://tinyurl.com/y69v3eqx"},
  "movie6":{ "name": "The Princess Bride","mood": "happy","time":"reallyLong", "img":"https://tinyurl.com/y259a5rv"},
  "movie7":{ "name": "Legally Blonde","mood": "happy","time":"reallyLong", "img":"https://tinyurl.com/y259a5rv"},
  "movie8":{ "name": "Toy Story 4","mood": "happy","time":"reallyLong", "img":"https://tinyurl.com/y6n7t3rq"},
  "movie9":{ "name": "To All The Boys I've Loved Before","mood": "happy","time":"reallyLong", "img":"https://tinyurl.com/y6hsyllr"},
  "movie10":{ "name": "La La Land","mood": "happy","time":"reallyLong", "img":"https://tinyurl.com/y3uezyk3"},
//sad movies
  "movie11":{"name": "Endgame","mood":"sad","time":"reallyLong", "img": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_pur_digital_01.png"},
  "movie12":{"name": "The Fault In Our Stars","mood":"sad","time":"reallyLong", "img": "https://tinyurl.com/y25ev66p"},
  "movie13":{"name": "Everything, Everything","mood":"sad","time":"reallyLong", "img": "https://tinyurl.com/y4tphqmu"},
  "movie14":{"name": "Call Me By Your Name","mood":"sad","time":"reallyLong", "img": "https://tinyurl.com/yy6sg4yy"},
  "movie15":{"name": "The Perks of Being a Wallflower","mood":"sad","time":"reallyLong", "img": "https://upload.wikimedia.org/wikipedia/en/0/0b/The_Perks_of_Being_a_Wallflower_Poster.jpg"},
//neutral movies
  "movie16":{"name": "Forrest Gump","mood":"neutral","time":"reallyLong","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWVBRRDLuGzxLxRj3-U4e0EXHF_gGYQRNO_2PWjuQ8EptA9kK5YURh3GeZgNnOIaaUlY--"},
  "movie17":{"name": "Spiderman","mood":"neutral","time":"reallyLong","img":"https://images2.static-bluray.com/movies/covers/246790_front.jpg?t=1562084830"},
  "movie18":{"name": "The Maze Runner","mood":"neutral","time":"reallyLong","img":"https://is3-ssl.mzstatic.com/image/thumb/Video128/v4/c7/f7/bf/c7f7bfea-ff3d-b20a-d82e-45609581ebc8/contsched.ymtisazx.lsr/268x0w.jpg"},
  "movie19":{"name": "Divergent","mood":"neutral","time":"reallyLong","img":"https://images-na.ssl-images-amazon.com/images/I/71oka2eUBvL._SY679_.jpg"},
  "movie20":{"name": "Aladdin","mood":"neutral","time":"reallyLong","img":"https://images-na.ssl-images-amazon.com/images/I/81lj8TI3e1L._RI_.jpg"},
// relaxing movies
  "movie12":{"name": "The Fault In Our Stars","mood":"sad","time":"reallyLong", "img": "https://tinyurl.com/y25ev66p"},
  "movie12":{"name": "Spirited Away","mood":"sad","time":"reallyLong", "img": "https://images-na.ssl-images-amazon.com/images/I/515A2S89QHL._SY445_.jpg"},
  "movie12":{"name": "Five Feet Apart","mood":"sad","time":"reallyLong", "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS39ElMtFTGtcnIZI608fgnUEUii-cPtzla2DzrHmeia7PAHZM99A"},
  "movie12":{"name": "The Sun is Also a Star","mood":"sad","time":"reallyLong", "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc41-PxqcoRtr6P33pI7xoMS4d-F3mF8JDWeNVIaLCUT8hg5Px"},
  "movie12":{"name": "The Hate U Give","mood":"sad","time":"reallyLong", "img": "https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/The_Hate_U_Give_poster.png/220px-The_Hate_U_Give_poster.png"},
//neutral tv
  "tv1":{"name": "Stranger Things","mood":"neutral","time":"long", "img":"https://pbs.twimg.com/profile_images/1146451878093320194/ml2JBEDH.jpg"},
  "tv2":{"name": "Riverdale","mood":"neutral","time":"long", "img":"https://tinyurl.com/y56c825j"},
  "tv3":{"name": "The Chilling Adventures of Sabrina","mood":"neutral","time":"long", "img":"http://www.gstatic.com/tv/thumb/tvbanners/16309356/p16309356_b_v8_ac.jpg"},
  "tv4":{"name": "Black Mirror","mood":"neutral","time":"long", "img":"https://tinyurl.com/y58cze4s"},
  "tv5":{"name": "The 100","mood":"neutral","time":"long", "img":"https://tinyurl.com/y4ox5cln"},
// happy tv
  "tv6":{"name": "Brooklyn Nine Nine","mood":"happy","time":"long", "img":"https://www.dailymotion.com/thumbnail/video/x6zji2v"},
  "tv7":{"name": "Bob's Burgers","mood":"happy","time":"long", "img":"https://tinyurl.com/y6xq6uz3"},
  "tv8":{"name": "Parks and Rec","mood":"happy","time":"long", "img":"https://tinyurl.com/y4v5trn2"},
  "tv9":{"name": "The Good Place","mood":"happy","time":"long", "img":"https://tinyurl.com/yyectcyk"},
  "tv10":{"name": "The Office","mood":"happy","time":"long", "img":"https://tinyurl.com/yy6ch3xz "},
  // sad tv
 "tv11":{"name": "A Series of Unfortunate Events","mood":"sad","time":"long", "img":"https://i.ytimg.com/vi/V0DNuz3rt7g/maxresdefault.jpg "},
 "tv12":{"name": "The Fosters","mood":"sad","time":"long", "img":"https://i0.wp.com/www.respectability.org/wp-content/uploads/2018/01/The-Fosters.jpg?fit=1080%2C694&ssl=1 "},
 "tv13":{"name": "Euphoria","mood":"sad","time":"long", "img":"https://tinyurl.com/y2fw8ocs "},
 "tv14":{"name": "Grey's Anatomy","mood":"sad","time":"long", "img":"https://tinyurl.com/y5nc4vwe "},
 "tv15":{"name": "Big Little Lies","mood":"sad","time":"long", "img":"https://tinyurl.com/y4g8h822 "},
 // relax tv
 "tv15":{"name": "Brooklyn Nine Nine","mood":"sad","time":"long", "img":"https://www.dailymotion.com/thumbnail/video/x6zji2v "},
 "tv15":{"name": "Good Trouble","mood":"sad","time":"long", "img":"https://tinyurl.com/y2m8cnvn"},
 "tv15":{"name": "Parks and Rec","mood":"sad","time":"long", "img":"https://tinyurl.com/y4v5trn2 "},
 "tv15":{"name": "The Fosters","mood":"sad","time":"long", "img":"https://i0.wp.com/www.respectability.org/wp-content/uploads/2018/01/The-Fosters.jpg?fit=1080%2C694&ssl=1 "},
 "tv15":{"name": "Bob's Burgers","mood":"sad","time":"long", "img":"https://tinyurl.com/y6xq6uz3 "},
// happy yt
 "yt1":{"name": "PewDiePie","mood":"happy","time":"short", "img":"https://images.wetheunicorns.com/images/58201?crop=16_9&width=660&relax=1&signature=aulN49km9_S3P9NAauqTXBICIrU="},
 "yt2":{"name": "MatPat and Steph","mood":"happy","time":"short", "img":"https://s3-prod.adage.com/s3fs-public/styles/width_1024/public/Matthew_pointing_at_Stephanie.jpg "},
 "yt3":{"name": "Dan and Phil","mood":"happy","time":"short", "img":"https://i3.wp.com/2ctptqj9vf3lafyt2rkh1qto-wpengine.netdna-ssl.com/wp-content/uploads/2017/11/danphil.jpg"},
 "yt4":{"name": "The Try Guys","mood":"happy","time":"short", "img":"https://s2.dmcdn.net/v/OZp4j1TAkZN6Ls-Mj/x720"},
 "yt5":{"name": "David Dobrik","mood":"happy","time":"short", "img":"https://i.pinimg.com/236x/f8/50/36/f850367a28437485b80530954aa552fb.jpg"},
 "yt6":{"name": "Jenna Marbles","mood":"happy","time":"short", "img":"https://tse3.mm.bing.net/th?id=OIP.ACQArTBWi71TZzHcPd5tjgHaE7&pid=Api&P=0&w=300&h=300"},
 "yt7":{"name": "Ryan Higa","mood":"happy","time":"short", "img":"https://lh3.googleusercontent.com/5AmJ_fC885fvxcA67l4RvgPgFoXeabD5NseRqdIOv7VPHH7yU4CxL04RXr65Vt-RYH3oYw=s151"},
 "yt8":{"name": "Shane Dawson","mood":"happy","time":"short", "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7P-JJBgNFDI8hejoc8IP37Pkb8kH2dtP3XNN7917Ei7SB0y6v"},
// neutral yt
 "yt9":{"name": "Daniel Howell","mood":"neutral","time":"short", "img":"https://i.pinimg.com/345x/6a/78/ea/6a78eab1fdd95c44f3dbf794f1084f6a.jpg"},
 "yt10":{"name": "jacksfilms","mood":"neutral","time":"short", "img":"https://66.media.tumblr.com/8422fcddd2cf27e8f3c56b76a9fa6458/tumblr_ook8mk2beH1wnos37o1_250.png"},
 "yt11":{"name": "Amazingphil","mood":"neutral","time":"short", "img":"https://i.pinimg.com/236x/5e/d8/e9/5ed8e90ec18f45732d3a24699510e153.jpg"},
 "yt12":{"name": "bestdressed","mood":"neutral","time":"short", "img":"https://i.pinimg.com/236x/c2/4e/7a/c24e7a34f21da053a23df74e27a9837a.jpg"},
 "yt13":{"name": "Paint","mood":"neutral","time":"short", "img":"https://i.pinimg.com/236x/60/58/1f/60581fc0d38a30cc8e5504f9098a2519.jpg"},
 "yt14":{"name": "Connor Franta","mood":"neutral","time":"short", "img":"https://lh3.googleusercontent.com/iNavWE8_J4Hy2TIUvtYO-tpTl0E_Utsi7w7t__YItkdjoVcy7AoLe7U0JXA_bpDxMpMP=s149"},
 "yt15":{"name": "sWooZie","mood":"neutral","time":"short", "img":"https://pbs.twimg.com/profile_images/707636687963299840/KH1_7rqw_400x400.jpg"},
 // sad short content yt???
 "yt15":{"name": "jacksfilms","mood":"neutral","time":"short", "img":"https://66.media.tumblr.com/8422fcddd2cf27e8f3c56b76a9fa6458/tumblr_ook8mk2beH1wnos37o1_250.png"},
 "yt15":{"name": "Connor Franta","mood":"neutral","time":"short", "img":"https://lh3.googleusercontent.com/iNavWE8_J4Hy2TIUvtYO-tpTl0E_Utsi7w7t__YItkdjoVcy7AoLe7U0JXA_bpDxMpMP=s149"},
 "yt15":{"name": "Dodie Clark","mood":"neutral","time":"short", "img":"https://www.stanforddaily.com//wp-content/uploads/2017/02/dodie-600x400.jpg "},
 "yt15":{"name": "Dand and Phil","mood":"neutral","time":"short", "img":"https://i3.wp.com/2ctptqj9vf3lafyt2rkh1qto-wpengine.netdna-ssl.com/wp-content/uploads/2017/11/danphil.jpg"},
 "yt15":{"name": "sWooZie","mood":"neutral","time":"short", "img":"https://pbs.twimg.com/profile_images/707636687963299840/KH1_7rqw_400x400.jpg"},
 // relax yt
 "yt16":{"name": "Dodie Clark","mood":"happy","time":"short", "img":"https://www.stanforddaily.com//wp-content/uploads/2017/02/dodie-600x400.jpg "},
 "yt17":{"name": "Dan and Phil","mood":"happy","time":"short", "img":"https://i3.wp.com/2ctptqj9vf3lafyt2rkh1qto-wpengine.netdna-ssl.com/wp-content/uploads/2017/11/danphil.jpg "},
 "yt18":{"name": "Jenna Marbles","mood":"happy","time":"short", "img":"https://tse3.mm.bing.net/th?id=OIP.ACQArTBWi71TZzHcPd5tjgHaE7&pid=Api&P=0&w=300&h=300 "},
 "yt19":{"name": "bestdressed","mood":"happy","time":"short", "img":"https://i.pinimg.com/236x/c2/4e/7a/c24e7a34f21da053a23df74e27a9837a.jpg "},
 "yt20":{"name": "Arden Rose","mood":"happy","time":"short", "img":"https://i.pinimg.com/originals/e5/a9/71/e5a9719f4dd3713faf32ed4fcda92495.png "},

};

var namesOfWatch = [];

for (var movieIndex in watch){
var information = watch[movieIndex];
  var mood= information["mood"];
  var time= information["time"];
  var name= information["name"];
  var img= information["img"];
  if (mood == getUrlParameter('mood') && time == getUrlParameter('time')) {
      namesOfWatch.push(name);
      console.log(name)
  }
  else {
          continue;
  }
}

console.log(namesOfWatch)


var randomWatch = randWatchGen();
document.getElementById('watchGenerated').innerHTML = randomWatch;

for (var movieIndex in watch){
  var information = watch[movieIndex];
  var img= information["img"];
  var time= information["time"];
  var name= information["name"];
  if(name == randomWatch){
      document.getElementById('watchGeneratedImg').src = img;
    }
  else {
    continue;
  }
}


//console.log(namesOfWatch);

function randWatchGen() {
  var randomWatch = namesOfWatch[Math.floor(Math.random() * namesOfWatch.length)];
  return randomWatch
}



//listenGenerator-----------------------------------------------------------------------

var playlists = {
    "play1":{"link": "https://open.spotify.com/embed/playlist/4ktghrgsXqaMyHlqxh6ih2", "mood":"happy"},
    "play2":{"link": "https://open.spotify.com/embed/playlist/4KmToZbzAATvoQkCF56h49", "mood":"happy"},
    "play3":{"link": "https://open.spotify.com/embed/playlist/6cLYH03TMpsNl5YFHkyOaW", "mood":"happy"},
    "play4":{"link": "https://open.spotify.com/embed/playlist/7lRYoRvh8v4ufBgZLWLuVj", "mood":"sad"},
    "play5":{"link":  "https://open.spotify.com/embed/playlist/3Wf5FOudh7Cg2J1OKhh8sX","mood":"sad"},
    "play6":{"link":  "https://open.spotify.com/embed/playlist/7wl5iyBROAykCbeH2GVGkd","mood":"sad"},
    "play7":{"link":  "https://open.spotify.com/embed/playlist/16cK4u91PooSaCIJyMuhla","mood":"neutral"},
    "play8":{"link":  "https://open.spotify.com/embed/playlist/0NKordqAt9QhFGEKXWZCs4","mood":"neutral"},
    "play9":{"link":  "https://open.spotify.com/embed/playlist/00P08gza3qz0UEi4abujWS","mood":"neutral"},
    "play10":{"link":  "https://open.spotify.com/embed/playlist/5woS8Qgc2HI82k0BDMbmst","mood":"relax"},
    "play11":{"link":  "https://open.spotify.com/embed/playlist/3BfEyKIeTR6foDeVUeNMnn","mood":"relax"},
    "play12":{"link":  "https://open.spotify.com/embed/playlist/4zEgIh2VzTw3eMdh9whA5M","mood":"relax"},
};



var namesOfListen = [];

for (var playlistIndex in playlists){
  var listening = playlists[playlistIndex];
  var mood = listening["mood"];
  var link = listening["link"];
  if (mood == getUrlParameter('mood')) {
    namesOfListen.push(link);
    randomListen = randListenGen();
    document.getElementById('listenGenerated').src= randomListen;
  }
}
//console.log(namesOfListen)

function randListenGen() {
  var randomListen = namesOfListen[Math.floor(Math.random() * namesOfListen.length)];
  return randomListen;
}
