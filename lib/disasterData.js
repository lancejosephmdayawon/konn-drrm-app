// Disaster data for the application
export const disasters = {
  fire: {
    id: "fire",
    name: "Fire",
    icon: "Flame",
    color: "red",
    bgColor: "bg-red-50",
    borderColor: "border-red-500",
    textColor: "text-red-700",
    iconBg: "bg-red-100",
    description:
      "In case of fire, remain calm and follow the evacuation procedures. Do not use elevators.",
    procedures: [
      "Stay calm and alert others around you",
      "Activate the nearest fire alarm",
      "Evacuate immediately using the nearest safe exit",
      "Do NOT use elevators - use stairs only",
      "If smoke is present, stay low to the ground",
      "Feel doors before opening - if hot, find another route",
      "Proceed to the designated assembly point",
      "Call emergency services: Fire Department",
      "Do not re-enter the building until cleared by authorities",
    ],
  },
  earthquake: {
    id: "earthquake",
    name: "Earthquake",
    icon: "AlertTriangle",
    color: "yellow",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-500",
    textColor: "text-yellow-700",
    iconBg: "bg-yellow-100",
    description:
      "During an earthquake, protect yourself immediately. Drop, Cover, and Hold On.",
    procedures: [
      "DROP to your hands and knees immediately",
      "Take COVER under a sturdy desk or table",
      "HOLD ON to your shelter and be prepared to move with it",
      "Stay away from windows, glass, and heavy objects",
      "If outdoors, move to an open area away from buildings",
      "Stay where you are until shaking stops",
      "After shaking stops, evacuate if building is damaged",
      "Use stairs, not elevators",
      "Watch for falling debris during evacuation",
      "Proceed to the designated assembly point",
    ],
  },
  flood: {
    id: "flood",
    name: "Flood",
    icon: "Droplets",
    color: "blue",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-500",
    textColor: "text-blue-700",
    iconBg: "bg-blue-100",
    description:
      "If flooding occurs, move to higher ground immediately. Avoid contact with floodwater.",
    procedures: [
      "Move immediately to higher floors",
      "Avoid basements and lower levels",
      "Do not walk through flowing water",
      "Turn off electricity if water is rising",
      "Gather emergency supplies if safe to do so",
      "Stay away from electrical equipment and outlets",
      "Do not use elevators",
      "Call for help if trapped",
      "Wait for official instructions before leaving",
      "Follow evacuation orders immediately",
    ],
  },
  power_outage: {
    id: "power_outage",
    name: "Power Outage",
    icon: "Power",
    color: "gray",
    bgColor: "bg-gray-50",
    borderColor: "border-gray-500",
    textColor: "text-gray-700",
    iconBg: "bg-gray-100",
    description:
      "During a power outage, stay calm and use emergency lighting. Follow building protocols.",
    procedures: [
      "Remain calm and stay in place",
      "Use flashlights or phone lights (not candles)",
      "Unplug sensitive electronic equipment",
      "Do not use elevators - use stairs with caution",
      "Keep refrigerators and freezers closed",
      "Turn off or disconnect appliances to prevent damage from power surge",
      "Report the outage to building management",
      "Wait for official instructions",
      "Use battery-powered radio for updates",
      "If evacuation is necessary, follow emergency exit routes",
    ],
  },
};

// Emergency contacts
export const emergencyContacts = [
  {
    name: "Fire Department",
    number: "911",
    description: "Fire emergencies, medical emergencies",
  },
  {
    name: "Building Security",
    number: "(555) 123-4567",
    description: "24/7 security office",
  },
  {
    name: "Building Management",
    number: "(555) 123-4568",
    description: "Administrative office (Mon-Fri 9AM-5PM)",
  },
  {
    name: "Facilities Maintenance",
    number: "(555) 123-4569",
    description: "Power, water, structural issues",
  },
];

// Emergency route images
export const emergencyRoutes = [
  {
    id: 1,
    floor: "Ground Floor",
    image: "/routes/ground-floor.png",
    description: "Main exits and assembly point",
  },
  {
    id: 2,
    floor: "Second Floor",
    image: "/routes/second-floor.png",
    description: "Stairwell locations and emergency exits",
  },
  {
    id: 3,
    floor: "Third Floor",
    image: "/routes/third-floor.png",
    description: "Stairwell locations and emergency exits",
  },
  {
    id: 4,
    floor: "Fourth Floor",
    image: "/routes/fourth-floor.png",
    description: "Stairwell locations and emergency exits",
  },
];
