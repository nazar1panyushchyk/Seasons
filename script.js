const input = document.querySelector('.month');

const button = document.querySelector('.button-month');

const text = document.querySelector('.show');

function handleButtonClick() {
    const year = input.value;
    console.log(year);
    switch(year) {
        case "1":
        case "2":
        case "12":
            alert('It is Winter');
        break
        case "3":
        case "4":
        case "5":
            alert('It is Spring')
        break
        case "6":
        case "7":
        case "8":
            alert('It is Summer')
        break
        case "9":
        case "10":
        case "11":
            alert('It is Autumn')
        break
    }
}

button.addEventListener('click', handleButtonClick);