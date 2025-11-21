# EV Charging Station Finder

A modern, responsive web application for finding electric vehicle charging stations across the United States. Built with Next.js 14, TypeScript, and Supabase.

![EV Charging Station Finder](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript)
![Supabase](https://img.shields.io/badge/Supabase-Database-green?style=for-the-badge&logo=supabase)

## ✨ Features

- 🔍 **Advanced Search** - Search charging stations by city and filter by rating
- ⚡ **Real-time Data** - Connected to Supabase for live charging station information
- 🎨 **Modern Design** - Premium UI with glassmorphism, gradients, and smooth animations
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🚀 **SEO Optimized** - Proper meta tags, semantic HTML, and performance optimizations
- 💰 **AdSense Ready** - Pre-configured for Google AdSense integration
- ♿ **Accessible** - Built with accessibility best practices

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules with modern design system
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel-ready

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- A Supabase account (free tier works)

## 🚀 Getting Started

### 1. Clone and Install

```bash
# Install dependencies
npm install
```

### 2. Set Up Supabase

Follow the detailed instructions in [DATABASE_SETUP.md](./DATABASE_SETUP.md) to:
- Create a Supabase project
- Set up the database schema
- Import your charging station data

### 3. Configure Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-xxxxxxxxxxxxxxxxx
```

See `.env.local.example` for a template.

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
ev-charging-website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles and design system
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── SearchSection.tsx   # Search functionality
│   ├── About.tsx           # About section
│   ├── FAQ.tsx             # FAQ accordion
│   ├── Blog.tsx            # Blog preview
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer
├── lib/
│   └── supabase.ts         # Supabase client and queries
├── DATABASE_SETUP.md       # Database setup guide
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies
```

## 🎨 Design Features

- **Dark Mode** - Modern dark theme with vibrant accents
- **Glassmorphism** - Frosted glass effects on cards and overlays
- **Smooth Animations** - Fade-ins, hover effects, and micro-interactions
- **Gradient Overlays** - Eye-catching gradient backgrounds
- **Custom Typography** - Inter font from Google Fonts
- **Responsive Grid** - Adaptive layouts for all screen sizes

## 🔧 Configuration

### Google AdSense

1. Get approved for Google AdSense
2. Add your client ID to `.env.local`
3. AdSense script is automatically loaded in the layout

### Customization

- **Colors**: Edit CSS variables in `app/globals.css`
- **Content**: Update component text and data
- **Styling**: Modify module CSS files for each component

## 📊 Database Schema

The `charging_stations` table includes:

- Basic info (name, address, city, state, zip)
- Location (latitude, longitude)
- Technical specs (connector types, power output)
- User data (rating, reviews count)
- Operational info (pricing, availability, hours)

See [DATABASE_SETUP.md](./DATABASE_SETUP.md) for the complete schema.

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

Vercel will automatically detect Next.js and configure the build settings.

### Environment Variables on Vercel

Add these in your Vercel project settings:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_ADSENSE_CLIENT_ID` (optional)

## 📈 Performance Optimization

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic with Next.js App Router
- **CSS Modules**: Scoped styling with minimal bundle size
- **Static Generation**: Pre-rendered pages for fast performance

## 🐛 Troubleshooting

### Search returns no results
- Verify Supabase credentials in `.env.local`
- Check database has data
- Ensure Row Level Security policies allow public read

### Styling issues
- Clear browser cache
- Check for CSS module import errors
- Verify all CSS files are in the correct location

### Build errors
- Run `npm install` to ensure all dependencies are installed
- Check TypeScript errors with `npm run build`
- Verify Node.js version is 18+

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📧 Support

For questions or support, please contact support@evchargefinder.com

---

**Made with ❤️ for the EV community**
