var quote = document.getElementById('quotes');
var generate = document.getElementById('quoteGenerator');

generate.addEventListener('click',function(){
    var num = generateNumber();
    displayQuotes(num)
})

function generateNumber() {
    return Math.floor(Math.random()*5);
}


function displayQuotes(n) {
    var generateQuote = ['"The only way to do great work is to love what you do." – Steve Jobs','"Believe you can and youre halfway there." – Theodore Roosevelt','"Dont watch the clock; do what it does. Keep going." – Sam Levenson',
        'Your limitation—its only your imagination." – Unknown','"The future belongs to those who believe in the beauty of their dreams." – Eleanor Roosevelt'
    ];
    document.getElementById('quotes').innerHTML = generateQuote[n]
    
}

