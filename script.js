/* #region: Variables */

const addCol = document.querySelector('#add-col-btn');
const removeCol = document.querySelector('#remove-col-btn');

const findAll = document.querySelector('#findall-btn');
const findColored = document.querySelector('#findcolored-btn');
const clearAll = document.querySelector('#clearall-btn');

const addRow = document.querySelector('#add-row-btn');
const removeRow = document.querySelector('#remove-row-btn');

const table = document.querySelector('table');

var color = '#c23616'; // red
/* #endregion */

/* #region: Event Listeners */
addCol.addEventListener('click', (e) => {
  const rows = table.querySelectorAll('tr');
  for (const row of rows) {
    row.innerHTML += generateCols(1);
  }
});

removeCol.addEventListener('click', (e) => {
  const rows = table.querySelectorAll('tr');
  for (const row of rows) {
    const cols = row.querySelectorAll('td');
    if (cols.length > 1) cols[cols.length - 1].remove();
  }
});

addRow.addEventListener('click', (e) => {
  const rowHTML = generateRow(numOfCols());
  table.innerHTML += rowHTML;
});

removeRow.addEventListener('click', (e) => {
  if (table.childElementCount > 1) table.lastChild.remove();
});
var x = 1;
// table.addEventListener('mousedown', (e) => {
//   if (e.target.tagName == 'TD') {
//     // const td = e.target;
//     // td.style.backgroundColor = color;
//     e.target.onmousedown(function () {
//       console.log('mouse is down: ', x++);
//     });
//   }
// });

var mouseDown = false;
var mouseOver = false;

table.onmouseover = function () {
  mouseOver = true;
};

table.onmouseleave = function () {
  mouseOver = false;
};

table.onmousedown = function () {
  mouseDown = true;
};
table.onmouseup = function () {
  mouseDown = false;
};

/* #endregion */
/* #region: Function */
function numOfCols(tableEl = table.lastChild) {
  return tableEl.querySelectorAll('td').length;
}

function numOfRows(tableEl = table) {
  return tableEl.querySelectorAll('tr').length;
}
function generateRow(colNum = 1) {
  return `<tr>${generateCols(colNum)}</tr>`;
}

function generateCols(colNum = 1) {
  return '<td>&nbsp</td>'.repeat(colNum);
}
/* #endregion */
