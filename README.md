
# Elevate X

Elevate X is an entrepreneurial network platform connecting startups with mentors.

## Project Structure

```
src/
├── frontend/
│   ├── components/   # React UI components
│   │   ├── Card/     # Card-related components
│   │   └── ui/       # UI components (buttons, toasts, etc.)
│   ├── hooks/        # Custom React hooks
│   ├── pages/        # Page components
│   └── styles/       # CSS and style definitions
│
├── backend/
│   ├── services/     # API services and data fetching
│   └── utils/        # Backend utility functions
│
└── shared/
    ├── types/        # TypeScript type definitions
    └── utils/        # Shared utility functions
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Access the application at http://localhost:8080

## Path Aliases

The project uses path aliases for easier imports:
- `@/` - Points to the src directory
- `@frontend/` - Points to src/frontend
- `@backend/` - Points to src/backend
- `@shared/` - Points to src/shared

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production-ready application
- `npm run preview` - Preview the production build locally
