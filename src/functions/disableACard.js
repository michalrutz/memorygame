export function disableACard(id) {
    let someID = "inner"+id;
    let chosenCard = document.getElementById(someID);
    chosenCard.classList.add("disabled-card");
}

export function activateACard(id) {
    let someID = "inner"+id;
    let chosenCard = document.getElementById(someID);
    chosenCard.classList.remove("disabled-card");
}