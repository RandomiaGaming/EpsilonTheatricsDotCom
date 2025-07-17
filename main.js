let header = document.querySelector("header");
let headerSpacer = document.querySelector(".header-spacer");

let observer = new ResizeObserver(entries => {
    for (let entry of entries) {
        if (entry.target === header) {
            headerSpacer.style.height = `${header.clientHeight}px`;
        }
    }
});
observer.observe(header);