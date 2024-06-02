const colors = [
  "aliceblue",
  "antiquewhite",
  "aqua",
  "aquamarine",
  "azure",
  "beige",
  "bisque",
  "black",
  "blanchedalmond",
  "blue",
  "blueviolet",
  "brown",
  "burlywood",
  "cadetblue",
  "chartreuse",
  "chocolate",
  "coral",
  "cornflowerblue",
  "cornsilk",
  "crimson",
  "cyan",
  "darkblue",
  "darkcyan",
  "darkgoldenrod",
  "darkgray",
  "darkgreen",
  "darkkhaki",
  "darkmagenta",
  "darkolivegreen",
  "darkorange",
  "darkorchid",
  "darkred",
  "darksalmon",
  "darkseagreen",
  "darkslateblue",
  "darkslategray",
  "darkturquoise",
  "darkviolet",
  "deeppink",
  "deepskyblue",
  "dimgray",
  "dodgerblue",
  "firebrick",
  "floralwhite",
  "forestgreen",
  "fuchsia",
  "gainsboro",
  "ghostwhite",
  "gold",
  "goldenrod",
  "gray",
  "green",
  "greenyellow",
  "honeydew",
  "hotpink",
  "indianred",
  "indigo",
  "ivory",
  "khaki",
  "lavender",
  "lavenderblush",
  "lawngreen",
  "lemonchiffon",
  "lightblue",
  "lightcoral",
  "lightcyan",
  "lightgoldenrodyellow",
  "lightgreen",
  "lightgrey",
  "lightpink",
  "lightsalmon",
  "lightseagreen",
  "lightskyblue",
  "lightslategray",
  "lightsteelblue",
  "lightyellow",
  "lime",
  "limegreen",
  "linen",
  "magenta",
  "maroon",
  "mediumaquamarine",
  "mediumblue",
  "mediumorchid",
  "mediumpurple",
  "mediumseagreen",
  "mediumslateblue",
  "mediumspringgreen",
  "mediumturquoise",
  "mediumvioletred",
  "midnightblue",
  "mintcream",
  "mistyrose",
  "moccasin",
  "navajowhite",
  "navy",
  "oldlace",
  "olivedrab",
  "orange",
  "orangered",
];
const main = document.querySelector(".main");
const colorInput = document.querySelector(".color-bar");
const colorList = document.querySelector("#color-options");

function createColors(colorsArray) {
  main.innerHTML = "";
  for (i = 0; i < colorsArray.length; i++) {
    const generateColor = document.createElement("div");
    generateColor.classList.add("color-box");
    generateColor.style.background = colorsArray[i];
    generateColor.textContent = colorsArray[i];
    if (generateColor.style.background === "black") {
      generateColor.style.color = "white";
    }

    main.appendChild(generateColor);
  }
}

function updateColorsList(filteredColors) {
  colorList.innerHTML = "";
  filteredColors.forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    colorList.appendChild(option);
  });
}

createColors(colors);

colorInput.addEventListener("input", function (event) {
  const searchText = event.target.value.toLowerCase();
  console.log(searchText);
  const filteredColors = colors.filter((color) =>
    color.toLowerCase().startsWith(searchText)
  );

  updateColorsList(filteredColors);
  createColors(filteredColors);
});
