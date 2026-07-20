# HOL 17 - Fetch User App

## Aim
Create a class component that fetches and displays random user profiles using async componentDidMount.

## Features
- `Getuser` class component
- Async `componentDidMount()` fetches from `https://api.randomuser.me/`
- Displays user photo, title, first name, last name
- Loading and error states

## API Used
`https://api.randomuser.me/?results=6`

## How to Run
```bash
npm install
npm run dev
```
Open `http://localhost:5173`

## Output
A grid of 6 random user profile cards with photo, name, location, and email.
