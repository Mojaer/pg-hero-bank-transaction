const subBtn = document.getElementById('sub-btn');
const logIn = document.getElementById('log-in');
const transaction = document.getElementById('transaction');

subBtn.addEventListener('click', function() {
    logIn.style.display = 'none';
    transaction.style.display = 'block';
})

//  transaction calculation

const withdraw = document.getElementById('withdraw');
const deposit = document.getElementById('deposit');
const balance = document.getElementById('balance');
const depositInput = document.getElementById('depositInput');
const withdrawInput = document.getElementById('withdrawInput');
const depositBtn = document.getElementById('depositBtn');
const withdrawBtn = document.getElementById('withdrawBtn');

depositBtn.addEventListener('click', function() {
    deposit.innerText = (parseFloat(depositInput.value) || 0) + parseFloat(deposit.innerText);

    balance.innerText = parseFloat(balance.innerText) + (parseFloat(depositInput.value) || 0);
    depositInput.value = '';
})

withdrawBtn.addEventListener('click', function() {
    withdraw.innerText = (parseFloat(withdrawInput.value) || 0) + parseFloat(withdraw.innerText);

    balance.innerText = parseFloat(balance.innerText) - (parseFloat(withdrawInput.value) || 0);
    withdrawInput.value = '';
})

// final transaction
const finalDeposit = document.getElementById('finalDeposit');

const finalWithdraw = document.getElementById('finalWithdraw');

const finalBalance = document.getElementById('finalBalance');

document.getElementById('finalTransaction').addEventListener('click', function() {
    finalWithdraw.innerText = withdraw.innerText;
    finalDeposit.innerText = deposit.innerText;
    finalBalance.innerText = balance.innerText;

    transaction.style.display = 'none';
    document.getElementById('endTransaction').style.display = 'block';
})