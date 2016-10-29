$('#submit').data('countdown').stop();

// Luhn validation algorithm
// credits for https://gist.github.com/ShirtlessKirk/2134376
var luhnChk = (function (arr) {
    return function (ccNum) {
        var
            len = ccNum.length,
            bit = 1,
            sum = 0,
            val;

        while (len) {
            val = parseInt(ccNum.charAt(--len), 10);
            sum += (bit ^= 1) ? arr[val] : val;
        }

        return sum && sum % 10 === 0;
    };
}([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]));


var generateMiddleNumber = function(size) {
    switch(size) {
        case 5:
            return (Math.floor(Math.random() * 99999) + 00000).toString();
        case 7:
            return (Math.floor(Math.random() * 9999999) + 0000000).toString();
        case 8:
            return (Math.floor(Math.random() * 99999999) + 00000000).toString();
    }
};

var getAnswer = function(start, end, size) {
    var isValid = false;
    while (!isValid) {
        middle = generateMiddleNumber(size);
        number = start + middle + end;
        isValid = luhnChk(number);
    };

    return middle;
}

var startVisa = document.getElementById('pvisa').innerText;
var endVisa = document.getElementById('svisa').innerText;
var inputVisa = document.getElementById('nvisa');
var sizeVisa = 5;
var answerVisa = getAnswer(startVisa, endVisa, sizeVisa);
inputVisa.value = answerVisa;

var startMasterCard = document.getElementById('pmcard').innerText;
var endMasterCard = document.getElementById('smcard').innerText;
var inputMasterCard = document.getElementById('nmcard');
var sizeMasterCard = 8;
var answerMasterCard = getAnswer(startMasterCard, endMasterCard, sizeMasterCard);
inputMasterCard.value = answerMasterCard;

var startAmex = document.getElementById('pamex').innerText;
var endAmex = document.getElementById('samex').innerText;
var inputAmex = document.getElementById('namex');
var sizeAmex = 7;
var answerAmex = getAnswer(startAmex, endAmex, sizeAmex);
inputAmex.value = answerAmex;
