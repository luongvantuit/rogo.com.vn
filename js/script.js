document.addEventListener("DOMContentLoaded", () => {
  const gotoTop = document.getElementById("goto__top");

  const wiLeCompact = document.getElementById("wile__compact")
  const wiLeFull = document.getElementById("wile__full")

  const showWiLeDetail = document.getElementById("extend__wile")

  window.addEventListener("scroll", () => {
    if (
      document.body.scrollTop >= 128 ||
      document.documentElement.scrollTop >= 128
    ) {
      gotoTop.classList.remove("hidden");
    } else {
      gotoTop.classList.add("hidden");
    }
  });

  gotoTop.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  showWiLeDetail.addEventListener('click', () => {
    showWiLeDetail.classList.add("hidden")
    wiLeCompact.classList.add("hidden")
    wiLeFull.classList.remove("hidden")
  })
  wiLeFull.addEventListener('click', () => {
    wiLeFull.classList.add("hidden")
    showWiLeDetail.classList.remove("hidden")
    wiLeCompact.classList.remove("hidden")
  })
});
