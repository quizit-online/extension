const injectTestportalScript = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const [currTab] = tabs;

    if (currTab && currTab.url.startsWith("https://www.testportal")) {
      chrome.scripting.executeScript({
        target: {
          tabId: currTab.id,
        },
        world: "MAIN",
        files: ["content-scripts/testportal.js"],
      });
    }
  });
};

chrome.tabs.onHighlighted.addListener(() => {
  injectTestportalScript();
});

chrome.tabs.onUpdated.addListener(() => {
  injectTestportalScript();
});

let edpuzzleTokens = [];
chrome.webRequest.onSendHeaders.addListener(
  (data) => {
    if (!data.url) return;
    if (data.url.includes("https://edpuzzle.com/api/v3")) {
      data.requestHeaders.forEach((header) => {
        if (header.name == "authorization" || header.name == "Authorization") {
          if (!edpuzzleTokens.includes(header.value)) edpuzzleTokens.push(header.value);
        }
      });
    }
  },
  {
    urls: ["<all_urls>"],
    types: ["xmlhttprequest"],
  },
  ["requestHeaders"]
);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "token") {
    chrome.cookies.getAll(
      {
        url: "https://edpuzzle.com",
      },
      (cookie) => {
        cookie.forEach((cookie) => {
          if (cookie.name == "token") {
            if (!edpuzzleTokens.includes(cookie.value)) edpuzzleTokens = [];
            edpuzzleTokens.push(cookie.value);
            sendResponse(edpuzzleTokens);
          }
        });
      }
    );
  }
  return true;
});
