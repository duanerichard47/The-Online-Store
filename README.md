# MERN AMAZONA

# Lessons

1. Introduction
2. Install Tools
3. Create React App
4. Create Git Repository
5. List Products
   1. create products array
   2. add product images
   3. render products
   4. style products
6. Add page routing
   1. npm i react-router-dom
   2. create route for home screen
   3. create router for product screen
7. Create Node.JS Server
   1. run npm init in root folder
   2. Update package.json set type: module
   3. Add .js to imports
   4. npm install express
   5. create server.js
   6. add start command as node backend/server.js
   7. require express
   8. create route for / return backend is ready.
   9. move products.js from frontend to backend
   10. create route for /api/products
   11. return products
   12. run npm start
8. Fetch Products From Backend
   1. set proxy in package.json
   2. npm install axios
   3. use state hook
   4. use effect hook
   5. use reducer hook
9. Manage State By Reducer Hook
   1. define reducer
   2. update fetch data
   3. get state from usReducer
10. Add bootstrap UI Framework
    1. npm install react-bootstrap bootstrap
    2. update App.js
11. Create Product and Rating Component
12. create Rating component
13. Create Product component
14. Use Rating component in Product component
15. Create Product Details Screen
16. fetch product from backend
17. create 3 columns for image, info and action
18. Create Loading and Message Component
19. create loading component
20. use spinner component
21. create message component
22. create utils.js to define getError function
23. Implement Add To Cart
24. Create React Context
25. define reducer
26. create store provider
27. implement add to cart button click handler
28. Complete Add To Cart
29. check exist item in the cart
30. check count in stock in backend
31. Create Cart Screen
32. create 2 columns
33. display item list
34. create action column
35. Complete Cart Screen
36. click handler for inc/dec item
37. click handler for remove item
38. click handler for checkout
39. Create Signin Screen
40. create sign in form
41. add email and password
42. add signin button
43. Connect To MongoDB Database
44. create atlas mongodb database
45. install local mongodb database https://www.mongodb.com/docs/manual/administration/install-community/
46. npm install mongoose
47. connect to mongodb database
48. Seed Sample Data
49. create Product model
50. create User Model
51. create seed route
52. use route in server.js
53. seed sample product
    have to change to const product = await Product.findOne({ slug: req.params.slug }); in productRoutes.js line 12
    have to chang to await Product.remove({}); in seedRoutes.js line 8
