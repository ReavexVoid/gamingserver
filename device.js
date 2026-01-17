function setDevice(type) {
    localStorage.setItem("deviceMode", type);
    applyDevice(type);
}

function applyDevice(type) {
    document.body.classList.remove("mobile", "desktop");
    document.body.classList.add(type);
    const selector = document.getElementById("deviceSelector");
    if (selector) selector.style.display = "none";
}

window.onload = function () {
    const saved = localStorage.getItem("deviceMode");
    if (saved) {
        applyDevice(saved);
    } else if (window.innerWidth <= 768) {
        applyDevice("mobile");
    } else {
        applyDevice("desktop");
    }
};
