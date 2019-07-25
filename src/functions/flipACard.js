function flipACard (id) {
    let someID = "inner"+id;
    let clickedCard = document.getElementById(someID);
    if (!clickedCard.classList.contains('flip')){
        clickedCard.classList.remove("flip2");
        clickedCard.classList.add("flip");
    }
    else if (document.getElementById(someID).classList.contains('flip')){
        document.getElementById(someID).classList.add("flip2");
        document.getElementById(someID).classList.remove("flip");
    }
}


export default flipACard;