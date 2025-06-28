# 🎓 LearnHub - E-Learning Platform

A modern, responsive e-learning platform built with Next.js, featuring course management, progress tracking, and interactive video learning experiences.

## ✨ Features

### 🏠 Dashboard
- **Personal Learning Dashboard** - Overview of enrolled courses and learning progress
- **Learning Statistics** - Track hours learned, certificates earned, and study streaks
- **Continue Learning** - Quick access to recently accessed courses
- **Course Recommendations** - Personalized course suggestions based on learning history

### 📚 Course Management
- **Course Catalog** - Browse comprehensive course library with search and filtering
- **Advanced Filtering** - Filter by category, level, rating, and price
- **Course Details** - Detailed course information with curriculum, reviews, and instructor profiles
- **Enrollment System** - Easy course enrollment with progress tracking

### 🎥 Video Learning
- **Integrated Video Player** - HTML5 video player with full controls
- **Lesson Navigation** - Sequential lesson progression with completion tracking
- **Video Thumbnails** - Preview images for all video content
- **Locked Content** - Premium content protection for paid courses

### 📊 Progress Tracking
- **Visual Progress Bars** - Real-time progress visualization
- **Lesson Completion** - Track individual lesson completion status
- **Learning Analytics** - Detailed statistics on learning patterns
- **Achievement System** - Badges and milestones for learning goals

### 👤 User Profile
- **Personal Profile** - Comprehensive user dashboard
- **Course History** - Complete record of enrolled and completed courses
- **Certificates** - Digital certificate management and downloads
- **Achievement Gallery** - Display of earned badges and accomplishments

### 📱 Responsive Design
- **Mobile-First** - Optimized for all device sizes
- **Touch-Friendly** - Intuitive mobile navigation and interactions
- **Cross-Browser** - Compatible with all modern browsers

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **State Management:** React Hooks
- **Responsive Design:** Mobile-first approach

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/learnhub-elearning.git
   cd learnhub-elearning
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
learnhub-elearning/
├── app/                    # Next.js App Router pages
│   ├── courses/           # Course-related pages
│   │   ├── [id]/         # Dynamic course detail pages
│   │   └── page.tsx      # Course catalog
│   ├── profile/          # User profile pages
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Dashboard/home page
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   └── navigation.tsx    # Main navigation component
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
└── public/               # Static assets
```

## 🎨 Design System

### Color Palette
- **Primary:** Blue (#2563eb)
- **Secondary:** Gray (#6b7280)
- **Success:** Green (#10b981)
- **Warning:** Yellow (#f59e0b)
- **Error:** Red (#ef4444)

### Typography
- **Headings:** Inter font family
- **Body:** System font stack
- **Code:** Monospace

## 📱 Pages Overview

### 🏠 Dashboard (`/`)
- Welcome message and user stats
- Continue learning section
- Course recommendations
- Learning progress overview

### 📚 Courses (`/courses`)
- Complete course catalog
- Search and filter functionality
- Course cards with ratings and pricing
- Category-based browsing

### 🎥 Course Detail (`/courses/[id]`)
- Video player with lesson navigation
- Course information tabs (Overview, Curriculum, Reviews)
- Instructor profile
- Enrollment and progress tracking

### 👤 Profile (`/profile`)
- User statistics and achievements
- Enrolled and completed courses
- Certificate management
- Learning history

## 🔧 Customization

### Adding New Courses
1. Update the course data in the respective page components
2. Add course thumbnails to the `public` directory
3. Configure video sources for the video player

### Styling Modifications
- Modify `tailwind.config.ts` for theme customization
- Update component styles in individual files
- Customize the color palette in the design system

### Adding New Features
- Create new pages in the `app` directory
- Add reusable components in the `components` directory
- Implement custom hooks in the `hooks` directory

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with automatic builds

### Other Platforms
- **Netlify:** Connect GitHub repo and deploy
- **AWS Amplify:** Use the Amplify console
- **Docker:** Use the included Dockerfile

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- **shadcn/ui** for the beautiful UI components
- **Lucide React** for the icon library
- **Tailwind CSS** for the utility-first CSS framework
- **Next.js** team for the amazing React framework
