import type {
  Service,
  CaseStudy,
  TrainingProgram,
  Testimonial,
  Stat,
  ProcessStep,
  FaqItem,
  NavItem,
} from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "AI Solutions", href: "#ai" },
  { label: "Case Studies", href: "#cases" },
  { label: "Training", href: "#training" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

export const STATS: Stat[] = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 200, suffix: "+", label: "Professionals Mentored" },
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 1000, suffix: "+", label: "Automated Test Cases" },
  { value: 95, suffix: "%", label: "Client Satisfaction" },
];

export const SERVICES: Service[] = [
  {
    id: "qa-leadership",
    icon: "🎯",
    title: "QA Leadership",
    description:
      "Strategic quality governance for engineering organizations looking to scale delivery with confidence.",
    bullets: [
      "QA Audits & Maturity Assessment",
      "Quality Metrics & OKRs",
      "Release Readiness Frameworks",
      "Team Mentoring & Coaching",
      "Process Improvement",
    ],
  },
  {
    id: "playwright",
    icon: "🎭",
    title: "Playwright Automation",
    description:
      "Modern end-to-end automation with enterprise-grade Playwright frameworks built to scale with your product.",
    bullets: [
      "Framework Architecture Design",
      "CI/CD Pipeline Integration",
      "Allure & Custom Reporting",
      "Cross-Browser & Visual Testing",
    ],
  },
  {
    id: "api-testing",
    icon: "🔌",
    title: "API Testing",
    description:
      "Comprehensive API quality strategies covering REST, GraphQL, and microservice contract testing.",
    bullets: [
      "Postman Collections & Monitors",
      "Playwright API Automation",
      "REST Assured Frameworks",
      "Contract Testing with Pact",
    ],
  },
  {
    id: "performance",
    icon: "📊",
    title: "Performance Engineering",
    description:
      "Load, stress, and scalability testing to ensure your system performs reliably under any condition.",
    bullets: [
      "JMeter & k6 Frameworks",
      "Load & Stress Testing",
      "Performance Baseline Reports",
      "Scalability Assessment",
    ],
  },
  {
    id: "ai-qa",
    icon: "🤖",
    title: "AI-Assisted QA",
    description:
      "Harness AI to accelerate test creation, defect prediction, and intelligent regression optimization.",
    bullets: [
      "AI Test Case Generation",
      "Requirement Analysis",
      "Intelligent Test Data",
      "Regression Optimization",
      "Defect Analytics",
    ],
  },
  {
    id: "training",
    icon: "🎓",
    title: "Corporate Training",
    description:
      "Hands-on training programs that upskill your QA team with modern tools and industry best practices.",
    bullets: [
      "Playwright & Selenium",
      "API & Performance Testing",
      "QA Leadership Program",
      "AI for Test Engineers",
    ],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "fintech-playwright",
    industry: "FinTech",
    title: "Playwright Framework Cuts 5-Day Regression to 4 Hours",
    challenge:
      "Manual regression testing required 5 business days per release cycle, creating a critical bottleneck blocking product velocity.",
    solution:
      "Built end-to-end Playwright automation framework with parallel execution, CI/CD integration, and Allure reporting dashboards.",
    tools: ["Playwright", "GitHub Actions", "Allure", "Docker"],
    timeline: "6 weeks",
    result: "Regression reduced from 5 days → 4 hours (95% faster)",
    resultIcon: "🚀",
    metric: "95% faster",
  },
  {
    id: "healthcare-governance",
    industry: "Healthcare",
    title: "Quality Governance Reduces Escaped Defects by 40%",
    challenge:
      "High rate of production defects causing patient-facing incidents, eroding user trust and significantly increasing support costs.",
    solution:
      "Implemented Quality Governance Framework with shift-left testing, risk-based test design, and automated release quality gates.",
    tools: ["Jira", "Azure DevOps", "Postman", "REST Assured"],
    timeline: "8 weeks",
    result: "40% reduction in escaped production defects",
    resultIcon: "🛡️",
    metric: "40% fewer defects",
  },
  {
    id: "saas-cicd",
    industry: "Enterprise SaaS",
    title: "CI/CD Quality Gates Double Release Frequency",
    challenge:
      "Slow monthly release cycle due to manual testing bottlenecks and lack of automated quality gates in the delivery pipeline.",
    solution:
      "Designed comprehensive CI/CD quality gates with automated smoke tests, performance checks, and security scanning integration.",
    tools: ["k6", "Playwright", "GitHub Actions", "AWS"],
    timeline: "10 weeks",
    result: "Release frequency doubled — monthly to bi-weekly",
    resultIcon: "⚡",
    metric: "2× release speed",
  },
];

