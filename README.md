# FoldKart
Shopping web site

FoldKart (Shopping web site)

  It should cover all basic features of shopping web site -->

   - all product list with filter

   - product details specification 

   - Cart

   - payment page with shipping address

   - login

   - signup

   - user profile

   - user wishlist

   - user products ordered details 

   Admin part --->

   There should be admin login so that admin can do all these actions

   - add new product 

   - add product category

   - get all product list

   - delete products

   - edit products

   - update products
   
   
   
   
   

FoldKart (Online Shopping site)

These all are library i have used ---->

- Angular.js  :  For angularJS

- Angular-route.min.js  : For angular routing

- Angular-sanitize.js  : For use of ng-bind-html that will evaluates the expression and 

- Angular ng-storage.js  : For storing the Object into local Storage.

- Angular ng-resource.js  : For doing server call. (Alternate way - you can use $http )

- Underscore.js : This is the javascript library for doing some basic operation  of Object 

    inserts the resulting HTML into the element in a secure way.

    in easy way . like – getting the unique data from array of Objects ( _.unique(array, 

    fun) ) , finding  specific data from array of Objects ( _.find(array, fun) ).

- Jquery.js  : For Jquery stuff.

- Bootstrap.js  : For Bootstrap stuff.

- Bootstrap.css  : For Bootstrap css stuff.





FoldKart Database Specification ===========>

users

- id (Auto generated) – string

- name  - string

- email - string

- password – string

- date – string

- wishlist_products - is a list of products

- 

products

- id (Auto generated) – string

- name – string

- desc – string

- price – number

- img_url – string

- stock – number

- category – category

- quantity – number

category

- id (Auto generated) – string

- category – string


shipping_address

- id (Auto generated) – string

- first_name – string

- last_name – string

- phone_no – string

- address – string

- city – string

- state – string

- zip_code – string

- user_orders - user_orders

user_orders

- id (Auto generated) – string

- user – users

- date – string

- product_list  – is a list of user_ordered_products

user_ordered_products

- id (Auto generated) – string

- name – string

- desc – string

- price – number

- img_url – string

- stock – number

- category – category

- quantity – number


contact

- id (Auto generated) – string

- first_name – string

- last_name – string

- email – string

- phone_no – string

- message – string

admin

- id (Auto generated) – string

- name – string

- password– string



security constraint -->

1) If user is not logged in and also there is nothing inside the cart . than payment page should not be available

2) If user is not logged in and user try to add product into wish list than it will show the login popup (means 

user can only add product into wish list when user is logged in ) 

3) If user is not logged in and user try to checkout the cart product than it will show the login page (means 

user can only checkout the product into cart when user is logged in ) 

4) And once user is logged in than showing the user name instead of 'login' and 'signup' in header.

5)And in admin part before doing any action , user should be able to login successfully



