let table = document.getElementsByTagName("table")[0];

document
  .getElementsByTagName("button")[5]
  .addEventListener("click", function (event) {
    let row = document.createElement("tr");
    table.appendChild(row);

    let mycell = document.createElement("td");
    row.appendChild(mycell);
  });

document
  .getElementsByTagName("button")[0]
  .addEventListener("click", function (event) {
    let rows = Array.from(document.getElementsByTagName("tr"));
    rows.forEach((x) => {
      let row = document.createElement("td");
      x.appendChild(row);
    });
  });

//not working for some reason
document.querySelectorAll("td").forEach((item) => {
  item.addEventListener("click", function (event) {
    alert("hey");
  });
});
