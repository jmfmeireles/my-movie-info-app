# My Movie Info App

Responsive web app with the purpose of displaying information about the top rated movies on IMDb.

When you open this web app, it will be displayed a paginated list with the IMDb top-250 movies. For each movie, a tile with the title, poster, release year and IMDb rating is rendered. The user can filter by movie title, and can sort the movies by IMDb rating, movie title, year and IMDb rating votes, in an ascending or descending way.

When you click on a movie tile, a detailed view is opened. Besides the information already displayed for each movie, it is also displayed a plot of the movie and information about the crew (for actors, you can click on each actor name and a dialog will be opened with a photo of this actor and the role he/she played on the movie). Want to see the trailer of the movie? By clicking on the movie poster, it will be opened if available.

This web app uses the <a href="https://imdb-api.com/">IMDb API</a>. Please note that there is a limit for API requests (100), but you can generate your own API key and configure it on file app/src/resources/config.ts.

## Relevant dependencies
- <a href="https://github.com/react-boilerplate/react-boilerplate-cra-template">CRA Boilerplate</a>, a template that allows the creation of a CRA app with a solid tool stack and development patterns. Relevant features used here the great common use components already developed, test setup, great i18n internationalization support and the redux setup (redux injectors). Allows the developer to build a project with a proper structure, scalable and mantainable.
- <a href="https://mui.com/">Material UI</a>, which provides a robust, customizable, and accessible library of foundational and advanced components, enabling you to build your own design system and develop React applications faster. 
- <a href="https://rxjs.dev/">RxJS</a>, a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code. 

## Install & Start
After cloning this project locally, you must install its dependencies by running the following command:
- _npm install_

After installing dependencies, you are ready to go. Please run the following command:
- _npm start_

Having all the dependencies installed, you can all run the unit tests:
- _npm run test_

## Release Notes

### 1.0.0 (6/12/2021)

- Initial Version of Movie App
  - Page with a list of IMDb top-250 movies
  - Page to display details of a movie
