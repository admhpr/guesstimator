function Background() {
  
  this.storage = window.localStorage,

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
  },

  this.getLocalStorage = function(key){
    return this.storage.getItem(key);
  },

  this.setLocalStorage = function(key,value){
    this.storage.setItem(key,value);
  },

  this.removeLocalStorage = function(key){
    this.storage.removeItem(key);
  }
}

export default Background;
