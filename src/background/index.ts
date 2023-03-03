import "./messages-events";

const injectTestportalScript = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const [currTab] = tabs;

    if (currTab?.id && currTab.url?.startsWith("https://www.testportal")) {
      chrome.scripting.executeScript({
        target: {
          tabId: currTab.id,
        },
        world: "MAIN",
        files: ["src/inject/testportal.js"],
      });
    }
  });
};

chrome.tabs.onHighlighted.addListener(() => injectTestportalScript());

chrome.tabs.onUpdated.addListener(() => injectTestportalScript());
