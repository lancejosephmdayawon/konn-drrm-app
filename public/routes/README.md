# Emergency Route Images

Place your building's emergency route floor plan images in this directory.

## Required Images

1. **ground-floor.jpg** - Ground floor emergency exits and routes
2. **second-floor.jpg** - Second floor emergency exits and routes  
3. **third-floor.jpg** - Third floor emergency exits and routes

## Image Guidelines

### Format
- Supported formats: JPG, PNG, or JPEG
- Recommended format: JPG for smaller file sizes

### Size
- Recommended dimensions: 1920x1080 pixels
- Aspect ratio: 16:9 or similar
- File size: Keep under 500KB for faster loading

### Content Requirements

Your floor plan images should clearly show:

✅ **Required Elements:**
- All emergency exits (clearly marked)
- Stairwell locations
- Primary evacuation routes (use arrows)
- Assembly point location
- "You Are Here" indicators (if applicable)
- Fire extinguisher locations
- First aid kit locations

✅ **Best Practices:**
- Use high contrast colors (red for exits, green for safe zones)
- Include a legend/key
- Mark evacuation direction with arrows
- Label all rooms and areas
- Show north direction indicator
- Include building address

✅ **Accessibility:**
- Clear, readable text (minimum 18pt font)
- Color-blind friendly color schemes
- Simple, uncluttered layout

## How to Create Emergency Route Images

### Option 1: Professional Service
Hire a building safety consultant to create official floor plans.

### Option 2: Use Existing Plans
1. Get building blueprints from management
2. Mark emergency routes in red
3. Add exit signs and assembly points
4. Export as high-resolution image

### Option 3: DIY with Design Tools
Use tools like:
- Canva (templates available)
- Figma
- Adobe Illustrator
- Lucidchart
- SmartDraw

## Example Structure

```
Building A - Ground Floor
├── North Exit → Parking Lot Assembly Point
├── South Exit → Garden Assembly Point  
├── East Exit → Side Street
├── Main Stairwell (Northwest)
└── Emergency Stairwell (Southeast)
```

## Testing Images

After adding images:
1. Restart the Next.js server
2. Navigate to http://localhost:3000/routes
3. Verify images load correctly
4. Test zoom functionality
5. Check mobile responsiveness

## Legal & Safety Notice

⚠️ **Important:**
- Ensure floor plans comply with local fire safety regulations
- Update images whenever building layout changes
- Review with building management and fire marshal
- Post physical copies near elevators and common areas
- Conduct regular evacuation drills using these routes

---

For questions about building safety requirements, consult:
- Local fire department
- Building management
- Fire safety consultant
- OSHA guidelines (for workplace buildings)
