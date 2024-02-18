onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

new TypeIt("#text", {
  strings: ["Hi Ce I See Chat", "This Is Flower For You", "Hope You Like It"],
  speed: 50,
  waitUntilVisible: true,
}).go();
