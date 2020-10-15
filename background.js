
chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.getSelected(null, function (tab) {
        let url = tab.url;
        if (url.includes('twitter.com/search?q=%23')) {

            url = url.replace('search?q=', 'search?q=-filter%3Alinks')

            filterTheHashtag(url);
        }
    });
    const filterTheHashtag = (link) => {
        chrome.tabs.create({ 'url': link });
    }
});