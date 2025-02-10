import {
  Code2,
  Smartphone,
  Palette,
  Cloud,
  Database,
  Shield,
  Globe2,
  Settings,
  Cpu,
  LineChart,
} from "lucide-react";

export interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
  features: string[];
  slug: string;
}

export const services: Service[] = [
  {
    icon: Code2,
    title: "Web Development",
    slug: "web-development",
    description:
      "Create powerful, scalable web applications using cutting-edge technologies",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&w=500&q=80&auto=format",
    features: [
      "Custom Web Applications",
      "E-commerce Solutions",
      "Progressive Web Apps",
      "API Development",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    slug: "mobile-development",
    description:
      "Build native and cross-platform mobile applications for iOS and Android",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&w=500&q=80&auto=format",
    features: [
      "iOS Development",
      "Android Development",
      "Cross-platform Apps",
      "Mobile UI/UX",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description:
      "Create intuitive and engaging user experiences with modern design principles",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&w=500&q=80&auto=format",
    features: [
      "User Interface Design",
      "User Experience Design",
      "Design Systems",
      "Prototyping",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    slug: "cloud-services",
    description:
      "Leverage cloud technologies for scalable and reliable infrastructure",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&w=500&q=80&auto=format",
    features: [
      "Cloud Migration",
      "AWS Solutions",
      "Azure Services",
      "Cloud Security",
    ],
  },
  {
    icon: Database,
    title: "Database Solutions",
    slug: "database-solutions",
    description:
      "Design and implement efficient database architectures for your applications",
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&w=500&q=80&auto=format",
    features: [
      "Database Design",
      "Data Migration",
      "Performance Optimization",
      "Data Security",
    ],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    slug: "cybersecurity",
    description:
      "Protect your digital assets with comprehensive security solutions",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&w=500&q=80&auto=format",
    features: [
      "Security Audits",
      "Penetration Testing",
      "Security Training",
      "Incident Response",
    ],
  },
  {
    icon: Globe2,
    title: "Digital Marketing",
    slug: "digital-marketing",
    description:
      "Grow your online presence with data-driven marketing strategies",
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&w=500&q=80&auto=format",
    features: [
      "SEO Optimization",
      "Content Marketing",
      "Social Media",
      "Analytics",
    ],
  },
  {
    icon: Settings,
    title: "IT Consulting",
    slug: "it-consulting",
    description:
      "Get expert guidance on technology strategy and implementation",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&w=500&q=80&auto=format",
    features: [
      "Technology Strategy",
      "Digital Transformation",
      "Process Optimization",
      "IT Assessment",
    ],
  },
  {
    icon: Cpu,
    title: "AI Solutions",
    slug: "ai-solutions",
    description:
      "Implement artificial intelligence to automate and enhance your business",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&w=500&q=80&auto=format",
    features: [
      "Machine Learning",
      "Natural Language Processing",
      "Computer Vision",
      "AI Integration",
    ],
  },
  {
    icon: LineChart,
    title: "Analytics",
    slug: "analytics",
    description:
      "Transform your data into actionable insights for better decision making",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&w=500&q=80&auto=format",
    features: [
      "Data Analytics",
      "Business Intelligence",
      "Predictive Analytics",
      "Custom Dashboards",
    ],
  },
];
