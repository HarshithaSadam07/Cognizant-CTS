# HOL 06 - Trainers App

## Aim
Create a React app with react-router-dom to navigate between trainer pages.

## Features
- `Trainer` model class
- `TrainersMock.js` with 5 trainer records
- React Router v6 with 3 routes:
  - `/` → Home
  - `/trainers` → TrainersList (clickable names)
  - `/trainer/:id` → TrainerDetail (uses `useParams()`)

## How to Run
```bash
npm install
npm run dev
```
Open `http://localhost:5173`

## Output
Home page with navigation. Trainers list with clickable names leading to individual trainer detail pages.
