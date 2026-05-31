# Photo Gallery App

A responsive photo gallery web app built with React + Vite + Tailwind CSS.

## Features

- Fetches 30 photos from [Picsum Photos API](https://picsum.photos/v2/list?limit=30)
- Loading spinner while photos are being fetched
- Error message if fetch fails
- Responsive grid layout (1 column mobile, 2 tablet, 4 desktop)
- Real-time search filter by author name
- Favourite photos with heart icon toggle
- Favourites persist across page refreshes using localStorage

## Tech Stack

- React + Vite
- Tailwind CSS
- Picsum Photos API

## Project Structure

```
src/
├── components/
│   ├── PhotoCard.jsx       # Single photo card with heart toggle
│   └── SearchBar.jsx       # Search input component
├── hooks/
│   └── useFetchPhotos.js   # Custom hook for fetching photos
├── reducer/
│   └── favouritesReducer.js # useReducer logic for favourites
├── App.jsx
└── index.css
```

## Hooks Used

| Hook | Where | Why |
|---|---|---|
| `useFetchPhotos` | Custom hook | Fetches photos, returns photos, loading, error |
| `useReducer` | App.jsx | Manages favourites state |
| `useCallback` | App.jsx | Prevents handleSearch from recreating on every render |
| `useMemo` | App.jsx | Prevents filteredPhotos from recalculating on every render |

## Getting Started

bash
# Install dependencies
npm install

# Run development server
npm run dev
