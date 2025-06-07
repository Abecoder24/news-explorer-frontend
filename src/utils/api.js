const newsApiBaseUrl = import.meta.env.VITE_NODE_ENV === "production" 
  ? "https://nomoreparties.co/news/v2/everything"
  : "https://newsapi.org/v2/everything"; 

const API_KEY = import.meta.env.VITE_API_KEY || '0c4c7c1f90234c69aaa1bda42000e924'

function searchArticles(q){
    return fetch(newsApiBaseUrl + "?q=" + q + "&searchIn=title", {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        authorization: API_KEY
      }
    }).then(checkResponse).catch(console.error)
}
function getSavedArticles(){
  //later i will use Backend to Fetch the Saved articles of Loggedin users
  return Promise.resolve([
        {
            "author": "Amanda Schupak, CNN",
            "title": "What’s so special about orange cats? Turns out they’re freaks of nature",
            "description": "Researchers identified an unusual genetic mutation in orange domestic cats that has not been found in any other animal, according to a new study.",
            "url": "https://www.cnn.com/2025/05/23/science/orange-cats-genetic-mutation",
            "urlToImage": "https://media.zenfs.com/en/cnn_articles_875/78872192ef3ad6dcd41810c3170110f9",
            "publishedAt": "2025-05-23T18:59:54Z",
            "keyword": "Nature"
        },
        {
            "author": "staff@slashfilm.com (Jeremy Smith)",
            "title": "Harrison Ford Addresses His Yellowstone Future After 1923",
            "description": "With the future of the Yellowstone franchise somewhat cloudy right now, Harrison Ford has discussed his potential return as 1923 protagonist Jacob Dutton.",
            "url": "https://www.slashfilm.com/1853139/harrison-ford-1923-yellowstone-future/",
            "urlToImage": "https://www.slashfilm.com/img/gallery/harrison-ford-addresses-his-yellowstone-future-after-1923/l-intro-1746551762.jpg",
            "publishedAt": "2025-05-06T17:30:00Z",
            "keyword": "Yellowstone"
        },
        {
            "author": "Laura Baisas",
            "title": "Your cat probably knows your smell",
            "description": "Domestic cats react differently to their owner’s natural odor versus a stranger's.\nThe post Your cat probably knows your smell appeared first on Popular Science.",
            "url": "https://www.popsci.com/environment/cat-knows-your-smell/",
            "urlToImage": "https://www.popsci.com/wp-content/uploads/2025/05/cat-wide-eyes.png?quality=85&w=2000",
            "publishedAt": "2025-05-28T18:00:00Z",
            "keyword": "Cat"
        },
        {
            "author": "Laurent Shinar, Laurent Shinar",
            "title": "Now That’s What I Call Cat: 25 Quintessential Cat Memes",
            "description": "Remember how we grew up with compilation CDs that informed us as to what was called music during a particular year? Well, today we have gathered a compilation of cat children that is so timeless, so beyond the need for being boxed in by fashion that it will n…",
            "url": "https://cheezburger.com/40370693/now-thats-what-i-call-cat-25-quintessential-cat-memes",
            "urlToImage": "https://i.chzbgr.com/original/40370693/h9C5B711C/my-cat-walking-away-from-his-litter-box-after-dropping-the-foulest-ive-ever-smelled-catsdoingthings",
            "publishedAt": "2025-05-02T17:00:00Z",
            "keyword": "Cat"
        },
        {
            "author": "Samantha Grindell Pettyjohn,Amanda Krause,Anneta Konstantinides,Gabbi Shaw",
            "title": "The best-dressed celebrities at the 2025 Met Gala",
            "description": "Teyana Taylor and Colman Domingo were among the best-dressed celebrities at the 2025 Met Gala, embracing the theme \"Superfine: Tailoring Black Style.\"",
            "url": "https://www.businessinsider.com/best-dressed-met-gala-celebrities-looks-2025-5",
            "urlToImage": "https://i.insider.com/68192f86a466d2b74ab51715?width=1200&format=jpeg",
            "publishedAt": "2025-05-05T22:03:22Z",
            "keyword": "Celebrities"
        }
    ])
}
function checkResponse(res) {
    if (res.ok) {
        let jsonParsable = res.headers.get('Content-Type', '').includes('application/json')
        if (jsonParsable) {
            return res.json()
        } else {
            return res
        }
    } else {
        return res.json().then(theRes => Promise.reject(theRes))
    }
}

export { searchArticles, getSavedArticles }