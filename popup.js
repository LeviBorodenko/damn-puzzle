
function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
   }

async function fetch_vote(url) {
    let response = await fetch(url)
    let text = await response.text()
    let index = text.search(`"vote":`)
    let vote_string = text.slice(index + 7, index + 13)

    let result = /.\d+/.exec(vote_string)
    return result[0]
}


async function handleButtonPress() {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, async tabs => {
        let url = tabs[0].url;
        // use `url` here inside the callback because it's asynchronous!
        let vote = await fetch_vote(url)
        alert(vote)
    });
}

let button = document.getElementById('button');

button.onclick = handleButtonPress
