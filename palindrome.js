let myword = prompt("Enter the word :")

function palindrome() {
    let j = myword.length - 1
    for (let i = 0; i < j / 2; i++) {
		if (myword[i] != myword[j]) {
			return "word is not palindrome!! "
		}
		j--
	}
    return "The word is palindrome!: "

}

console.log(palindrome())
