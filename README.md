Online Shopping Store created using create-react-app, In this app users can signup, signin. could select items from the dashboard for adding to the cart. The checkout button is there for placing an order. Users also able to see the previous orders list.

This Store contains 3 components and 3 pages for view. Used react @material-ui for a more interactive interface.

## Table of Contents

* [Project Structure](#project-structure)
* [Author](#author)
* [Useful Links](#useful-links)

## Project Structure

```
Online-Shopping-Store
.
├── package.json
├── README.md
├── public
│   ├── index.html
│   └── manifest.json
│   └── favicon.ico
└── src
    ├── index.js
    ├── firebase.json
    ├── index.js   
    ├── index.css
    ├── app.scss
    ├── App.js
    ├── assets
    │   └── scss
    │       └── Dashboard.scss
    │       └── Item.scss
    │       └── Signin.scss
    │       └── Signup.scss
    ├── components
    │   ├── Cart.jsx
    │   ├── Item.jsx
    │   └── Order.jsx
    │    
    ├── config
    │   └── Constant.js
    │   └── GuardedRoute.js
    │       
    ├── services
    │   ├── CartService.js
    │   ├── ItemService.js
    │   ├── OrderService.js
    │   └── UserService.js
    |
    └── views
        ├── Dashboard.jsx
        ├── Signin.jsx
        └── Signup.jsx
```

## Author

- Prince Singh (https://www.princesingh.in) 2021

## Useful Links

Store URL:

- <https://online-shoppers-store.web.app>