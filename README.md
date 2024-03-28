# CityCabbie

Welcome to CityCabbie, your one-stop solution for hassle-free cab booking. With CityCabbie, you can quickly book cabs for your travel needs at affordable prices. Our service ensures secure cabs, punctuality, and adherence to all traffic rules, providing you with a safe and comfortable journey.

## How to Run the Project

    node version= v21.3.0
    react version= v18.2.0

### Backend Setup
1. Go to https://myaccount.google.com/ and in the left sidebar click in Security, find "Signing in to Google", click in 2-Step Verification and enable it.
2. After enabling 2-Step Verification you'll see another option that is App Passwords. Click on this option.
3. App passwords, to create a new app password click "Select app" combobox, select Other, define a name and click in Generate. A dialog box will appear with the password.
4. Generated new app password, add this password in the following format in .env file.
5. Navigate to the `backend` directory.
6. Install the required npm packages by running:

    `npm i`

7. Create a `.env` file in the `backend` directory and add the following details:

    `MONGO_URI = <MongoDB URL>`

    `Email_User = <Your Gmail Address>`

    `Email_Pass = <Your App Password>`

Replace `<MongoDB URL>`, `<Your Gmail Address>`, and `<Your App Password>` with your MongoDB URL, Gmail address, and App password generated above respectively.
8. Start the server by running:

    `npm start`



### Frontend Setup
1. Navigate to the `frontend` directory.
2. Install the required npm packages by running:

    `npm i`

3. Start the frontend application by running:

    `npm start`



## Project Description

CityCabbie is a cab booking service that allows users to easily book cabs for their travel needs. Users can select their source and destination cities and view the available cabs along with their prices. After selecting a cab, users can book it, and upon successful booking, they will receive a `confirmation email` containing all the details of their booking.

![CityCabbie Screenshot](screenshot1.png)

To book a cab, simply click on the "Book Cab" link in the navbar, select your source and destination cities, choose a cab, and proceed with the booking. CityCabbie ensures affordable pricing, secure cabs, and timely service, making it the perfect choice for your travel needs.

![CityCabbie Screenshot](screenshot2.png)

