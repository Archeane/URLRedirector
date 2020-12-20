let currentUrl = null;
chrome.tabs.query({active: true, currentWindow: true},function(tabs){
    currentUrl = tabs[0].url;
    console.log(currentUrl);
    document.getElementById('url').innerHTML = currentUrl;
});

function save(){
    let group = document.getElementById('group');
    let keyword1 = document.getElementById('keyword1');
    let keyword2 = document.getElementById('keyword2');

    chrome.storage.sync.set({ shortcuts: currentUrl }, function(){
        console.log('saved');
    });
}
