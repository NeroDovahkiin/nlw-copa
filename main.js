let delay = -0.3;

function createCard(date, day, games) {
    delay += 0.3;
    return `<div class="card" style="animation-delay:${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
    ${games}
    </ul>
</div>`
}

function createMatch(firstTeam, secondTeam, hour) {
    return `
    <li>
        <img src="./assets/flags/icon=${firstTeam}.svg" alt=${firstTeam}>
        <strong>${hour}</strong>
        <img src="./assets/flags/icon=${secondTeam}.svg" alt=${firstTeam}>
    </li>
    `
}

document.querySelector("#cards").innerHTML =
    createCard("24/10", "Martes", createMatch("albania", "brazil", "10:20") + createMatch("uruguay", "portugal", "10:20")) +
    createCard("08/11", "Lunes", createMatch("albania", "brazil", "02:30")) +
    createCard("11/09", "Sábado", createMatch("albania", "brazil", "11:42")) +    createCard("11/09", "Sábado", createMatch("albania", "brazil", "11:42"))
;