function Background() {
  
  this.storage = window.localStorage,

  this.openNewTab = function(newUrl) {
    chrome.tabs.create({ url: newUrl });
  },

  this.getCookies = function(domain, callback) {
     chrome.cookies.getAll({ url: domain }, function(cookie) {
       if (callback) {
         callback(cookie);
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
