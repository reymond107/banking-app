const send = document.getElementById('Send');
const deposit = document.getElementById('Deposit');
const request = document.getElementById('Request');
const withdraw = document.getElementById('Withdraw');
let currentBalance = document.getElementById('balance');
let transactionType = document.getElementById("transaction_type");
let transactionAmount = document.getElementById("transaction_amount");

let transType = '';
let transAmount = '';

deposit.addEventListener('click', function dep() {

    let depAmount = prompt('how much do you want to deposit?');
    currentBalance.innerHTML = parseFloat(currentBalance.innerHTML) + parseFloat(depAmount);

    transType = "Deposit";
    transAmount = parseFloat(depAmount);
    addTransToList();

})

withdraw.addEventListener('click', function wit() {

    let witAmount = prompt('how much do you want to withdraw?');


    if (parseFloat(witAmount) > parseFloat(currentBalance.innerHTML)) {
        alert('Amout exceded the current balance');
        currentBalance.innerHTML = parseFloat(currentBalance.innerHTML);
    } else {
        currentBalance.innerHTML = parseFloat(currentBalance.innerHTML) - parseFloat(witAmount);
    }

    transType = "Withdrawal";
    transAmount = parseFloat(witAmount);
    addTransToList();

    // console.log(transactionAmount.innerHTML);
})

send.addEventListener('click', function send() {

    let sendAmount = prompt('how much do you want to send?');
    currentBalance.innerHTML = parseFloat(currentBalance.innerHTML) - parseFloat(sendAmount);

    transType = "Send";
    transAmount = parseFloat(sendAmount);
    addTransToList();
    // console.log(transactionAmount.innerHTML);
})

request.addEventListener('click', function req() {
    let reqAmount = prompt('how much do you want to request?');
    currentBalance.innerHTML = parseFloat(currentBalance.innerHTML) - parseFloat(reqAmount);

    transType = "Request";
    transAmount = parseFloat(reqAmount);
    addTransToList();
})

function addTransToList() {
    const list = document.querySelector('.trans-list');
    const row = document.createElement('tr');
    let d = new Date();

    // row.innerHTML = `
    //   <td>${transactionType.innerHTML}</td>
    //   <td>${transactionAmount.innerHTML}</td>
    // `;
    row.innerHTML = `
      <td>${transType}</td>
      <td>${transAmount}</td>
      <td>${d.getMonth()}/${d.getDate()}/${d.getFullYear()}  ${d.getHours()}:${d.getMinutes()}  </td>
    `;
    console.log(row);
    console.log(row.innerHTML);

    list.prepend(row);
    // list.innerHTML += row;
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}