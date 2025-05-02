# Elevate-X

A modern web application for connecting mentors and mentees.

## Features

- User authentication and authorization
- Mentor search and filtering
- Real-time chat functionality
- Resource sharing and management
- Community forums and discussions

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- React Query
- Radix UI

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/elevate-x.git
cd elevate-x
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add the following variables:

```env
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=Elevate-X
VITE_APP_VERSION=1.0.0
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
src/
  ├── components/     # Reusable UI components
  ├── pages/         # Page components
  ├── hooks/         # Custom React hooks
  ├── services/      # API services
  ├── types/         # TypeScript type definitions
  ├── utils/         # Utility functions
  ├── lib/           # Library configurations
  ├── assets/        # Static assets
  └── App.tsx        # Root component
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
