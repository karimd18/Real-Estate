# Real Estate

A unified real estate listing solution comprised of a React-based web frontend and a React Native mobile app, allowing users to search, browse, and view property listings on both desktop and mobile.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running Locally](#running-locally)
5. [Project Structure](#project-structure)
6. [Usage](#usage)
7. [Contributing](#contributing)
8. [License](#license)
9. [Contact](#contact)

---

## Project Overview

This repository contains two front-end applications for a real estate platform:

- **website/** – A React-based web application where users can:
  - Browse property listings
  - Filter by criteria (location, price, property type)
  - View detailed property pages
  - Contact agents

- **mobile/** – A React Native (Expo) mobile app offering:
  - On-the-go property browsing
  - Interactive map view with listing pins
  - Push notifications for saved searches
  - Image upload for listings (if enabled)

Both apps share a design system and consume the same REST API to fetch listings, images, and agent details.

---

## Features

- **Property Listings**
  - Display paginated lists of properties with thumbnails and key details (price, location, bedrooms)
  - Detailed pages with photo carousel, description, amenities, and agent contact

- **Search & Filters**
  - Location search (address or city)
  - Price range slider
  - Bedroom/Bathroom selector
  - Property type dropdown (house, apartment, land, etc.)

- **Favorites & Saved Searches**
  - Mark listings as favorites
  - Save search criteria and receive notifications (email for web, push for mobile)

- **Map Integration (Mobile)**
  - Interactive map with pins for each listing
  - Tap pin for quick preview, navigate to detail page

- **Responsive Design (Web)**
  - Works on desktop, tablet, and mobile browsers
  - Utilizes CSS Grid and Flexbox for fluid layouts

- **Contact Agent Form**
  - In-listing form to message agents
  - Submits via API to notify agent

---

## Tech Stack

### Shared
- **Version Control**: Git
- **Package Manager**: npm
- **Code Quality**: ESLint (Airbnb style), Prettier

### Web App (`website/`)
- **Framework**: React 18
- **Routing**: React Router
- **Styling**: Tailwind CSS, Styled Components
- **State Management**: Context API, React Hooks
- **API Client**: Axios
- **Icons**: React Icons
- **Forms**: React Hook Form, Yup
- **Build Tool**: Vite
- **Maps**: Google Maps JavaScript API

### Mobile App (`mobile/`)
- **Framework**: React Native (Expo)
- **Navigation**: React Navigation
- **Styling**: Tailwind-in-RN, Expo Vector Icons
- **State Management**: Context API, React Hooks
- **API Client**: Axios
- **Forms**: Formik, Yup
- **Maps**: react-native-maps
- **Push Notifications**: Expo Notifications

---

## Getting Started

### Prerequisites
- **Node.js** (≥ 16.x) and **npm** (≥ 8.x)
- **Expo CLI** for mobile:
  ```bash
  npm install --global expo-cli
  ```
- A running instance of the Real Estate REST API (or mock JSON server)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/karimd18/Real-Estate.git
   cd Real-Estate
   ```

2. **Install dependencies for the Web App**
   ```bash
   cd website
   npm install
   ```

3. **Install dependencies for the Mobile App**
   ```bash
   cd ../mobile
   npm install
   ```

### Running Locally

#### Web App
1. From the project root:
   ```bash
   cd website
   ```
2. Create a `.env` file in `website/` with:
   ```
   REACT_APP_API_BASE_URL=https://your-api-domain.com/api
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173).

#### Mobile App
1. From the project root:
   ```bash
   cd mobile
   ```
2. Create a `.env` file in `mobile/` with:
   ```
   EXPO_API_BASE_URL=https://your-api-domain.com/api
   ```
3. Start Expo:
   ```bash
   expo start
   ```
4. Scan QR with Expo Go or use emulator.

---

## Project Structure

```
Real-Estate/
│
├── website/                      # React web application
│   ├── public/                   # Static assets
│   ├── src/
│   │   ├── assets/               # Images, icons, CSS resets
│   │   ├── components/           # Reusable UI components
│   │   ├── pages/                # Page-level components
│   │   ├── context/              # React context providers
│   │   ├── hooks/                # Custom hooks
│   │   ├── utils/                # Utility functions
│   │   ├── App.jsx               # Router setup
│   │   ├── main.jsx              # Vite entry point
│   │   └── index.css             # Global styles
│   ├── .env.example              # Example environment variables
│   ├── package.json
│   └── vite.config.js
│
├── mobile/                       # React Native (Expo) mobile app
│   ├── assets/                   # App icons, fonts, images
│   ├── components/               # Reusable RN components
│   ├── screens/                  # Screen components
│   ├── navigation/               # React Navigation setup
│   ├── context/                  # Context providers
│   ├── hooks/                    # Custom hooks
│   ├── services/                 # API service layer
│   ├── App.js                    # Expo entry point
│   ├── app.json                  # Expo configuration
│   └── tailwind.config.js        # Tailwind-in-RN config
│
├── .gitignore
└── README.md                     # ← You are here
```

---

## Usage
- Point both apps to your Real Estate API. If missing, use a mock server (e.g., json-server) with endpoints:
  - `GET /properties`
  - `GET /properties/:id`
  - `POST /auth/login`
  - `GET /users/:id/favorites`
  - `POST /users/:id/favorites`
  - etc.
- Update `.env` variables (`REACT_APP_API_BASE_URL` and `EXPO_API_BASE_URL`) accordingly.

---

## Contributing
1. Fork the repository.
2. Create a branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Make changes and commit.
4. Push to your fork:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a Pull Request against `karimd18/Real-Estate:master`.

Ensure code follows ESLint/Prettier rules and include tests where appropriate.

---

## License
This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## Contact
**Karim Doueik**  
- Email: karimdoueik9@gmail.com  
- GitHub: [karimd18](https://github.com/karimd18)

Feel free to open issues or reach out with questions or feedback.
