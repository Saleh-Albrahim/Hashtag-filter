
chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.getSelected(null, function (tab) {
        let url = tab.url;
        if (url.includes('twitter.com/search?q=') &&
            !url.includes('-filter%3Alinks%20')){
            url = url.replace('search?q=', 'search?q=-filter%3Alinks%20')
            chrome.tabs.update(tab.id, { url });
        }
    });
});