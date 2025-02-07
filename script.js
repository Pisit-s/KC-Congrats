const messages = {
    "name1": "text",
    "name2": "text",
    "name3": "text",
    "name4": "text"
};

function showMessage() {
    let nameInput = document.getElementById("nameInput").value.trim();
    let modalMessage = document.getElementById("modalMessage");
    let errorMessage = document.getElementById("errorMessage");

    if (nameInput === "") {
        errorMessage.textContent = "กรอก Code ดีๆอย่าลีลา";
        return;
    }

    if (messages[nameInput]) {
        modalMessage.innerHTML = "";
        typeWriter(messages[nameInput], modalMessage);
        document.getElementById("messageModal").style.display = "block";
        errorMessage.textContent = "";
    } else {
        errorMessage.textContent = "กลับไปดู Code ใหม่";
    }
}

function typeWriter(text, element, i = 0) {
    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        setTimeout(() => typeWriter(text, element, i + 1), 50);
    }
}

function closeModal() {
    document.getElementById("messageModal").style.display = "none";
}

const targetDate = new Date(new Date().getFullYear(), 1, 18, 0, 0, 0);

function updateCountdown() {
    const now = new Date();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        document.getElementById("countdown-timer").textContent = "ถึงวันสำคัญแล้ว!";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown-timer").textContent = 
        `${days} วัน ${hours} ชม. ${minutes} นาที ${seconds} วิ`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
