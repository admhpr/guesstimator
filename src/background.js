function Background() {
  this.openNewTab = function(newUrl) {
    chrome.tabs.create({ url: newUrl });
  },
  this.getCookies = function(domain, name, callback) {
     chrome.cookies.getAll({ url: domain, name : name }, function(cookie) {
        let loggedIn = false;
        console.log(cookie)
        cookie.length ? loggedIn = true : loggedIn = false;

        if( callback ){
          return callback( loggedIn )
        }
      });
  }
}

export default Background;
