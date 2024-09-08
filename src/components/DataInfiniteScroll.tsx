import React, { useEffect, useRef, useState } from "react";
import styles from "./styles/dataInfiniteScroll.module.scss";

const DataInfiniteScroll: React.FC = () => {
  const [items, setItems] = useState([
    "Encryption",
    "Firewall",
    "Hacker",
    "Malware",
    "Phishing",
    "Cyberattack",
    "Cybersecurity",
    "Authentication",
    "Biometrics",
    "Vulnerability",
    "Patch",
    "Password",
    "Identity",
    "Data breach",
    "Cybercrime",
    "Ransomware",
    "Endpoint security",
    "Network security",
  ]);

  const [itemTwo] = useState([
    "Intrusion detection",
    "Cyber hygiene",
    "Zero-day",
    "Social engineering",
    "Two-factor authentication",
    "Cyberwarfare",
    "Information security",
    "Cyber resilience",
    "Threat intelligence",
    "Sandboxing",
    "Penetration testing",
    "Access control",
    "Security audit",
    "Digital forensics",
    "Incident response",
    "Security policy",
    "Cyber insurance",
    "Secure coding",
    "Data encryption",
    "Secure socket layer (SSL)",
    "Virtual private network (VPN)",
    "Multi-factor authentication",
    "Secure shell (SSH)",
    "Denial-of-service (DoS)",
    "Distributed denial-of-service (DDoS)",
    "Security architecture",
    "Intrusion prevention system (IPS)",
    "Security awareness",
    "Risk assessment",
    "Cybersecurity framework",
    "Threat modeling",
  ]);
  const [isAnimating, setIsAnimating] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsAnimating(true);
      addAnimation();
    }
  }, []);

  const addAnimation = () => {
    const scrollerInner = scrollerRef?.current?.querySelector(
      `.${styles.scroller__inner}`
    );
    const scrollerContent = Array.from(scrollerInner?.children || []);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true) as HTMLElement;
      duplicatedItem.setAttribute("aria-hidden", "true");
      scrollerInner?.appendChild(duplicatedItem);
    });
  };

  return (
    <div>
      <div
        className={`${styles.scroller} ${isAnimating ? styles.animated : ""}`}
        data-speed="slow"
        data-animated={isAnimating ? "true" : "false"}
        ref={scrollerRef}
      >
        <ul className={`${styles.scroller__inner} ${styles.tagList}`}>
          {items.map((item, index) => (
            <li key={index} className={`${styles.tagListItem} text-white`}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`${styles.scroller} ${isAnimating ? styles.animated : ""}`}
        data-speed="slow"
        data-animated={isAnimating ? "true" : "false"}
        data-direction="right"
        ref={scrollerRef}
      >
        <ul className={`${styles.scroller__inner} ${styles.tagList}`}>
          {itemTwo.map((item, index) => (
            <li key={index} className={`${styles.tagListItem} text-white`}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DataInfiniteScroll;
