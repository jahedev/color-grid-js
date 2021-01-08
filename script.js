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
addRow.addEventListener('click', (e) => {
  const rows = numOfRows();
  const cols = numOfCols();
  const rowHTML = generateRow(cols);
  table.innerHTML += rowHTML;
});

removeRow.addEventListener('click', (e) => {
  if (table.childElementCount > 1) table.lastChild.remove();
});

table.addEventListener('mousedown', (e) => {
  if (e.target.tagName == 'TD') {
    const td = e.target;
    td.style.backgroundColor = color;
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
  const cols = '<td>&nbsp</td>'.repeat(colNum);
  return `<tr>${cols}</tr>`;
}
/* #endregion */
