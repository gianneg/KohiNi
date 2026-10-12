# KohiNi

A recipe website for coffee and drinks, built with Vue. Recipes can be read aloud with text-to-speech, so you can follow along hands-free while making a drink.

**Live:** https://kohini.vercel.app

## Features

- Browse caffeinated and non-caffeinated drinks, with a drink carousel on the home page
- Recipe pages with ingredients and step-by-step instructions
- Text-to-speech for the ingredients and the instructions
- FAQ, About, Contact and Site Map pages
- Responsive layout for desktop and mobile
- Recipe data stored in Firebase Firestore

## Tech

Vue 3 · Vite · Vue Router · Firebase (Firestore)

## Project structure

```
CCS8GMT/
  src/
    views/        # Home, About, Contact, Content pages
    components/   # NavBar, Homepage, DrinkCarousel, recipes, FAQ, SiteMap, Footer
    router/       # Routes
    lib/          # Firebase setup
```

## Run it locally

```bash
cd CCS8GMT
npm install
cp .env.example .env     # then fill in your Firebase web API key
npm run dev
```

### Environment variables

| Variable | Description |
| --- | --- |
| `VITE_FIREBASE_API_KEY` | Firebase web API key for the project |

Other Firebase settings (project ID, app ID and so on) are in `src/lib/firebase.js`. Protect your data with Firestore security rules.

## Deploy

Deployed on Vercel with the root directory set to `CCS8GMT`. Add `VITE_FIREBASE_API_KEY` in the project's environment variables.

## Team

A school group project built with classmates.
