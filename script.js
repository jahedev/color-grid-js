let table = document.getElementsByTagName("table")[0];
let columns = document.getElementsByClassName("row")[0].childElementCount;

cell = () => {
  let myCell = document.createElement("td");
  myCell.classList.add("cell");
  // myCell.addEventListener("click", colorChange(myCell));
  myCell.innerHTML = "&nbsp;";

  return myCell;
};

addRow = () => {
  let row = document.createElement("tr");
  row.classList.add("row");
  table.appendChild(row);

  if (table.childElementCount == 0) row.appendChild(cell());
  else {
    for (let i = 0; i < columns; i++) {
      row.appendChild(cell());
    }
  }
};

addColumn = () => {
  let rows = document.getElementsByClassName("row");
  if (rows.length == 0) {
    let row = document.createElement("tr");
    row.classList.add("row");
    table.appendChild(row);
    row.appendChild(cell());
    columns++;
  } else {
    for (let i = 0; i < rows.length; i++) {
      rows[i].appendChild(cell());
    }
  }
  columns++;
};

removeRow = () => {
  if (table.childElementCount > 0) table.removeChild(table.lastChild);
};

removeColumn = () => {
  if (table.childElementCount > 0) {
    let rows = document.getElementsByClassName("row");
    for (let i = 0; i < rows.length; i++) {
      rows[i].removeChild(rows[i].lastChild);
    }
    columns--;
  }
};

// colorChange = (x) => {
//   let color = document.getElementsByTagName("select")[0].value.toString();
//   x.style.backgroundColor = color;
// };

restoreColor = () => {
  let elements = document.getElementsByTagName("td");
  for (let i = 0; i < elements.length; i++)
    elements[i].style = "background-color:  #262d37";
};

fillAllCells = () => {
  let color = document.getElementsByTagName("select")[0].value.toString();
  let elements1 = document.getElementsByTagName("td");
  for (let i = 0; i < elements1.length; i++)
    elements1[i].style.backgroundColor = color;
};

// let table = document.getElementsByTagName("table")[0];

// document
//   .getElementsByTagName("button")[5]
//   .addEventListener("click", function (event) {
//     let row = document.createElement("tr");
//     table.appendChild(row);

//     let mycell = document.createElement("td");
//     row.appendChild(mycell);
//   });

// document
//   .getElementsByTagName("button")[0]
//   .addEventListener("click", function (event) {
//     let rows = Array.from(document.getElementsByTagName("tr"));
//     rows.forEach((x) => {
//       let row = document.createElement("td");
//       x.appendChild(row);
//     });
//   });

//eventListener for all cells not working for some reason
document.querySelectorAll("td").forEach((item) => {
  item.addEventListener("click", function (event) {
    item.style.backgroundColor = document
      .getElementsByTagName("select")[0]
      .value.toString();
  });
});

// document
//   .getElementById("firstCell")
//   .addEventListener("click", function (event) {
//     firstCell.style = "background-color: white";
//   });
