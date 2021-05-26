const messages = [
    "JP",
    "Dome",
    "Agustin",
    "Vicky",
    "Flor",
    "Lily",
    "Lucas"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = {randomMsg};