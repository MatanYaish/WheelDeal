let btns = document.querySelectorAll('.select');
let rows = document.querySelectorAll('.rows');

let orderTable = document.querySelector('.order-table');

let sum = 0;

btns.forEach(function (button, index) {
  button.addEventListener('click', function () {
    if (button.innerHTML == 'Select') {
      button.innerHTML = 'Unselect';
      rows[index].classList.add('table-success');
    } else {
      button.innerHTML = 'Select';
      rows[index].classList.remove('table-success');
    }
  });
});

document.querySelector('.order').addEventListener('click', function () {
  let selectedRows = document.querySelectorAll('.table-success');
  if (selectedRows.length > 0) {
    orderTable.classList.remove('not-display-element');
    for (let i = 0; i < selectedRows.length; i++) {
      var carRow = document.createElement('tr');
      var carNumber = document.createElement('td');
      var carName = document.createElement('td');
      var carPrice = document.createElement('td');

      carNumber.innerHTML =
        selectedRows[i].querySelector('.numOfRow').innerHTML;
      carName.innerHTML = selectedRows[i].querySelector('.name').innerHTML;

      let price = selectedRows[i].querySelector('.price').innerHTML;
      carPrice.innerHTML = price;

      price = price.replace(',', '');
      price = price.replace('$', '');
      sum += Number(price);

      carRow.appendChild(carNumber);
      carRow.appendChild(carName);
      carRow.appendChild(carPrice);

      orderTable.appendChild(carRow);
    }
    document.querySelector('.label').classList.remove('not-display-element');
    document.querySelector('#sum').innerHTML = sum;
  }
});
