window.onload = () => {
  const xi = "嘻 ".repeat(1000);
  const elem = document.getElementById("content");
  (function append() {
    requestAnimationFrame(append);
    while (window.scrollY + window.innerHeight > document.body.scrollHeight - 1000)
      elem.append(xi);
  })();
};
