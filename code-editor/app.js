let htmlInput = document.querySelector(".html-input");
let cssInput = document.querySelector(".css-input");
let jsInput = document.querySelector(".js-input");
let save = document.querySelector("#save");
let outputContainer = document.querySelector(".output-container");
let output = document.querySelector("#output");
let full = document.querySelector("#full");
let copy = document.querySelectorAll(".copy");
let clear=document.querySelector(".clear-all");

// 🔄 Load saved code on page load
window.addEventListener("DOMContentLoaded", () => {
    htmlInput.value = localStorage.getItem("htmlCode") || "";
    cssInput.value = localStorage.getItem("cssCode") || "";
    jsInput.value = localStorage.getItem("jsCode") || "";

    // Show the saved content in the preview
    output.contentDocument.body.innerHTML = htmlInput.value;
    output.contentDocument.head.innerHTML = `<style>${cssInput.value}</style>`;
    output.contentWindow.eval(jsInput.value);
});

// 💾 Save + Preview on Save click
save.addEventListener("click", () => {
    // Save to localStorage
    localStorage.setItem("htmlCode", htmlInput.value);
    localStorage.setItem("cssCode", cssInput.value);
    localStorage.setItem("jsCode", jsInput.value);

    // Update the iframe preview
    output.contentDocument.body.innerHTML = htmlInput.value;
    output.contentDocument.head.innerHTML = `<style>${cssInput.value}</style>`;
    output.contentWindow.eval(jsInput.value);
});

// 🔁 Toggle fullscreen output
full.addEventListener("click", () => {
    outputContainer.classList.toggle("output-full-active");
    full.style.transform = outputContainer.classList.contains("output-full-active")
        ? "rotate(180deg)"
        : "rotate(0deg)";
});

// 📋 Copy buttons
copy.forEach((e) => {
    e.addEventListener("click", () => {
        if (e.classList.contains("copy1")) {
            navigator.clipboard.writeText(htmlInput.value);
        } else if (e.classList.contains("copy2")) {
            navigator.clipboard.writeText(cssInput.value);
        } else {
            navigator.clipboard.writeText(jsInput.value);
        }
    });
});

clear.addEventListener("click",()=>{
    htmlInput.value="";
    cssInput.value="";
    jsInput.value="";
    

});
