document.addEventListener("DOMContentLoaded", () => {
  const gotoTop = document.getElementById("goto__top");

  window.addEventListener("scroll", () => {
    if (
      document.body.scrollTop > 128 ||
      document.documentElement.scrollTop > 128
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
});
