export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  badge: string;
  summary: string;
  glimpse: {
    headline: string;
    stats: { label: string; value: string }[];
    coreTakeaway: string;
  };
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  period: string;
  badge: string;
  honors: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Saptang Labs",
    role: "Software Engineer — Excalibur Bot-Detection PoC",
    location: "Chennai / Bengaluru, India",
    period: "Jul. 2022 – Jun. 2024",
    badge: "80M+ EVENTS/HR SCALE",
    summary:
      "Led 3 engineers in designing, load-testing, and validating an end-to-end bot-mitigation platform benchmarked at 80M+ browser events per hour (6 TB/day). Engineered high-concurrency AWS reference architecture, custom C++ NGINX reverse-proxy filtering (<500ms blocking), and automated CI/CD observability pipelines.",
    glimpse: {
      headline: "High-Throughput Bot-Detection & Distributed Cloud Infrastructure",
      stats: [
        { label: "Throughput", value: "80M+ events/hr" },
        { label: "Traffic Volume", value: "6 TB / day" },
        { label: "Concurrency", value: "60,000 RPS" },
        { label: "p99 Latency", value: "100 ms" },
      ],
      coreTakeaway:
        "Led 3 engineers in delivering a high-scale bot-mitigation platform on AWS (200+ EC2s), custom C++ NGINX reverse-proxy filtering, and automated CI/CD pipelines.",
    },
    highlights: [
      "Led 3 engineers in designing and validating an end-to-end bot-mitigation platform benchmarked at 80M+ browser events/hour (6 TB/day), translating input from 5+ enterprise stakeholders into technical scope.",
      "Architected AWS cloud reference infrastructure (EC2, VPC, CloudFront) and load-tested with 200+ EC2 instances, validating 60,000 RPS at 100ms p99 API latency.",
      "Developed a custom C++ NGINX reverse-proxy/WAF module integrating real-time threat detection directly into the traffic path with demonstrated blocking within 500ms.",
      "Built a Flask and React analytics dashboard backed by Elasticsearch to investigate traffic patterns and visualize bot classification forensics in real time.",
      "Evaluated a 300+ rule detection engine using data analysis and AI-assisted testing, improving query execution speed by 36% and cutting false positives by 40%.",
      "Automated deployments with GitHub Actions and Jenkins, enabling 5 iterations per week and slashing deployment time by 88% (from 1 workday to 1 hour).",
      "Instrumented end-to-end observability with Prometheus, Grafana, and CloudWatch; validated EC2 Auto Scaling recovery within 60 seconds during failure testing.",
    ],
    technologies: [
      "Python (FastAPI, Flask)",
      "C++",
      "Go",
      "AWS (EC2, VPC, CloudFront)",
      "NGINX",
      "Docker",
      "Elasticsearch",
      "PostgreSQL",
      "Prometheus & Grafana",
      "Jenkins & GitHub Actions",
      "Kafka / RabbitMQ",
    ],
  },
  {
    company: "Saptang Labs",
    role: "Cybersecurity Intern",
    location: "Chennai / Remote",
    period: "Dec. 2021 – Jun. 2022",
    badge: "INTER-IIT GOLD MEDALIST",
    summary:
      "Secured pre-placement internship offer after winning Gold in the National NetSec Hackathon at Inter-IIT Tech Meet 9.0. Built and validated security proof-of-concepts in containerized environments.",
    glimpse: {
      headline: "Exploit Research & Sandbox Security PoCs",
      stats: [
        { label: "Hackathon", value: "Gold Medalist" },
        { label: "PoCs Tested", value: "8 CVEs" },
        { label: "Environment", value: "Docker Sandbox" },
      ],
      coreTakeaway:
        "Won Gold at Inter-IIT Tech Meet 9.0 representing IIT Bombay; developed 8 reproducible CVE exploit testbeds in isolated Docker containers.",
    },
    highlights: [
      "Won Gold in the NetSec Hackathon at Inter-IIT Tech Meet 9.0 representing IIT Bombay; received internship offer from Saptang Labs.",
      "Developed and tested 8 proof-of-concept implementations for CVE vulnerabilities in isolated Docker sandbox environments; documented technical findings and presented remediation insights to core engineering teams.",
    ],
    technologies: [
      "Python",
      "Docker",
      "Network Security",
      "CVE Remediation",
      "Linux / Bash",
    ],
  },
];

export const EDUCATION: EducationItem = {
  institution: "Indian Institute of Technology Bombay (IIT Bombay)",
  degree: "Bachelor of Technology (B.Tech)",
  location: "Mumbai, India",
  period: "2018 – 2022",
  badge: "INTER-IIT TECH MEET GOLD MEDALIST",
  honors: [
    "Gold Medalist — National NetSec Hackathon (Inter-IIT Tech Meet 9.0) representing IIT Bombay.",
    "Graduated from India's premier engineering & technology institution with rigorous analytical training.",
    "Demonstrated excellence in systems security, problem-solving, and large-scale engineering design.",
  ],
};
