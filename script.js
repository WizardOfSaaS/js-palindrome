const checkBtn = document.getElementById('check-btn')
const textInput = document.getElementById('text-input')
const resultText = document.getElementById('result')

function handleCheckBtnClick() {
    const textInputValue = textInput.value
    if (!textInputValue) {
        window.alert('Please input a value')
        return
    }
    let result = textInputValue
    const cleanedText = cleanText(textInputValue)
    if (checkPalindrome(cleanedText)) {
        result += ' is a palindrome'
    } else {
        result += ' is not a palindrome'
    }
    resultText.innerText = result
    textInput.value = ''
}

function cleanText(text) {
    text = text.toLowerCase()
    const validRegex = /[a-z]|[0-9]/g
    const validChars = text.match(validRegex)
    const cleanedText = validChars.join('')
    return cleanedText
}

function checkPalindrome(text) {
    const reversedText = text.split('').reverse().join('')
    return reversedText===text
}

checkBtn.addEventListener('click', handleCheckBtnClick)