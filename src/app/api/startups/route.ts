import { NextResponse } from "next/server";

// Dummy data
const startups = [
  {
    name: "TechFlex",
    slug: "techflex",
    description:
      "TechFlex offers flexible tech solutions for modern businesses.",
    logo: "https://techflex.com/logo.png",
    website: "https://techflex.com",
  },
  {
    name: "GreenStart",
    slug: "greenstart",
    description: "GreenStart promotes sustainable and eco-friendly technology.",
    logo: "https://greenstart.com/logo.png",
    website: "https://greenstart.com",
  },
  {
    name: "DataDyn",
    slug: "datadyn",
    description:
      "DataDyn is a leader in data analytics and business intelligence.",
    logo: "https://datadyn.com/logo.png",
    website: "https://datadyn.com",
  },
  {
    name: "SecurNode",
    slug: "securnode",
    description: "SecurNode specializes in advanced cybersecurity solutions.",
    logo: "https://securnode.com/logo.png",
    website: "https://securnode.com",
  },
  {
    name: "HealthVantage",
    slug: "healthvantage",
    description:
      "HealthVantage is committed to revolutionizing digital health.",
    logo: "https://healthvantage.com/logo.png",
    website: "https://healthvantage.com",
  },
  {
    name: "EduSight",
    slug: "edusight",
    description:
      "EduSight is enhancing education with cutting-edge technologies.",
    logo: "https://edusight.com/logo.png",
    website: "https://edusight.com",
  },
  {
    name: "AeroEdge",
    slug: "aeroedge",
    description:
      "AeroEdge is at the forefront of aerospace and defense technology.",
    logo: "https://aeroedge.com/logo.png",
    website: "https://aeroedge.com",
  },
  {
    name: "CyberShield",
    slug: "cybershield",
    description:
      "CyberShield provides robust protection for your digital world.",
    logo: "https://cybershield.com/logo.png",
    website: "https://cybershield.com",
  },
  {
    name: "AgriPlus",
    slug: "agriplus",
    description:
      "AgriPlus is digitizing agriculture for increased productivity.",
    logo: "https://agriplus.com/logo.png",
    website: "https://agriplus.com",
  },
  {
    name: "SmartCities",
    slug: "smartcities",
    description:
      "SmartCities develops technologies for the future of urban living.",
    logo: "https://smartcities.com/logo.png",
    website: "https://smartcities.com",
  },
];

export async function GET() {
  return NextResponse.json(startups);
}
