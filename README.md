# Client-Side-Web-Technologies
This repository is opened to learn front-end web technologies.

## Projects
### Project 1
#### Problem 1: Implement a simple Log-in Page
In this problem, you are asked to implement a login page similar to the one shown below (name your file login.html):

![image](https://user-images.githubusercontent.com/71591780/219701356-8885e6ab-840d-4c7a-81b4-931fdb2e18dc.png)

The login page must be inside a container with a width of 400px centered in the middle of the screen. Notice that the container has a box-shadow around its right and bottom edges. It has a title named “Login” centered on the container. Below the Login title, we have 3 circular buttons with titles “G”, “f”, “in” representing login with Google, facebook and Linked-in. Each of these buttons is 40x40 pixels. Under the buttons, we have two input fields, one for email and one for password. At the bottom, we have the “Submit” button. The two input fields and the Submit button must be placed inside a HTML form. Notice that both of the input fields and the submit button must extend the full width of the container (100%).
All of the buttons must have “hover” effects as shown below:

![image](https://user-images.githubusercontent.com/71591780/219701245-712d2f65-ab0c-459c-a39f-d16a4f517160.png)
       
On the left, the cursor is on top of the “f” button and on the right, the cursor is on top of the “Submit” button. In both cases, the cursor turns to “pointer”, the background color turns to “green” and the text color turns to “white”. You must write the necessary CSS rules that make this possible.


#### Problem 2: Implement a Card Component for Recipes and design a Web page that contains two Recipes
Cards are very popular in Web applications. They are usually used give information about an item such as a product, a recipe etc. In this problem, you are asked to design a card component to show recipes and use your Card component to display two recipes on the screen. Here is how your page should look like (currently the mouse is inside the Details button of the second Card) (name your file cards.html).

![image](https://user-images.githubusercontent.com/71591780/219701718-300139aa-7bfb-4fad-872d-bf57afa652f6.png)

As you can see, both Cards sit inside a container. The container occupies 75% width of its parent (the browser screen) and is centered on the screen. There is a title named “Recipes” centered at the top. Then comes two Card components sitting next to each other. Each card has an image at the top. We have given you the two images that you need for this project. The first image is called stew.jpg and the other one is called curry.jpg. Each card must occupy 45% width of its parent container, and must have fixed height of 290px. The image on the card occupies 100% width of the Card and has a fixed height of 230px. On top of the image, we have a clock icon and the time it takes to cook the recipe. The icon comes from Materialize CSS icons and is named “access_time”. To make use of this icon, include Materialize CSS icons inside the head section of your HTML as follows:
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

To use this icon, use the following HTML icon element:
<i class="material-icons">access_time</i>

To place the icon and the time on top of the image, use the CSS position property. You must make the card’s position relative and the position of the div containing the “icon+25 MIN” absolute and specify the left and top coordinates of this container. I used left: 15px; right: 15px; for the absolute coordinates for the icon+text.
At the bottom of the Card, we have a footer section that contains the name of the recipe and the name of the person who made the recipe. Finally, at the bottom-right corner of the footer section of the card, we have a button that will take us to the details of this recipe. As customary, this button must have a hover effect: When the mouse is on top of this button, the background must become green, the text color white and the cursor must turn to pointer.


#### Problem 3: Implement a Product Page
In this problem you are asked to implement the following product page (name your file productPage.html):

![image](https://user-images.githubusercontent.com/71591780/219701984-4d1bb921-8a9b-4ed5-bdb4-0697febdf594.png)

As always, the page must be centered inside a container that occupies 60% of the entire screen. The page starts with an image (arduino.jpg that is given with the project) and then a component that gives some information about the product such as the product’s name, where it comes from, Stock code, price etc. Pay special attention to the vertical blue and green bars at different lines of this component. The way to do this is to view each line as a box and put a thick left border with the specified color to the box.
Below the top image + info component is another component that contains a simple unordered list giving some details about the product. The component at the bottom is a table that has 2 columns and 4 rows. Notice how the odd/even rows of the table have different background colors (striped). Also notice that the table rows have a “hover” effect. In the example given above, the mouse is on the third row, which turns the background color to some shade of gray and the text color to white. Your page must have the same behavior. You must also add the hover effect to the “Sepete Ekle” button. Specifically, the background color of this button must turn blue when the mouse is over it.
