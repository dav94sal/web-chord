# Web-Chord

[Live](https://web-chord.onrender.com)

Web-Chord is an app for musicians to display their Tours, Shows, and Merchandise for fans.

[Features List](https://github.com/dav94sal/web-chord/wiki/Feature-List)

## Technologies Used

- React
- Redux
- Python
- Flask
- SQLAlchemy
- WTForms
- PostgreSQL
- AWS S3

## Screenshots

There are 3 main pages:

Home
![Home Page](https://i.ibb.co/dPN1LcD/Home.jpg)

Artist Page

![Artist Page with Tour info](https://i.ibb.co/J2QV1t9/Artist-Page-Tours.jpg)
![Artist Page with Merch info](https://i.ibb.co/DLNPXg2/Artist-Page-Merch.jpg)

Manage Page

![Manage Page with Tour information](https://i.ibb.co/7tvVQt5/Manage-Tours.jpg)
![Manage Page with Merch information](https://i.ibb.co/Bfqz8Y9/Manage-Merch.jpg)

## Usage

1. Clone this repository.

2. Install dependencies.

   ```bash
   pipenv install -r requirements.txt
   ```

3. Create a __.env__ file based on the example with proper settings for your
   development environment.

4. Make sure the SQLite3 database connection URL is in the __.env__ file.

5. This starter organizes all tables inside the `flask_schema` schema, defined
   by the `SCHEMA` environment variable.  Replace the value for
   `SCHEMA` with a unique name, **making sure you use the snake_case
   convention.**

6. Get into your pipenv, migrate your database, seed your database, and run your
   Flask app:

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

7. To run the React frontend in development, `cd` into the __react-vite__
   directory and run `npm i` to install dependencies. Next, run `npm run build`
   to create the `dist` folder. The starter has modified the `npm run build`
   command to include the `--watch` flag. This flag will rebuild the __dist__
   folder whenever you change your code, keeping the production version up to
   date.
