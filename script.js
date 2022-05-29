const thumb = document.querySelectorAll(".thumb");
const jumbo = document.querySelector(".jumbo");
const container = document.querySelector(".container");

container.addEventListener("click", function (elementos) {
    // console.log(elementos);

    if (jumbo.getAttribute("src") == elementos.target.getAttribute("src")) {
        return;
    }

    thumb.forEach(function (e) {
        e.classList.remove("active");
    });

    if (elementos.target.className == "thumb") {
        jumbo.setAttribute("src", elementos.target.getAttribute("src"));
        jumbo.classList.add("animate");
        elementos.target.classList.add("active");
    }
    setTimeout(() => {
        jumbo.classList.remove("animate");
    }, 500);

    // console.log(jumbo.className);
});
