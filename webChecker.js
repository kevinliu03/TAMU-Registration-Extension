chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url && tab.url.includes("https://tamu.collegescheduler.com/terms") && tab.url.includes("/courses/")) {
        const queryParameters = tab.url.split("courses/")[1];
        chrome.tabs.sendMessage(tabId, {
            type: "new",
            differentClass: queryParameters
        });
    }
});