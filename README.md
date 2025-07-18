# Web-Chord

[Live](https://web-chord.onrender.com)

Web-Chord is an app for musicians to display their Tours, Shows, and Merchandise for fans.

## Guide to Web-Chord

Extensive documentation available at the [Web-Chord Wiki](https://github.com/dav94sal/web-chord/wiki)!

- [Backend Routes](https://github.com/dav94sal/web-chord/wiki/Backend-Routes)
- [Database Schema](https://github.com/dav94sal/web-chord/wiki/Database-Schema)
- [Feature List](https://github.com/dav94sal/web-chord/wiki/Feature-List)
- [Frontend Routes](https://github.com/dav94sal/web-chord/wiki/Frontend-Routes)
- [Redux State](https://github.com/dav94sal/web-chord/wiki/Redux-State)
- [User Stories](https://github.com/dav94sal/web-chord/wiki/User-Stories)

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

Home - For all users to browse for their favorite artists or find new obsessions
![Home Page](https://i.ibb.co/dPN1LcD/Home.jpg)

Artist Page - Where artists display their newest shows and merchandise for everyone to see
![Artist Page with Tour info](https://i.ibb.co/J2QV1t9/Artist-Page-Tours.jpg)
![Artist Page with Merch info](https://i.ibb.co/DLNPXg2/Artist-Page-Merch.jpg)

Manage Page - Artists can view, create, update, and delete all tour and merch information
![Manage Page with Tour information](https://i.ibb.co/7tvVQt5/Manage-Tours.jpg)
![Manage Page with Merch information](https://i.ibb.co/Bfqz8Y9/Manage-Merch.jpg)

## Usage

1. Install dependencies.

   ```bash
   pipenv install -r requirements.txt
   ```

2. Create your __.env__ file based on the example.

3. The SQLite3 database connection URL must be in the __.env__ file.

4. Replace the value for `SCHEMA` with a unique name, **make sure to use snake_case
   convention.**

5. Create an AWS S3 Bucket and User. Add your buckets name, key, and secret to the __.env__ file.

6. Open your pipenv shell, migrate and seed your database, then run your
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

7. To run the React frontend in development, `cd` into the __react-app__
   directory and run `npm i` to install dependencies. Next, run `npm run build`
   to create the `dist` folder. The `npm run build` command is modified to include
   the `--watch` flag. This flag will rebuild the __dist__ folder whenever you
   change your code, keeping the production version up to date.
