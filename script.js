let x = 0;
let y = 0;
document.addEventListener("mouseup", (e) => {
  const str = document.getSelection().toString();
  if (str.length > 0) {
    // console.log("x:", e.offsetX);
    // console.log("y:", e.offsetY);
    const text = document.getSelection();
    console.log(text.toString());
    const newHtml = text.extentNode.parentElement.innerHTML.replace(
      /Lorem ipsum/,
      "unko"
    );
    const el = text.extentNode.parentElement.innerHTML;
    el.innerHTML = newHtml;
  }
});
