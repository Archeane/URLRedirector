
const encodeHTML = function (str) {
    return str.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
};

// suggest results from the existing shortcuts
chrome.omnibox.onInputChanged.addListener(function (text, suggest) {
    chrome.storage.sync.get(["shortcuts"], function (result) {
        const shortcuts = result.shortcuts || [];
        const regex = new RegExp(text, "i");
        let matches = shortcuts.filter(obj => regex.test(obj.keyword));
        if (matches && matches.length > 0) {
            matches = matches.slice(0, 5);

            const out = [];

            matches.forEach(function (res) {
                out.push({
                    content: res.keyword,
                    description: `${res.keyword} - ${encodeHTML(res.url)}`
                });
            });
            suggest(out);
        } else {
            suggest([]);
        }
    });
});

// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener(function (text) {
    if (text && text.trim()) {
        chrome.storage.sync.get(["shortcuts"], function (result) {
            const shortcuts = result.shortcuts || [];
            const shortcut = shortcuts.find(obj => obj.keyword === text.trim());
            if (shortcut) {
                const newURL = shortcut.url;
                chrome.tabs.update(null, { url: newURL });
            }
        });
    }
});
