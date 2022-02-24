<h1 align='center' style='font-weight: bold'>Divide & Conquer</h1>
<div>
<p align='center'>Divide & Conquer, a project inspired by <a style='font-weight: bold' href='https://www.monday.com/'>Monday</a>, which is a web application that allow users to organize their thoughts and tasks; kind of like a planner
<br>
</br>
</p>

</div>

<h1 align='center' style='font-weight: bold'> Index </h1>
<br>
<div align='center' style='font-weight: bold'>
 <a href='https://github.com/PeterShinnn/divide-and-conquer/wiki/Feature-List'>Feature List</a> - <a href='https://github.com/PeterShinnn/divide-and-conquer/wiki/Database-Schema'>DB Schema</a> - <a href='https://github.com/PeterShinnn/divide-and-conquer/wiki/API-Routes'>API Documentation</a> - <a href='https://github.com/PeterShinnn/divide-and-conquer/wiki/Frontend-Routes'> Frontend Routes </a>
<br>
</br>
</div>
<div align='center'>
<h1 align='center' style='font-weight: bold'>Technologies Used </h1>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg" height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"  height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"  height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" height=40/>


</div>
<br>
</br>

<h1 align='center' style='font-weight: bold'>Launching Locally </h1>

<h2 style='font-weight: bold'>Prerequisites </h2>
*  <a href='(https://www.python.org/downloads/'> Python 3.10 </a><br/>
*  <a href='https://www.postgresql.org/docs/12/index.html'> PostgreSQL 12s </a>

<br/>
<h2  style='font-weight: bold'>Getting Started </h2>

1. Clone the project repository

  ```
  git clone git@github.com:JTannerShaw/forthegram.git
  ```

2. Install Dependencies

* Flask:

    ```
    pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
    ```

* React-App:

    ```
    cd react-app
    ```
    ```
    npm install
    ```

3. Create a .env file base on the .env.example given in the root directory

* .env:
  ```
  FLASK_APP=app
  FLASK_ENV=development
  SECRET_KEY=<your strong secret key>
  DATABASE_URL=postgresql://<username>:<password>@<server>/<database>
  ```

4. Setup your username and database based on what you setup in your .env

5. Migrate and seed the database by intiating the pipenv shell from the root directory.

    ```
    pipenv shell
    ```
    ```
    flask db upgrade
    ```
    ```
    flask seed all
    ```

6. Start the server from the root directory.

    ```
    flask run
    ```


7. Start the frontend from the react-app directory.

    ```
    cd react-app
    ```
    ```
    npm start
    ```


# General Info

## A Brief Overview
Divide and Conquer is a clone of another web application called [monday.com](https://www.monday.com). Inspired by that website, I wanted to create a web application to help organize the task I needed to do in life and hopefully for others as well.


### Splash Page
This web page is what the user is greeted with when they first come into the website. From here, the users can choose to go to the sign up page, or the sign in page the access the features of this website! 
[![1.png](https://i.postimg.cc/x16VYN4t/1.png)](https://postimg.cc/JsH250mk)

### Login
This is where the user authentication happens. In the front end React help check that the components are getting filled and alerts the user when there's an error something missing. The actual authentication happens in the backend where Flask checks for the user password, hashes and checks to see if it matches the original password that is stored in the database as well. If the usuer is successful the user will be redirected to the taskboard page, if not the user will be greeted with error messages.
[![2.png](https://i.postimg.cc/8C38fQDv/2.png)](https://postimg.cc/GBkg6f43)
[![2-5.png](https://i.postimg.cc/3wW5wJM7/2-5.png)](https://postimg.cc/GB0S7RhS)

### Sign Up
On this page, user can sign up and create an account. The user must fill each form with correct information, especially the email and a unique username or the user will be prompted with error message telling them what's wrong with their application.
[![3.png](https://i.postimg.cc/zBWQLyxm/3.png)](https://postimg.cc/R6SdyZrG)
[![4.png](https://i.postimg.cc/90hnyckD/4.png)](https://postimg.cc/PpSyjnTH)

### Workspace 
This is where the magic happens on the website. This is where the user get redirected once they are logged and from here the user can access the feature of the website.
[![5.png](https://i.postimg.cc/gjV17xhy/5.png)](https://postimg.cc/gL0MXkNr)

### Create Workspace
Once the user is logged in, user can click the +Add new workspace button to make a form pop up, where the user is prompted to put in a name for the new workspace that they want to create along with the create button on the page as well.
[![6.png](https://i.postimg.cc/5NXXXrTM/6.png)](https://postimg.cc/D8KvDx7C)

### Create Category
After creating a new workspace, the user will be automatically redirected to the workspace that is newly created and from here the user can create a new category for that workspace by pressing the Add Category button that is on the page. After a category is created, the user can create new task by typing a name for the task that need to do thats 3 characters or longer, otherwise the button will stay disabled and the user will not be able to add anything.
[![7.png](https://i.postimg.cc/3JZPCDYY/7.png)](https://postimg.cc/7ffsqh5W)

### Updating Task
One a user creates a new task, the user can interact with the task by clicking on differents parts of the task. The user can set the deadline by clicking on the Deadling tab on the right along with changing the status of the task by clicking the task status as well. The user also has the option to delete not just the task, but the task, categories and even the workspace if they wish.
[![8.png](https://i.postimg.cc/t4C8rC4P/8.png)](https://postimg.cc/9rKx02TF)
[![9.png](https://i.postimg.cc/1z82QC63/9.png)](https://postimg.cc/kVdfNyf0)
[![10.png](https://i.postimg.cc/bv4MNxHH/10.png)](https://postimg.cc/5HqpsFr6)
