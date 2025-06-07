# CatCoinWatch

A modern cryptocurrency tracking application built with React and Vite, featuring real-time price monitoring.

## 🚀 Features

- Real-time cryptocurrency price tracking
- Interactive 3D visualization using React-three-fiber
- Responsive grid layout for coin display
- Search functionality for cryptocurrencies
- Modern and clean user interface

## 🛠️ Technologies

- React 
- HTML
- CSS
- Vite 

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/CatCoinWatch.git
cd CatCoinWatch
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
pnpm dev
```

## 🏗️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Project Structure

```
CatCoinWatch/
├── src/
│   ├── assets/                 # Static assets and styles
│   │   ├── fonts/             # Custom fonts
│   │   ├── app.css            # Main application styles
│   │   ├── card.css           # Card component styles
│   │   ├── navbar.css         # Navigation styles
│   │   ├── footer.css         # Footer styles
│   │   └── ...                # Other component styles
│   │
│   ├── components/            # React components
│   │   ├── CatModel.jsx       # 3D cat model component
│   │   ├── ContainerCoins.jsx # Coin container component
│   │   ├── CoinList.jsx       # Coin list component
│   │   ├── card.jsx           # Individual coin card
│   │   ├── navbar.jsx         # Navigation component
│   │   ├── Footer.jsx         # Footer component
│   │   ├── searchInput.jsx    # Search functionality
│   │   └── ...                # Other UI components
│   │
│   ├── hooks/                 # Custom React hooks
│   │
│   ├── layouts/              # Layout components
│   │
│   ├── services/             # API and service functions
│   │
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles
│
├── public/                  # Public static files
├── index.html              # HTML entry point
├── vite.config.js          # Vite configuration
├── package.json            # Project dependencies
└── README.md              # Project documentation
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License