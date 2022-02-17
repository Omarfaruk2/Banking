
function getinput(money) {
    const input = document.getElementById(money + '-input');
    const inputvalueText = input.value;
    const inputValue = parseInt(inputvalueText);
    return inputValue;
}
function getText(jan) {
    const textValue = document.getElementById(jan + '-money')
    return textValue;
}
document.getElementById('calculate-btn').addEventListener('click',
    function () {
        const income = getinput('income');
        const food = getinput('food');
        const rent = getinput('rent');
        const clothes = getinput('clothes');
        const total = food + rent + clothes;

        const hello = getText('totalExpence')
        hello.innerText = total;

        let avilableMoney = getText('avilable');
        const avilable = income - total;
        avilableMoney.innerText = avilable

    })
document.getElementById('save-btn').addEventListener('click',
    function () {
        let avilableMoney = getText('avilable');
        const saveInput = getinput('save');
        const savingAmountValue = avilableMoney.innerText * saveInput / 100;

        const savingAmount = getText('saving')
        savingAmount.innerText = savingAmountValue;

        const remainingAmount = getText('remaiening');
        remainingAmount.innerText = avilableMoney.innerText - savingAmount.innerText;

        // console.log(remainingAmount.innerText, 'hello')


    })