export const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    id: "playwright-masterclass",
    number: "01",
    title: "Playwright Automation Masterclass",
    duration: "3 Days",
    audience: "QA Engineers",
    mode: "Hands-on",
    description:
      "Complete Playwright framework from zero to CI/CD pipeline. Page Object Model, API testing, visual comparisons, and parallel execution.",
    curriculum: [
      "Playwright architecture & setup",
      "Page Object Model patterns",
      "API testing with Playwright",
      "Visual regression testing",
      "Parallel execution & sharding",
      "CI/CD with GitHub Actions",
      "Allure reporting setup",
    ],
    outcomes: [
      "Build production-grade Playwright frameworks",
      "Integrate automation into CI/CD pipelines",
      "Implement cross-browser testing strategies",
    ],
  },
  {
    id: "selenium-bootcamp",
    number: "02",
    title: "Selenium WebDriver Bootcamp",
    duration: "2 Days",
    audience: "Beginners",
    mode: "Live Coding",
    description:
      "Core Selenium concepts, WebDriver architecture, TestNG/JUnit integration, and building maintainable automation suites.",
    curriculum: [
      "WebDriver fundamentals",
      "Locator strategies",
      "TestNG framework",
      "Page Object Model",
      "Maven & dependency management",
      "Reporting & screenshots",
    ],
    outcomes: [
      "Write reliable Selenium automation",
      "Use TestNG for test management",
      "Apply best practices for maintainability",
    ],
  },
  {
    id: "api-testing-workshop",
    number: "03",
    title: "API Testing Workshop",
    duration: "1 Day",
    audience: "All Levels",
    mode: "Workshop",
    description:
      "REST API fundamentals, Postman collections, Newman CI integration, and REST Assured automation patterns.",
    curriculum: [
      "REST API fundamentals",
      "Postman collections & environments",
      "Newman for CI/CD",
      "REST Assured automation",
      "Authentication patterns",
      "Contract testing intro",
    ],
    outcomes: [
      "Design comprehensive API test suites",
      "Automate API tests in CI pipelines",
      "Apply contract testing concepts",
    ],
  },
  {
    id: "performance-testing",
    number: "04",
    title: "Performance Testing with JMeter & k6",
    duration: "2 Days",
    audience: "QA / DevOps",
    mode: "Labs",
    description:
      "Load test planning, JMeter scripting, k6 JavaScript tests, result analysis, and integrating performance gates in CI pipelines.",
    curriculum: [
      "Performance testing fundamentals",
      "JMeter test plan design",
      "k6 JavaScript scripting",
      "Distributed load generation",
      "Performance analysis & reporting",
      "CI/CD performance gates",
    ],
    outcomes: [
      "Design realistic load test scenarios",
      "Analyze and interpret performance results",
      "Integrate performance testing in CI",
    ],
  },
  {
    id: "qa-leadership",
    number: "05",
    title: "QA Leadership Program",
    duration: "2 Days",
    audience: "QA Leads",
    mode: "Strategy",
    description:
      "Quality strategy, team building, metrics-driven QA, stakeholder communication, and building a culture of quality.",
    curriculum: [
      "Quality engineering strategy",
      "Team structure & hiring",
      "Metrics & OKRs for QA",
      "Stakeholder communication",
      "Building quality culture",
      "Risk-based testing",
    ],
    outcomes: [
      "Lead QA transformations",
      "Build and mentor QA teams",
      "Drive quality as a business outcome",
    ],
  },
  {
    id: "ai-testing",
    number: "06",
    title: "AI for Test Engineers",
    duration: "1 Day",
    audience: "QA Engineers",
    mode: "Future-Ready",
    description:
      "Practical AI tools for test case generation, defect prediction, intelligent test data, and AI-assisted automation writing.",
    curriculum: [
      "AI tools landscape for QA",
      "Prompt engineering for test cases",
      "AI-assisted test data generation",
      "Defect prediction models",
      "Co-pilot for test automation",
      "Regression optimization with AI",
    ],
    outcomes: [
      "Use AI to accelerate test creation",
      "Apply predictive defect analytics",
      "Optimize regression with intelligent selection",
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Raza's Playwright implementation reduced our regression testing effort by 70%. What used to take our team an entire week now runs overnight in our CI pipeline. Exceptional work.",
    name: "Engineering Leader",
    role: "CTO",
    company: "FinTech Startup · Series B",
    initials: "CTO",
  },
  {
    id: "t2",
    quote:
      "Outstanding QA leadership and mentoring. Raza transformed how our entire engineering team thinks about quality — it is now a first-class concern, not an afterthought.",
    name: "Engineering Director",
    role: "Director of Engineering",
    company: "Enterprise SaaS · 500+ engineers",
    initials: "ED",
  },
  {
    id: "t3",
    quote:
      "The AI testing workshop completely changed our approach. Our team went from skeptical to shipping 3× faster with AI-generated test coverage. Truly transformational training.",
    name: "QA Manager",
    role: "Head of Quality",
    company: "HealthTech Platform",
    initials: "QM",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Assess",
    description:
      "Deep-dive audit of current QA maturity, tooling, processes, and team capabilities to identify gaps and opportunities.",
  },
  {
    step: "02",
    title: "Strategize",
    description:
      "Build a tailored quality roadmap aligned to your business goals, engineering velocity, and team constraints.",
  },
  {
    step: "03",
    title: "Implement",
    description:
      "Hands-on execution with your team — frameworks, processes, and tooling delivered with knowledge transfer.",
  },
  {
    step: "04",
    title: "Measure",
    description:
      "Track quality metrics, defect trends, and automation ROI with real-time dashboards and sprint reports.",
  },
  {
    step: "05",
    title: "Scale",
    description:
      "Expand coverage, enable the team to self-sustain, and continuously improve quality maturity over time.",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How long does automation implementation typically take?",
    answer:
      "Depending on complexity and scope, a basic Playwright framework can be live in 2–3 weeks. A comprehensive enterprise suite with CI/CD integration typically takes 6–8 weeks. I provide a detailed timeline after the initial assessment.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer:
      "Absolutely. Startups are often my favorite engagements — building quality practices from the ground up. I offer startup-friendly engagement models including fractional QA Head arrangements, which provide senior leadership without the full-time cost.",
  },
  {
    question: "Can you train our existing QA team?",
    answer:
      "Yes. I offer both onsite and remote corporate training programs, from 1-day workshops to multi-week bootcamps. All programs are highly practical with real project work. Custom curriculum is available based on your stack and goals.",
  },
  {
    question: "What does a Fractional QA Head engagement look like?",
    answer:
      "I embed with your team for a defined number of days per week — typically 2–3. I attend planning meetings, lead QA strategy, mentor engineers, set processes, and report to the CTO or VP Engineering. It is senior QA leadership at a fraction of the full-time cost.",
  },
  {
    question: "Can you help with performance testing for a specific release?",
    answer:
      "Yes. I offer targeted performance engineering engagements — from a single load test assessment to building a full performance testing capability. I work with JMeter, k6, and Gatling depending on your stack and team preferences.",
  },
  {
    question: "Can AI really improve our testing process meaningfully?",
    answer:
      "For most teams, yes — significantly. AI can reduce test case creation time by 60–80%, surface edge cases humans miss, and optimize which tests to run for any given code change. The key is integrating AI pragmatically into existing workflows, which is exactly what I help teams do.",
  },
];

export const TECH_BADGES = [
  "Playwright",
  "Selenium",
  "Cypress",
  "Postman",
  "REST Assured",
  "JMeter",
  "k6",
  "Jira",
  "GitHub Actions",
  "Azure DevOps",
  "Docker",
  "Kubernetes",
  "AWS",
];

export const EXPERTISE_ITEMS = [
  "QA Leadership",
  "Test Automation",
  "API Testing",
  "Performance Engineering",
  "AI-Assisted Testing",
  "Corporate Training",
];

export const TRUSTED_COMPANIES = [
  "FinTech Corp",
  "HealthTech Inc",
  "EdTech Platform",
  "SaaS Enterprise",
  "InsurTech Co",
  "B2B Software",
];
