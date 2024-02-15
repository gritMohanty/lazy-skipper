(async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  let result;
  try {
    [{ result }] = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        document
          .getElementsByClassName("ytp-ad-skip-button-modern ytp-button")[0]
          .click();
      },
    });
  } catch (e) {
    document.body.textContent = "Cannot access page";
    return;
  }
  // process the result
  document.body.textContent = result;
})();
