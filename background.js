
chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.getSelected(null, function (tab) {
        let url = tab.url;
        if (url.includes('twitter.com/search?q=%23')) {

            url = url.replace('search?q=', 'search?q=-filter%3Alinks')

            filterTheHashtag(url, tab.id);
        }
    });
    const filterTheHashtag = (url, id) => {
        chrome.tabs.remove(id);
        chrome.tabs.create({ 'url': url });
    }
});