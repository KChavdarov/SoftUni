# Steps for successful exam

**[Link to REST Service documentation](https://github.com/softuni-practice-server/softuni-practice-server)**

## Environment Preparation
* Load dependencies - **npm install**
* Add lit-html and page.js - **npm install -S lit-html page**
* Open http server, needed for the tests - **npm run start**
    * You can also use the server for development at the specified port
* Start local REST service
    * open new terminal window
    * using the terminal navigate to the server folder - **cd server**
    * start server - **node server.js**
* Open a third terminal window for testing
    * start test using command - **npm run test**

## Skeleton Preparation
* Copy the content of the index.html file to a blank document and clear it from the original leaving only the static content
* Add scrip tag linking app.js in head element:
```html
<script src="/src/app.js" type="module"></script>
```
* Create **src** folder and add app.js to it
* import page from page.js ti app.js file
    ```javascript
    import page from '../node_modules/page/page.mjs';
    ```
* import render from lit-html to app.js file
    ```javascript
    import { render } from '../node_modules/lit-html/lit-html.js';
    ```
* Create **api** subfolder and copy api.js and data.js from preps
    * Set up login and register functions in *api.js*
    * Select appropriate resource location in *data.js*
    * Fine tune basic CRUD requests pathnames, based on the exam task specifics
* Copy utilities to **src** folder to enable Session Storage handling
* Don't forget to add any missing custom api request functions to data.js when needed
* Create **views** folder where all required views will be stored
* Prepare a separate viewname.js file for each app section containing:
    * static html as page template
    * exporting async function rendering the template 
* Copy the provided section html to each of the viewname files
* Set up each page in the router in advance to save time during development
* Don't overdo the solution - keep it down to the bare minimum - no fancy validations, spinners, unless required in the description


* Quick reference:
  * [Pagination](https://youtu.be/MnD9CdiKrAw)
  * [Likes](https://youtu.be/TNSZiqS7r5g?t=8748)
  * [Search](https://youtu.be/dJzAmuqYSVY?t=4967)
  * [Modal](https://youtu.be/dJzAmuqYSVY)
  * [Notification](https://youtu.be/dJzAmuqYSVY?t=7194)
  * [Loader](https://youtu.be/g39zQSuHnHs?t=6252)
  * Comments tutorial available in Lesson-6 documents


    
