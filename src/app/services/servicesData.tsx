import {
  FaShieldAlt,
  FaTools,
  FaNetworkWired,
  FaLock,
  FaDatabase,
  FaKey,
  FaLaptopCode,
  FaSearch,
} from "react-icons/fa";

interface Benefit {
  title: string;
  description: string;
  icon: JSX.Element;
}

export interface Service {
  title: string;
  subTitle: string; // Added subTitle field
  description: string;
  link: string;
  icon: JSX.Element;
  mainImage: string;
  topics: string[];
  benefits: Benefit[];
}

export const servicesData: Service[] = [
  {
    title: "Security and Risk Management",
    subTitle: "Comprehensive Solutions for Resilience", // Added subTitle
    description:
      "In an uncertain and ever-changing environment, security and risk management needs to be holistic and proactive. Over many years, Rhivet Networks has built the most comprehensive suite of security and risk competencies and solutions to enable our customers to confidently navigate risk and assure business resilience.",
    link: "services/security-risk-management",
    icon: <FaShieldAlt />,
    mainImage: "/images/security-and-risk-management.jpg",
    topics: [
      "Security Policies",
      "Frameworks",
      "Technologies",
      "Incident Response Plans",
    ],
    benefits: [
      {
        title: "Business Resilience",
        description:
          "Ensure continuity, compliance, and security to support your business growth in challenging and uncertain times.",
        icon: <FaTools />,
      },
      {
        title: "Compliance",
        description:
          "Achieve peace of mind by adhering to internal policies, external regulations, industry frameworks, and contractual obligations.",
        icon: <FaTools />,
      },
      {
        title: "Productivity",
        description:
          "Enhance productivity from anywhere with a secure and compliant organization.",
        icon: <FaTools />,
      },
      {
        title: "Cost Control",
        description:
          "Leverage expert teams for full security and compliance without expanding your skills pool, reducing the risk of costly breaches or penalties.",
        icon: <FaTools />,
      },
    ],
  },
  {
    title: "Security Assessment and Testing",
    subTitle: "Thorough Evaluation and Testing for Robust Security", // Added subTitle
    description:
      "Regularly assessing and testing your security measures is essential to ensure they are effective against potential threats. Rhivet Networks provides thorough security assessments and testing services to identify vulnerabilities and mitigate risks.",
    link: "services/security-assessment-testing",
    icon: <FaSearch />,
    mainImage: "/images/security-assessment-testing.jpg",
    topics: [
      "Vulnerability Assessments",
      "Penetration Testing",
      "Security Audits",
      "Risk Analysis",
    ],
    benefits: [
      {
        title: "Identify Vulnerabilities",
        description:
          "Detect and address security weaknesses before they can be exploited.",
        icon: <FaSearch />,
      },
      {
        title: "Mitigate Risks",
        description:
          "Reduce the risk of security breaches with comprehensive testing and assessment.",
        icon: <FaSearch />,
      },
      {
        title: "Compliance Assurance",
        description:
          "Ensure your security measures meet industry standards and regulatory requirements.",
        icon: <FaSearch />,
      },
      {
        title: "Improved Security Posture",
        description:
          "Strengthen your overall security framework through continuous assessment and improvement.",
        icon: <FaSearch />,
      },
    ],
  },
  {
    title: "Security Architecture and Engineering",
    subTitle: "Design and Implement Secure Systems", // Added subTitle
    description:
      "Designing and implementing robust security architectures is crucial for protecting your organization. Rhivet Networks offers expert security architecture and engineering services to ensure your systems are secure and resilient.",
    link: "services/security-architecture-engineering",
    icon: <FaTools />,
    mainImage: "/images/security-architecture-engineering.jpg",
    topics: [
      "System Design",
      "Security Protocols",
      "Architecture Review",
      "Engineering Best Practices",
    ],
    benefits: [
      {
        title: "Robust System Design",
        description:
          "Develop secure system architectures that withstand potential threats.",
        icon: <FaTools />,
      },
      {
        title: "Enhanced Security Protocols",
        description:
          "Implement advanced security protocols to protect sensitive data and communications.",
        icon: <FaTools />,
      },
      {
        title: "Architecture Review",
        description:
          "Conduct thorough reviews of your security architecture to identify and address weaknesses.",
        icon: <FaTools />,
      },
      {
        title: "Engineering Best Practices",
        description:
          "Apply industry best practices to ensure the highest level of security in your systems.",
        icon: <FaTools />,
      },
    ],
  },
  {
    title: "Communications and Network Security",
    subTitle: "Safeguard Your Communications and Networks", // Added subTitle
    description:
      "Protecting your communication channels and network infrastructure is essential for maintaining business integrity. Rhivet Networks provides advanced communications and network security solutions to safeguard your organization.",
    link: "services/communications-network-security",
    icon: <FaNetworkWired />,
    mainImage: "/images/communications-network-security.jpg",
    topics: [
      "Network Protection",
      "Secure Communication",
      "Firewall Management",
      "Intrusion Detection",
    ],
    benefits: [
      {
        title: "Network Protection",
        description:
          "Secure your network infrastructure against external and internal threats.",
        icon: <FaNetworkWired />,
      },
      {
        title: "Secure Communication",
        description:
          "Ensure the confidentiality and integrity of your communication channels.",
        icon: <FaNetworkWired />,
      },
      {
        title: "Firewall Management",
        description:
          "Implement and manage firewalls to protect your network from unauthorized access.",
        icon: <FaNetworkWired />,
      },
      {
        title: "Intrusion Detection",
        description: "Detect and respond to network intrusions in real-time.",
        icon: <FaNetworkWired />,
      },
    ],
  },
  {
    title: "Security Operations",
    subTitle: "Continuous Protection and Monitoring", // Added subTitle
    description:
      "Maintaining continuous security operations is key to protecting your organization from ongoing threats. Rhivet Networks offers comprehensive security operations services to monitor, detect, and respond to security incidents.",
    link: "services/security-operations",
    icon: <FaLock />,
    mainImage: "/images/security-operations.jpg",
    topics: [
      "Monitoring",
      "Incident Response",
      "Threat Management",
      "Operational Security",
    ],
    benefits: [
      {
        title: "Continuous Monitoring",
        description:
          "Keep a constant watch on your security environment to detect and respond to threats promptly.",
        icon: <FaLock />,
      },
      {
        title: "Incident Response",
        description:
          "Develop and implement effective incident response plans to handle security breaches.",
        icon: <FaLock />,
      },
      {
        title: "Threat Management",
        description:
          "Identify, analyze, and mitigate security threats in real-time.",
        icon: <FaLock />,
      },
      {
        title: "Operational Security",
        description:
          "Maintain the security of your operations through proactive and reactive measures.",
        icon: <FaLock />,
      },
    ],
  },
  {
    title: "Asset Security",
    subTitle: "Protecting Physical and Digital Resources", // Added subTitle
    description:
      "Protecting your physical and digital assets is crucial for business continuity. Rhivet Networks provides comprehensive asset security services to safeguard your valuable resources.",
    link: "services/asset-security",
    icon: <FaDatabase />,
    mainImage: "/images/asset-security.jpg",
    topics: [
      "Asset Identification",
      "Protection Strategies",
      "Data Security",
      "Asset Monitoring",
    ],
    benefits: [
      {
        title: "Asset Identification",
        description:
          "Identify and classify all your assets to understand their security needs.",
        icon: <FaDatabase />,
      },
      {
        title: "Protection Strategies",
        description:
          "Develop and implement strategies to protect your assets from threats.",
        icon: <FaDatabase />,
      },
      {
        title: "Data Security",
        description:
          "Ensure the security of your data through encryption, access controls, and regular audits.",
        icon: <FaDatabase />,
      },
      {
        title: "Asset Monitoring",
        description:
          "Continuously monitor your assets to detect and respond to security incidents.",
        icon: <FaDatabase />,
      },
    ],
  },
  {
    title: "Identity and Access Management",
    subTitle: "Control Access and Maintain Compliance", // Added subTitle
    description:
      "Managing identities and access rights is critical for ensuring security and compliance. Rhivet Networks offers robust identity and access management (IAM) solutions to control access to your resources.",
    link: "services/identity-access-management",
    icon: <FaKey />,
    mainImage: "/images/identity-access-management.jpg",
    topics: [
      "User Authentication",
      "Access Controls",
      "Identity Governance",
      "Single Sign-On (SSO)",
    ],
    benefits: [
      {
        title: "User Authentication",
        description:
          "Implement strong authentication methods to verify user identities.",
        icon: <FaKey />,
      },
      {
        title: "Access Controls",
        description:
          "Control access to your resources with granular access control policies.",
        icon: <FaKey />,
      },
      {
        title: "Identity Governance",
        description:
          "Ensure compliance with identity governance policies and procedures.",
        icon: <FaKey />,
      },
      {
        title: "Single Sign-On",
        description:
          "Enable users to access multiple systems with a single set of credentials through SSO solutions.",
        icon: <FaKey />,
      },
    ],
  },
  {
    title: "Software Development and Web Security",
    subTitle: "Comprehensive Security from Development to Web Access",
    description:
      "Safeguard your software and web applications with end-to-end security measures. Rhivet Networks offers a robust combination of secure software development practices and web protection services, including Web Application Firewalls (WAF) to prevent unauthorized access and mitigate cyber threats. Ensure security throughout the development lifecycle and protect your online assets.",
    link: "services/software-web-security",
    icon: <FaLaptopCode />,
    mainImage: "/images/software-web-security.jpg",
    topics: [
      "Secure Coding Practices",
      "Code Reviews",
      "Application Security",
      "DevSecOps Integration",
      "Web Application Firewalls (WAF)",
    ],
    benefits: [
      {
        title: "Secure Coding Practices",
        description:
          "Implement secure coding standards to minimize vulnerabilities in your software and web applications.",
        icon: <FaLaptopCode />,
      },
      {
        title: "Code Reviews",
        description:
          "Conduct thorough code reviews to identify and fix security flaws during the development process.",
        icon: <FaLaptopCode />,
      },
      {
        title: "Application Security",
        description:
          "Leverage advanced security protocols to protect your applications from potential threats and breaches.",
        icon: <FaLaptopCode />,
      },
      {
        title: "DevSecOps Integration",
        description:
          "Embed security into your development and operations processes, ensuring continuous security from design to deployment.",
        icon: <FaLaptopCode />,
      },
      {
        title: "Web Application Firewalls (WAF)",
        description:
          "Deploy Web Application Firewalls to prevent unauthorized access and defend against common web attacks, such as SQL injection and cross-site scripting.",
        icon: <FaLaptopCode />,
      },
    ],
  },
];
