# HOL 04 - Blog App

## Aim
Create a class-based React component that fetches and displays blog posts using lifecycle methods.

## Features
- `Post` model class with id, title, body, userId
- `Posts` class component with constructor state
- `componentDidMount()` fetches posts from JSONPlaceholder API
- `componentDidCatch()` handles errors with alert
- Displays post title and body

## API Used
`https://jsonplaceholder.typicode.com/posts`

## How to Run
```bash
npm install
npm run dev
```
Open `http://localhost:5173`

## Output
A list of blog post cards with title and body text fetched from the API.
