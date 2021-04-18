const loanType = document.querySelector('.js-loan-type');
const loan = document.querySelector('.js-interest-loan');
const privateEquity = document.querySelector('.js-private-equity');

loanType.addEventListener('change', event => {
    const value = event.target.value;
    if (value === 'loan') {
        loan.classList.remove('hidden');
        privateEquity.classList.add('hidden');
    } else if (value === 'private-equity') {
        privateEquity.classList.remove('hidden');
        loan.classList.add('hidden');
    }
});