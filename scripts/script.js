//counting 

const paragraphs = document.querySelectorAll('p');
console.log('<p> count: ', paragraphs.length);

const h2Elements = document.querySelectorAll('h2');
console.log('<h2> count: ', h2Elements.length);

const bodyBgColor = window.getComputedStyle(document.body).backgroundColor;
console.log('background-color <body>: ', bodyBgColor);

const h1 = document.querySelector('h1');
if (h1) {
    const h1FontSize = window.getComputedStyle(h1).fontSize;
    console.log('font-size <h1>: ', h1FontSize);
} else {
    console.log('No <h1> on this page.');
}

//thingy with mouse on element

document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('p, h1, h2');

    elements.forEach(function (element) {
        let originalBg = ''; 

        element.addEventListener('mouseenter', function () {
            originalBg = window.getComputedStyle(element).backgroundColor;
            element.style.backgroundColor = 'red';
        });

        element.addEventListener('mouseleave', function () {
            element.style.backgroundColor = originalBg;
        });
    });
});