document.addEventListener("click", (e) => {
  let id = "a";
  const firstElement = document.getElementById(id);
  const secondElement = document.getElementById("b");

  if (firstElement) {
    id = "b";
  }

  if (secondElement) {
    id = "a";
    document.body.removeChild(secondElement);
    document.body.removeChild(firstElement);
  }

  let x = e.clientX;
  let y = e.clientY;
  const newElement = document.createElement("div");
  newElement.id = id;
  const dia = Math.random() * 300 + 10;
  newElement.style.position = "absolute";
  newElement.style.left = x - dia / 2 + "px";
  newElement.style.top = y - dia / 2 + "px";
  newElement.style.width = dia + "px";
  newElement.style.height = dia + "px";
  newElement.style.borderRadius = "50%";
  newElement.style.border = "1px solid red";
  document.body.appendChild(newElement);
  console.log({ e });

  if (firstElement) {
    console.log({ firstElement });

    let x1 =
      firstElement.getBoundingClientRect().left +
      firstElement.getBoundingClientRect().width / 2;
    let y1 =
      firstElement.getBoundingClientRect().top +
      firstElement.getBoundingClientRect().height / 2;

    let x2 = x;
    let y2 = y;

    const radius1 = firstElement.getBoundingClientRect().width / 2;
    const radius2 = dia / 2;

    // Calculate the distance between the two centers
    let distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

    // Check if the two circles intersect
    if (distance < radius1 + radius2) {
      console.log("Intersection detected between circles!");

      // Check if one circle is completely inside the other
      if (distance + radius2 < radius1 || distance + radius1 < radius2) {
        console.log("One circle is completely inside the other.");
      } else {
        console.log(
          "Circles intersect but are not completely inside each other."
        );
      }
    }

    console.log({ x1, y1, x2, y2 });
  }
});
