# Tip Calculator

- Live website -(https://carlospwd-tip-calculator.netlify.app/)

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

## My process

### Screenshot

### End Result

![result](https://user-images.githubusercontent.com/85038929/128225490-bfc507c1-e1b9-4441-9b2b-52030a11f438.JPG)

### Active image

![Active1](https://user-images.githubusercontent.com/85038929/128225540-1e0e8cda-31c9-49a1-bfd4-41102cfe5dad.JPG)

![Active2](https://user-images.githubusercontent.com/85038929/128225586-6832cb57-ab94-4482-8bdd-c2ed3cdc9907.JPG)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- JavaScript
- Media Queries

### What I learned

This was an extremely fun challenge where I got to practice more javascript functions and understand how to efficiently implement it in my projects. I also used the data attribute to link my grid buttons to my script.js file. I generally reserve the class attribute for my css and my id attributes for JavaScript, however, in this case I had multiple buttons so I used the data attribute. As far as what I learned in CSS, I learned how to used the focus pseudo-class to let the user see the tip percentage they are using.

- I gave the buttons the same date-percentage attribute so that I can use the forEach method in javascript.

```HTML
<div class="btn-grid input">
  <button data-percentage>5%</button>
  <button data-percentage>10%</button>
  <button data-percentage>15%</button>
  <button data-percentage>25%</button>
  <button data-percentage>50%</button>
  <input type="text" class="input custom" id="custom" placeholder="Custom">
</div>

```

- after gather all the buttons with the forEach method, I added an event listener to add the button inner text value and pass it into a function and display the outputs in the output divs

```Javascript
//percentage buttons
percentageButtons.forEach(button => {
    button.addEventListener('click', () => {
        // define the inputs

        let billAmountValue = document.getElementById('bill').value
        let numPeopleValue = document.getElementById('num-people').value
        let tip = button.innerText
        let tipResult
        let totalResult

        checkInputs(billAmountValue, billAmount, numPeopleValue, numPeople)

        switch (tip) {
            case "5%":
                tipResult = (billAmountValue*0.05)/numPeopleValue
                break
            case "10%":
                tipResult = (billAmountValue*0.1)/numPeopleValue
                break
            case "15%":
                tipResult = (billAmountValue*0.15)/numPeopleValue
                break
            case "25%":
                tipResult = (billAmountValue*0.25)/numPeopleValue
                    break
            case "50%":
                tipResult = (billAmountValue*0.50)/numPeopleValue
                break
            default:
                return
        }
        totalResult = (billAmountValue/numPeopleValue)+tipResult
        displayResults(tipResult, totalResult)
        custom.value = ''
    })
})
```

### Questions

- How can I clean up my javascript code? I feel like I was very repetitive and some things weren't as necessary like stating variables again like numPeopleValue and billAmountValue within my custom() functions and button.eventlistener function

### Useful resources

- [Build A Calculator With JavaScript Tutorial](https://www.youtube.com/watch?v=j59qQ7YWLxw&ab_channel=WebDevSimplified) - this is a tutorial that helped me understand how to structure a calculator app and use data attributes

- [:focus](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus) - I used this pseudo element to add the focus changes to my buttons and input outlines

- [Debugging JavaScript in Visual Studio Code and Google Chrome](https://www.youtube.com/watch?v=AX7uybwukkk&ab_channel=JamesQQuick) - this video taught me how to debug my javascript using the debugger tool in developer tools

## Author

- Website - [Carlos Perez](https://www.site.com)
- Frontend Mentor - [@Carlos-A-P](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@WDCarlosP](https://www.twitter.com/WDCarlosP)
