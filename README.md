<h2 align="center">
  Ansh Gupta - Portfolio Website<br/>
  Full Stack Developer Portfolio
</h2>

<br/>

<center>

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) &nbsp;
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) &nbsp;
[![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com)

</center>

## 🌟 About

A modern, responsive portfolio website built with React.js showcasing my projects, skills, and experience as a Full Stack Developer. Features an AI-powered chatbot, full-page scroll navigation, and dynamic project showcase.

## ✨ Features

- **🎨 Modern UI/UX** - Clean and professional design with smooth animations
- **📱 Fully Responsive** - Optimized for all devices (desktop, tablet, mobile)
- **🤖 AI Chatbot** - Interactive chatbot powered by Google Gemini API
- **📜 Full Page Scroll** - Smooth transitions between sections
- **💼 Projects Showcase** - Display projects with live demos and GitHub links
- **📄 Resume Download** - Floating download button for easy access
- **⚡ Particle Effects** - Dynamic background animations
- **📊 GitHub Activity** - Visual representation of GitHub contributions
- **🛠️ Skills Display** - Comprehensive showcase of technical skills

## 🚀 Built With

### Core Technologies
- **React.js** (v17.0.2) - Frontend framework
- **React Router** (v6.2.2) - Client-side routing
- **React Bootstrap** (v2.2.1) - UI components
- **Bootstrap** (v5.1.3) - CSS framework

### Additional Libraries
- **@google/generative-ai** - AI chatbot integration
- **react-icons** - Icon library
- **typewriter-effect** - Text animations
- **react-parallax-tilt** - 3D tilt effects
- **react-github-calendar** - GitHub activity visualization
- **react-tsparticles** - Particle animations
- **react-pdf** - PDF viewer

## 📦 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ansh-34/Portfolio-master.git
   cd Portfolio-master
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_GEMINI_API_KEY=your_gemini_api_key_here
   ```
   
   Get your Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

4. **Start the development server**
   ```bash
   npm start
   ```
   
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🎨 Customization Guide

### Update Personal Information

Navigate to the following files to customize with your information:

- **Name & Social Links**: `src/components/Home/Home.js`
- **Introduction**: `src/components/Home/Home2.js`
- **About Section**: `src/components/About/AboutCard.js`
- **GitHub Username**: `src/components/About/Github.js`
- **Technical Skills**: `src/components/About/Techstack.js`
- **Tools**: `src/components/About/Toolstack.js`
- **Projects**: `src/components/Projects/Projects.js`
- **Footer**: `src/components/Footer.js`

### Add Your Resume

1. Place your PDF in `src/Assets/`
2. Update the import path in `src/components/ResumeDownloadButton.js`

### Customize AI Chatbot

Edit the system prompt in `src/components/ChatBot.js` to match your background and experience.

## 📁 Project Structure

```
Portfolio-master/
├── public/
├── src/
│   ├── Assets/
│   │   ├── Projects/        # Project images
│   │   └── TechIcons/       # Technology icons
│   ├── components/
│   │   ├── About/           # About section components
│   │   ├── Home/            # Home page components
│   │   ├── Projects/        # Projects section
│   │   ├── ChatBot.js       # AI chatbot
│   │   ├── Footer.js
│   │   ├── Navbar.js
│   │   └── ...
│   ├── hooks/
│   │   └── useFullPageScroll.js
│   ├── App.js
│   └── style.css
├── .env
├── package.json
└── README.md
```

## 🔧 Available Scripts

```bash
npm start      # Run development server
npm run build  # Build for production
npm test       # Run tests
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Add `REACT_APP_GEMINI_API_KEY` in environment variables
4. Deploy!

### Netlify
1. Run `npm run build`
2. Deploy `build` folder to [Netlify](https://netlify.com)
3. Add environment variables in settings

### Netlify
1. Run `npm run build`
2. Deploy `build` folder to [Netlify](https://netlify.com)
3. Add environment variables in settings

## 🎯 Key Features Breakdown

### Full Page Scroll Navigation
- Automatic transitions between sections
- Scroll down at bottom → Next section
- Scroll up at top → Previous section

### AI Chatbot
- Powered by Google Gemini 1.5 Flash (free tier)
- Context-aware about portfolio content
- Floating interface with smooth animations
- Answers questions about projects, skills, and experience

### Resume Download
- Floating download button above chatbot
- One-click PDF download
- Always accessible from any page

## 👨‍💻 Author

**Ansh Gupta**
- Full Stack Developer
- GitHub: [@ansh-34](https://github.com/ansh-34)
- LinkedIn: [Ansh Gupta](https://www.linkedin.com/in/ansh-gupta-b64914250/)

## 🙏 Acknowledgments

- Original template inspiration from [soumyajit4419](https://github.com/soumyajit4419/Portfolio)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations from [React TSParticles](https://particles.js.org/)
- AI powered by [Google Gemini](https://ai.google.dev/)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

### Show your support

Give a ⭐ if you like this portfolio!
