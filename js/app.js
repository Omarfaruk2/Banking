
function getinput(money) {
    const input = document.getElementById(money + '-input');
    const inputvalueText = input.value;
    const inputValue = parseInt(inputvalueText);
    return inputValue;
}
function getText() {
    const textValue = document.getElementById('totalExpence-money')
    // const expenceValueText = textValue.innerText;
    return textValue;
}

document.getElementById('calculate-btn').addEventListener('click',
    function () {
        const income = getinput('income');
        const food = getinput('food');
        const rent = getinput('rent');
        const clothes = getinput('clothes');
        const total = food + rent + clothes;

        // const textValue = document.getElementById('totalExpence-money')
        // const expenceValueText = textValue.innerText;
        const good = getText();
        textValue.innerText = total;

        const avilableMoney = document.getElementById('avilable-money');
        const avilableMoneyValueText = avilableMoney.innerText;

        const avilable = income - total;
        avilableMoney.innerText = avilable

    })
document.getElementById('save-btn').addEventListener('click',
    function () {
        const saveInput = getinput('save');
        console.log(good);
    })







