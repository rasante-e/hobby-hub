//Create XHR Request

var toWatch = [
  {
    "name": "Unresolved",
    "type": "Podcast",
    "url": "https://unresolved.me/"
  },
  {
    "name": "Evil Genius",
    "type": "TV Series",
    "url": "https://www.netflix.com/title/80158319"
  },
  {
    "name": "Fyre Fraud",
    "type": "Documentary",
    "url": "https://www.hulu.com/movie/fyre-fraud-e47078f3-1c0e-49a8-9da9-c571a7a20fec"
  },
  {
    "name": "The Case of the Vanishing Blonde",
    "type": "Article",
    "url": "https://www.vanityfair.com/culture/2010/12/vanishing-blonde-201012"
  },
  {
    "name": "Unresolved Mysteries",
    "type": "Forum",
    "url": "https://www.reddit.com/r/UnresolvedMysteries/"
  }
]



function displayList(array) {
    var i = 0;
    var item= "";
    for (i = 0; i < array.length; i++) {
        item = array[i];
        document.getElementById("parse-test").innerHTML = array[i].name;
        /*
        console.log(array[i].name);
        */
    }
}






displayList(toWatch);
