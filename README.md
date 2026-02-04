# Disaster Risk Management Web Application 🚨

A simple, clean MVP web application for commercial building disaster preparedness. Built with Next.js App Router and JavaScript.

## 🎯 Purpose

This application helps building occupants and staff to:
- View different types of disasters and their procedures
- Access step-by-step emergency action plans
- See emergency routes and exit locations
- Quickly access emergency contact information

## 🏗️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: JavaScript (no TypeScript)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Data**: Static JSON objects (no database)

## 📁 Project Structure

```
/app
├── app/
│   ├── page.js                    # Home page with disaster categories
│   ├── disaster/[type]/page.js    # Dynamic disaster detail pages
│   ├── routes/page.js             # Emergency routes viewer
│   ├── layout.js                  # Root layout
│   └── globals.css                # Global styles
├── lib/
│   └── disasterData.js            # Disaster data, contacts, and routes
├── components/ui/                 # shadcn/ui components
├── public/
│   └── routes/                    # Emergency route images
└── README.md                      # This file
```

## 🌟 Features

### 1. Home / Dashboard
- Lists 4 disaster categories:
  - 🔥 Fire (Red theme)
  - ⚠️ Earthquake (Yellow theme)
  - 💧 Flood (Blue theme)
  - ⚡ Power Outage (Gray theme)
- Emergency contacts section
- Quick access to emergency routes

### 2. Disaster Detail Pages
- Color-coded by disaster type
- Short description
- Step-by-step emergency procedures (9-10 steps each)
- Link to emergency routes
- Additional safety tips

### 3. Emergency Routes Page
- Displays emergency route maps by floor
- Image viewer with zoom capability
- Assembly point information
- Stairwell and emergency equipment locations
- Evacuation safety guidelines

### 4. Emergency Contacts
- Fire Department: 911
- Building Security: (555) 123-4567
- Building Management: (555) 123-4568
- Facilities Maintenance: (555) 123-4569

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed
- Yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd /app
```

2. Install dependencies (if needed):
```bash
yarn install
```

3. Start the development server:
```bash
yarn dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

## 📸 Adding Emergency Route Images

To add your building's emergency route images:

1. Place your floor plan images in `/public/routes/` folder
2. Use these filenames:
   - `ground-floor.jpg` - Ground floor emergency routes
   - `second-floor.jpg` - Second floor emergency routes
   - `third-floor.jpg` - Third floor emergency routes

3. Recommended image format:
   - Format: JPG or PNG
   - Size: 1920x1080 or similar (maintain aspect ratio)
   - Clear labeling of exits, stairwells, and assembly points

## 🎨 Design Guidelines

### Color Coding
- **Fire**: Red (#EF4444)
- **Earthquake**: Yellow (#F59E0B)
- **Flood**: Blue (#3B82F6)
- **Power Outage**: Gray (#6B7280)

### UI Principles
- Mobile-first responsive design
- Large, accessible buttons
- High contrast for readability
- Clear visual hierarchy
- Minimalist and modern styling

## 📝 Customizing Data

### Disaster Information
Edit `/lib/disasterData.js` to customize:
- Disaster procedures
- Emergency contacts
- Route floor information

Example:
```javascript
export const disasters = {
  fire: {
    name: 'Fire',
    description: 'Your custom description',
    procedures: [
      'Step 1',
      'Step 2',
      // Add more steps...
    ]
  }
  // Add more disaster types...
};
```

### Emergency Contacts
Update the `emergencyContacts` array in `/lib/disasterData.js`:
```javascript
export const emergencyContacts = [
  {
    name: 'Fire Department',
    number: '911',
    description: 'Fire emergencies, medical emergencies'
  }
  // Add more contacts...
];
```

## 🔧 Available Routes

- `/` - Home page with all disaster categories
- `/disaster/fire` - Fire emergency procedures
- `/disaster/earthquake` - Earthquake emergency procedures
- `/disaster/flood` - Flood emergency procedures
- `/disaster/power_outage` - Power outage procedures
- `/routes` - Emergency routes and exits viewer

## 🎯 MVP Scope

### ✅ Included
- Static disaster information
- Emergency procedures
- Emergency route viewer
- Emergency contacts
- Mobile-responsive design
- Color-coded disaster types

### ❌ Not Included (By Design)
- User authentication
- Real-time alerts
- Push notifications
- Map APIs / Interactive maps
- Admin dashboard
- Database integration
- Sensors or monitoring

## 🛠️ Development Commands

```bash
# Start development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start

# Restart services (if using supervisor)
sudo supervisorctl restart nextjs
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🧪 Testing the Application

1. **Home Page**: Verify all 4 disaster cards are displayed
2. **Navigation**: Click each disaster card and verify detail pages load
3. **Procedures**: Check that all emergency steps are visible
4. **Routes Page**: Ensure routes page loads with floor information
5. **Contacts**: Test that emergency contact phone numbers are clickable
6. **Mobile**: Test on mobile viewport (responsive design)

## 📚 Learning Resources

This project is beginner-friendly and includes:
- Comments in code explaining key concepts
- Simple, readable code structure
- No complex state management
- Straightforward Next.js App Router patterns

### Key Next.js Concepts Used
- **App Router**: File-based routing
- **Dynamic Routes**: `[type]` parameter for disaster pages
- **Client Components**: `'use client'` for interactive features
- **Static Data**: No database, just JavaScript objects

## 🤝 Contributing

To add new disaster types:
1. Add disaster data to `/lib/disasterData.js`
2. Follow the existing data structure
3. Choose an appropriate Lucide icon
4. Test the new disaster type page

## 📄 License

This is an MVP template for educational and commercial building safety purposes.

## 🆘 Emergency Information

**⚠️ IMPORTANT**: This is an informational tool only. In case of real emergencies:
1. **Call 911 immediately**
2. Follow your building's official emergency procedures
3. Evacuate if instructed to do so
4. Never put yourself in danger

---

Built with ❤️ for building safety and occupant preparedness.
