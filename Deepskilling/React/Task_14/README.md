# HOL 14 - Context API Employee App

## Aim
Use React Context API to share theme across components without prop drilling.

## Features
- `ThemeContext.js` with default value "light"
- Context Provider in App wraps the entire tree
- `EmployeeList` does NOT pass theme as props
- `EmployeeCard` consumes ThemeContext with `useContext`
- Toggle between light and dark themes

## How to Run
```bash
npm install
npm run dev
```
Open `http://localhost:5173`

## Output
Employee cards that switch between light and dark themes via Context API.
