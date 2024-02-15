(async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  let result;
  try {
    [{ result }] = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        setInterval(() => {
          const isSkipAvailable = document.getElementsByClassName(
            "ytp-ad-skip-button-modern ytp-button"
          )[0];
          if (isSkipAvailable) isSkipAvailable.click();
        }, 2000);
      },
    });
  } catch (e) {
    document.body.textContent = "Cannot access page";
    return;
  }
  // process the result
  document.body.textContent = result;
})();
