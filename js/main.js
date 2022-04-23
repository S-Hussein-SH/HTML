const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
    item.addEventListener("click", function () {
    this.classlist.toggle("collapsible--expanded");
})
);  