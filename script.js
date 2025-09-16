// JS para la consola animada
const consoleOutput = document.getElementById('console-output');
const names = ["xXShadowMasterXx", "BaneBot_1337", "FlyGuy420", "Hackerman_99", "NoobSlayer21", "MegaCheater_5", "LagSpikePro"];
const reasons = ["Speed Hacking", "Fly", "Teleporting", "NoClip", "Script Injection"];
const reasonEmojis = { "Speed Hacking": "⚡", "Fly": "🚀", "Teleporting": "🪄", "NoClip": "👻", "Script Injection": "💉" };

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function addConsoleLog() {
    const name = getRandomItem(names) + Math.floor(Math.random() * 1000);
    const reason = getRandomItem(reasons);
    const emoji = reasonEmojis[reason];

    const log = document.createElement('div');
    log.classList.add('console-log');
    log.innerHTML = `<span class="prefix">Chronos</span> > <span class="banned-name">${name}</span> has been banned: <span class="reason">${reason} ${emoji}</span>`;

    consoleOutput.prepend(log);

    if (consoleOutput.children.length > 20) {
        consoleOutput.removeChild(consoleOutput.lastChild);
    }
}

setInterval(addConsoleLog, 2000);

for (let i = 0; i < 5; i++) {
    addConsoleLog();
}

// JS para animar las secciones al hacer scroll
const sections = document.querySelectorAll('.section');
const observerOptions = {
    root: null,
    threshold: 0.2,
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// JS para cambiar el color del header al hacer scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});