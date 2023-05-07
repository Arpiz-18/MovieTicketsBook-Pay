## Movie Seat Booking

Display movie choices and seats in a theater to select from in order to purchase tickets
![Screenshot (333)](https://user-images.githubusercontent.com/72693753/236671813-a9bbd79e-1205-4d60-bf1a-2654bcf64506.png)
![Screenshot (334)](https://user-images.githubusercontent.com/72693753/236671818-b9ae8314-caad-46a7-a919-556dfae892ff.png)

![Screenshot (335)](https://user-images.githubusercontent.com/72693753/236671824-2dcbb62a-3670-4e5b-8723-73a766cc2bce.png)
![Screenshot (336)](https://user-images.githubusercontent.com/72693753/236671866-31f2e412-a868-4c5d-a1a5-a447c0f78025.png)
![Screenshot (337)](https://user-images.githubusercontent.com/72693753/236671870-7ac661bd-4e81-4257-b0e7-911abdc3bf1f.png)





## Project Specifications!
- Display UI with movie select, screen, seats, legend & seat info
- User can select a movie/price
- User can select/deselect seats
- User can not select occupied seats
- Number of seats and price will update
- Save seats, movie and price to local storage so that UI is still populated on refresh. Payment pages are integrated to provide a complete front-end experience.


The website for booking movies is a web-based programme created to let people purchase movie tickets online. The website was created utilising a variety of web development tools, including
 1. HTML, 
 2. CSS, and 
 3. JavaScript.

After choosing a movie on the homepage, users book movie tickets via the book-now page. JavaScript, CSS, and HTML were used in the page's design. The available and reserved seats for each film are generated dynamically using JavaScript code. Additionally, it has an event listener that tracks the selected seats, changes the seat's colour when clicked, and computes the cost of the tickets as a whole. To make sure the user chooses at least one seat before completing the form, the page has form validation. At the bottom of the booking page, it also shows the total number of seats reserved as well as the total cost. By clicking on the reserved seats, users are also given the option to cancel their reservation on the page.
After users have made a ticket purchase, the payment page is where their financial information is collected. JavaScript, CSS, and HTML were used in the page's design. Users can enter their payment information on the page using a form that asks for their credit card number, expiration date, and CVV. The user's payment information is verified by the JavaScript code, which also launches the payment-successful page.

After the user has made the payment successfully, a confirmation message is shown on the payment-successful page. A message that confirms the payment and a link to go back to the home page are also included on the HTML and CSS-designed page.

App.js and script.js are two different files that contain the JavaScript code used on the movie ticketing website. The website's backend functionality, such as dynamically generating seats, figuring out prices, validating forms, and setting timers, is handled by the app.js file. Frontend functionality, such as adjusting the website's design, managing user interactions, and triggering events, are handled by the script.js file.


To use the movie booking project on a local system, follow these simple steps:

Extract the project files to a folder on your local system after downloading them from the repository.
Locate the index.html file in the extracted folder by opening it.
To open the index.html file in your default web browser, double-click on it.
The webpage for purchasing movie tickets should now be visible. To view the available and reserved seats, use the drop-down list to select a movie.
To access the booking page, click the "book now" button.
Choose the desired seats on the booking page by clicking on them. To show which seats have been picked, the selected seats will change colour. The price section will also show the cost of the chosen seats.
Include your name, email address, phone number, and payment card information in the necessary fields on the reservation form.
The booking must be confirmed by clicking the submit button. You will see an error notice asking you to fix the problem if you haven't chosen any seats or if any required fields are unfilled.
You will be taken to the payment page if the reservation is successful. To finish making the payment, enter your CVV and press the Pay button.
You will be led to the payment-successful page, where you will see a message verifying the payment, if the transaction is successful.
You can return to the website's home page by clicking on the Return to Home button on the payment-successful page.


You will require a web browser like Google Chrome or Mozilla Firefox to execute the project on a local PC. No further software or tools are required. To access and use the website for purchasing movie tickets on your local system, simply follow the procedures above.



