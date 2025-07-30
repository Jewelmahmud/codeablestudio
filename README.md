# CodableStudio - Software Development Company Website

A modern, responsive website for CodableStudio, a software development company. Built with React, TypeScript, Tailwind CSS, and Express.js.

## 🚀 Features

- **Modern Design**: Beautiful, responsive design inspired by modern software companies
- **Full-Stack**: React frontend with Express.js backend
- **TypeScript**: Type-safe development throughout
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Animations**: Smooth animations using Framer Motion
- **Contact Form**: Functional contact form with backend API
- **Portfolio**: Showcase of projects and services
- **Mobile Responsive**: Optimized for all device sizes

## 🛠️ Tech Stack

### Frontend
- React 18 with TypeScript
- React Router for navigation
- Tailwind CSS for styling
- Framer Motion for animations
- Heroicons for icons
- Headless UI for accessible components

### Backend
- Express.js with TypeScript
- CORS enabled for cross-origin requests
- Helmet for security headers
- Morgan for HTTP request logging
- RESTful API endpoints

## 📁 Project Structure

```
CodableStudio/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   └── utils/         # Utility functions
│   ├── public/            # Static assets
│   └── package.json
├── server/                # Express.js backend
│   ├── src/
│   │   ├── routes/        # API routes
│   │   ├── controllers/   # Route controllers
│   │   ├── middleware/    # Custom middleware
│   │   └── types/         # TypeScript types
│   └── package.json
└── package.json           # Root package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd CodableStudio
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Start the development servers**
   ```bash
   npm run dev
   ```

This will start both the frontend (port 3000) and backend (port 5000) servers concurrently.

### Manual Setup

If you prefer to run servers separately:

**Frontend (React)**
```bash
cd client
npm install
npm start
```

**Backend (Express.js)**
```bash
cd server
npm install
npm run dev
```

## 📱 Available Pages

- **Home** (`/`) - Landing page with hero section and services overview
- **Services** (`/services`) - Detailed service offerings with filtering
- **Projects** (`/projects`) - Portfolio showcase with project details
- **About** (`/about`) - Company information and team members
- **Contact** (`/contact`) - Contact form and company information

## 🔧 API Endpoints

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get contact information

### Services
- `GET /api/services` - Get all services
- `GET /api/services/:id` - Get specific service
- `GET /api/services/category/:category` - Get services by category

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get specific project
- `GET /api/projects/category/:category` - Get projects by category

### Health Check
- `GET /api/health` - API health status

## 🎨 Customization

### Colors
The color scheme can be customized in `client/tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... more shades
  }
}
```

### Content
- Update company information in the respective page components
- Modify services and projects data in the server routes
- Update contact information in the Footer and Contact components

## 📦 Build for Production

```bash
# Build the frontend
cd client
npm run build

# Build the backend
cd server
npm run build
```

## 🌟 Features in Detail

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Optimized navigation for all screen sizes

### Performance
- Lazy loading for images
- Optimized bundle size
- Efficient animations

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly

### SEO Ready
- Meta tags for all pages
- Structured data markup
- Optimized for search engines

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 📞 Contact

CodableStudio - info@codablestudio.com

---

Built with ❤️ by CodableStudio 