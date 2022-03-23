
# Check the Match

Check the Match is a React application using the Material UI library and API-Football to display football match statistics without showing the final score, giving the user enough data to make an informed decision on whether to watch the match.

## Features

- Be able to search for a league.

- View fixtures not showing the final score.

- Open a dialog to see further statistics.

- Change the year of the season to see previous fixtures.

## Technologies Used

- [React](https://reactjs.org/)

- [Material UI](https://mui.com/)

- [Axios](https://axios-http.com/)

- [React Router Dom](https://v5.reactrouter.com/web/guides/quick-start)

- [React Infinite Scroll Component](https://github.com/ankeetmaini/react-infinite-scroll-component#readme)

## API

The API in use for the football data is [API-Football](https://www.api-football.com/).

## Deployment

To run locally open your console and run `git clone https://github.com/msped/shouldiwatchit.git` then change into the folder path.

To run the developement server, type `npm start` in your console and press enter. It will open a new browser window, or tab if you haven't got one open, where you will see the developemnt server on localhost port 3000.

To run the production build of the application run the below code.

```
npm run build
npm install -g serve
serve -s build
```