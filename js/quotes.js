const quotes = [
    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde"
    },
    {
        quote: "That it will never come again is what makes life so sweet.",
        author: "Emily Dickinson"
    },
    {
        quote: "It is never too late to be what you might have been.",
        author: "George Eliot"
    },
    {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "Pain is inevitable. Suffering is optional.",
        author: "Haruki Murakami"
    },
    {
        quote: "All the world's a stage, and all the men and women merely players.",
        author: "William Shakespeare"
    },
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const index = Math.floor(Math.random() * quotes.length)

quote.innerText = quotes[index].quote
author.innerText = quotes[index].author