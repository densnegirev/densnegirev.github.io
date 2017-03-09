function checkWords() {
    var firstWord = prompt("Enter first word")
    var secondWord = prompt("Enter secong word")

    var sortedFirstWordLetters = firstWord.split("").sort().join("")
    var sortedSecondWordLetters = secondWord.split("").sort().join("")

    if (sortedFirstWordLetters === sortedSecondWordLetters) {
        alert("Yes")
    } else {
        alert("No")
    }
}
        
function writeNumbersToLog() {
    for (var i = 0; i < 10; i++) {
        function logNumber() {
            var number = i
            setTimeout(function() {
                console.log(number);
            }, 1000);
        }
        
        logNumber()
    }
}

writeNumbersToLog()
