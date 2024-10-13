function itchio() {
  window.location.href = "https://blooshed-developer.itch.io/";
}
function github() {
  window.location.href = "https://github.com/BlooshedDev";
}
setInterval(function () {}, 10);

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  let height = window.innerHeight;
  let scrollPercent = Math.round((scroll / height) * 365);
  console.log(scroll, height, scrollPercent);

  const logo = document.querySelector(".logo");
  logo.style.transform = `rotate(${scrollPercent}deg)`;
});

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  if (sidebar.style.display == "none") {
    sidebar.style.display = "flex";
  } else {
    sidebar.style.display = "none";
  }
}
