let decknum = document.getElementById('server-data');
decknum = decknum.textContent;
decknum = decknum.substring(decknum.indexOf(`"`) + 1, decknum.lastIndexOf(`"`));
sessionStorage.setItem("Deck",JSON.stringify(decknum));
console.log(`deck${decknum}`);
let selectedDeck = document.querySelector(`.deck${decknum}`);
console.log(selectedDeck);
setTimeout(()=> {
    selectedDeck.style.animation='rotateAndExpand 5s linear';
},2000)
setTimeout(() => {
    window.location.href = `/decks/${decknum}/open`
}, 7000);