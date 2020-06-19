
function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
   }

async function handleButtonPress() {
    chrome.tabs.executeScript({file:"inject.js"})
}

let button = document.getElementById('button');

button.onclick = handleButtonPress
