
window.myScript = document.createElement("script");

window.myScript.innerHTML = `
    alert('This puzzle has a rating of ' + window.lichess.puzzle.data.puzzle.vote);
    `;

document.body.appendChild(window.myScript);