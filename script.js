/* #region: Variables */

const btn_addCol = document.querySelector('#add-col-btn');
const btn_removeCol = document.querySelector('#remove-col-btn');

const btn_findAll = document.querySelector('#findall-btn');
const btn_findColored = document.querySelector('#findcolored-btn');
const btn_clearAll = document.querySelector('#clearall-btn');

const btn_addRow = document.querySelector('#add-row-btn');
const btn_removeRow = document.querySelector('#remove-row-btn');

const btn_download = document.querySelector('#download-btn');

const colorSelector = document.getElementById('color-select');
let options = colorSelector.querySelectorAll('option');

const table = document.querySelector('table');

// var colors = [new Map();
// colors.set('Red', '#c23616');
// colors.set('Green', '16c79a');
// colors.set('Yellow', 'ffd56b');

var colors = ['#c23616', '#478e41', '#fff76a', '#6155a6', '#e05297'];

var color = colors[0]; // red

/* #endregion */

/* #region: Event Listeners */
btn_addCol.addEventListener('click', addColumn);

btn_removeCol.addEventListener('click', removeColumn);

btn_addRow.addEventListener('click', addRow);

btn_removeRow.addEventListener('click', removeRow);
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

table.addEventListener('mouseover', (e) => {
  if (e.target.tagName == 'TD') {
    const td = e.target;
    if (mouseDown && mouseOver) {
      td.style.backgroundColor = color;
    }
  }
});

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
// I think it's cool that I was able to make it
// I recursive function, but probably should pass
// on using it.
// function addRow(n = 1) {
//   if (n < 0) return;
//   if (n === 0) {
//   } else {
//     addRow(n - 1);
//     const rowHTML = generateRow(numOfCols());
//     table.innerHTML += rowHTML;
//   }
// }

function addRow() {
  const rowHTML = generateRow(numOfCols());
  table.innerHTML += rowHTML;
}

function addRows(n = 1) {
  for (; n > 0; n--) addRow();
}

function removeRow() {
  if (table.childElementCount > 1) table.lastChild.remove();
}

function removeRows(n = 1) {
  for (; n > 0 && numOfRows() > 1; n--) removeRow();
}

function addColumn() {
  const rows = table.querySelectorAll('tr');
  for (const row of rows) {
    row.innerHTML += generateCols(1);
  }
}

function addColumns(n = 1) {
  for (; n > 0; n--) addColumn();
}

function removeColumn() {
  const rows = table.querySelectorAll('tr');
  for (const row of rows) {
    const cols = row.querySelectorAll('td');
    if (cols.length > 1) cols[cols.length - 1].remove();
  }
}

function removeColumns(n = 1) {
  for (; n > 0 && numOfCols() > 1; n--) removeColumn();
}
/* #endregion */

/* #region: Testing Purposes */
(function test() {
  addRows(14);
  addColumns(14);
})();
/* #endregion*/

colorSelector.addEventListener('change', (e) => {
  if (e.target.tagName === 'SELECT') {
    changeColor(colors[colorSelector.selectedIndex]);
  }
});

function changeColor(c) {
  color = c;
  colorSelector.style.backgroundColor = color;

  let colorTranslucent = convertHex(c, 40);

  document.documentElement.style.setProperty('--td-hover', colorTranslucent);
}

// Taken From: https://gist.github.com/danieliser/b4b24c9f772066bcf0a6
function convertHex(hexCode, opacity) {
  var hex = hexCode.replace('#', '');

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  var r = parseInt(hex.substring(0, 2), 16),
    g = parseInt(hex.substring(2, 4), 16),
    b = parseInt(hex.substring(4, 6), 16);

  return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
}
