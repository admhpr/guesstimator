function Background(){
  this.openNewTab = function (newUrl){
      chrome.tabs.create({ url: newUrl });
  }
};

export default Background;
