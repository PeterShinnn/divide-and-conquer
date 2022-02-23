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

[![1.png](https://i.postimg.cc/x16VYN4t/1.png)](https://postimg.cc/JsH250mk)
[![2.png](https://i.postimg.cc/8C38fQDv/2.png)](https://postimg.cc/GBkg6f43)
[![2-5.png](https://i.postimg.cc/3wW5wJM7/2-5.png)](https://postimg.cc/GB0S7RhS)
[![3.png](https://i.postimg.cc/zBWQLyxm/3.png)](https://postimg.cc/R6SdyZrG)
[![4.png](https://i.postimg.cc/90hnyckD/4.png)](https://postimg.cc/PpSyjnTH)
[![5.png](https://i.postimg.cc/gjV17xhy/5.png)](https://postimg.cc/gL0MXkNr)
[![6.png](https://i.postimg.cc/tCbKxz0B/6.png)](https://postimg.cc/fkHq4mRd)
[![7.png](https://i.postimg.cc/3JZPCDYY/7.png)](https://postimg.cc/7ffsqh5W)
[![8.png](https://i.postimg.cc/t4C8rC4P/8.png)](https://postimg.cc/9rKx02TF)
[![9.png](https://i.postimg.cc/1z82QC63/9.png)](https://postimg.cc/kVdfNyf0)
[![10.png](https://i.postimg.cc/bv4MNxHH/10.png)](https://postimg.cc/5HqpsFr6)
