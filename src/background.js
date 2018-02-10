const Background = {
  openNewTab() {
    chrome.browserAction.onClicked.addListener(function(newUrl) {
      chrome.tabs.create({ url: newURL });
    });
  }
};

export default Background;

console.log("here");
