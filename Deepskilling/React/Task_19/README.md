# HOL 19 - Git Client App

## Aim
Build a GitHub repository browser using axios and write unit tests with mocked axios.

## Features
- `GitClient.js` module using axios to fetch GitHub repos
- `RepoList` component with search form
- Displays all repository names as clickable links
- `GitClient.test.js` with mocked axios:
  - "should return repository names for techiesyed"
  - empty repo test
  - error handling test

## How to Run (App)
```bash
npm install
npm run dev
```
Open `http://localhost:5173`

## How to Run Tests
```bash
npm install
npm test
```

## API Used
`https://api.github.com/users/{username}/repos`

## Output
Search bar to enter any GitHub username. Displays numbered repo list with links to each repo.
