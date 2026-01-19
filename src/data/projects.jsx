const projects = [
  {
    id: 1,
    title: "ATS (Autonomous Transfer System)",
    year: 2025,
    client: "Ada Mode",
    summary: "A system to optimise material handling workflows with a digital interface.",
    details: [
      'Ada Mode, a UK-based AI solutions company, required a software interface to support their feasibility study for an Autonomous Transfer System (ATS). This system would manage a fleet of robots transporting materials within an industrial facility. The goal was to create a compelling prototype to support Ada Mode’s pitch to move forward in a multi-stage B2B procurement process.'
    ],
    deliverables: ["User Research", "Competitive Analysis", "Heuristic Evaluation", "Cognitive Walkthrough", "Task Analysis", "Journey Mapping", "Content Mapping", "Sitemap", "User Flows", "Wireframes", "Prototypes", "Usability Testing", "A/B Testing", "Developer Handoff"],
    tools: ["Figma", "FigJam", "Miro"],
    mainImage: { src: "Images/Hero/Industrial.jpg", caption: "Strong UX design can support supervision and control of automated systems." },
    images: [
      { 
        src: "/Images/Projects/ATS/ATSJourneysOverview.png", 
        caption: "Journeys overview displaying active material journeys with status indicators and real-time tracking.",
        alt: "Journeys overview displaying active material journeys with status indicators and real-time tracking."
      },
      { 
        src: "/Images/Projects/ATS/ATSRobotsOverview.png", 
        caption: "Robot fleet overview displaying operational status, battery levels, and current assignments for each autonomous unit.",
        alt: "Robot fleet overview displaying operational status, battery levels, and current assignments for each autonomous unit."
      },
      { 
        src: "/Images/Projects/ATS/ATSJourneyTracker.png", 
        caption: "Journey tracking view showing individual material transfer tasks with priority levels and completion status.",
        alt: "Journey tracking view showing individual material transfer tasks with priority levels and completion status."
      },
      { 
        src: "/Images/Projects/ATS/ATSRoutesPage.png", 
        caption: "Routes configuration page showing predefined paths and waypoints for robot navigation through the facility.",
        alt: "Routes configuration page showing predefined paths and waypoints for robot navigation through the facility."
      },
      { 
        src: "/Images/Projects/ATS/ATSDataVis.png", 
        caption: "Data visualisation dashboard with charts and metrics showing system performance and throughput statistics.",
        alt: "Data visualisation dashboard with charts and metrics showing system performance and throughput statistics."
      }
    ]  
  },
  {
    id: 2,
    title: "Implementing Granular Alert Subscriptions",
    year: 2025,
    client: "Windscope",
    summary: "Wind turbine monitoring systems generate a high volume of alerts. Without control over what, when, and how those alerts are delivered, users quickly become overwhelmed.",
    details: [
      "Windscope is a SaaS platform that uses machine learning for automated, scalable health and performance monitoring of wind turbines. Its web UI and alert system notify personnel of anomalies, improving maintenance prioritisation, efficiency, and overall fleet power output.",
      `The challenge was to move Windscope's current "all or nothing" alert system to one that allows users to receive only the information most relevant to their specific needs and responsibilities.`,
      "To address this, I delivered a functional prototype demonstrating the user interface and core logic for subscribing to specific turbines/farms and choosing desired alert levels, ready for technical implementation."
    ],
    deliverables: [  "Stakeholder Interviews",
      "User Research",
      "Problem Statement Definition",
      "Goal Definition",
      "Competitive Analysis",
      "Mind Mapping",
      "Content Mapping",
      "Sitemap",
      "User Flows",
      "Sketching",
      "Paper Prototyping",
      "Wireframes",
      "Prototypes",
      "Usability Testing",
      "Accessibility Review",
      "Developer Handoff"],
    tools: ["Figma", "Miro"],
    mainImage: { src: "Images/Hero/WindFarm.jpg", caption: "SaaS platforms like Windscope turn raw turbine data into actionable intelligence, helping wind farms run more reliably, economically, and sustainably." },
    images: [
      { 
        src: "/Images/Projects/Windscope/WSSubAll.png", 
        caption: "Subscription interface with an 'Subscribe to all' option. Reducing full monitoring to just a few clicks allows for rapid onboarding and establishes a baseline that can be refined later.",
        alt: "Subscription interface with an 'Subscribe to all' option. Reducing full monitoring to just a few clicks allows for rapid onboarding and establishes a baseline that can be refined later."
      },
      { 
        src: "/Images/Projects/Windscope/WSCustomSub.png", 
        caption: "Subscription interface showing options to select specific alert types and channels for notifications.",
        alt: "Subscription interface showing options to select specific alert types and channels for notifications."
      },
      { 
        src: "/Images/Projects/Windscope/WSUnsub.png", 
        caption: "A single click opt-out gives users immediate control over notification noise.",
        alt: "A single click opt-out gives users immediate control over notification noise."
      },
      { 
        src: "/Images/Projects/Windscope/WSDropdownComponents.png", 
        caption: "A reusable dropdown component showing the selectable notification options available.",
        alt: "A reusable dropdown component showing the selectable notification options available."
      }
    ],
  },
  {
    id: 3,
    title: "Creating a Referencing System for an Agentic AI Assistant",
    year: 2025,
    client: "Ada Mode",
    details: [
      `New users of the Atlas AI Assistant faced difficulties in efficiently managing, adding, or retrieving reference information. The existing user interface displayed references below the assistant’s responses, which led to confusion, especially with lengthy responses containing numerous citations.`,
      `This also resulted in references occupying significant vertical screen space, which would be better utilised for prompts and responses. This was a critical problem as the application's core value proposition relies on presenting information directly from primary sources, essential for maintaining compliance and accuracy for engineers working on documentation for regulatory approvals.`,
      `Streamlining the reference experience was crucial to reinforce the application's core value and improve overall usability.`
    ],
    deliverables: [  
      "Stakeholder Interviews",
      "UX Audit",
      "Heuristic Evaluation",
      "Competitive Analysis",
      "Problem Definition",
      "Cognitive Walkthrough",
      "User Flows",
      "Content Mapping",
      "Sketching",
      "Wireframes",
      "Clickable Prototypes",
      "UI Component Design",
      "Accessibility Review",
      "Iterative Design",
      "Developer Handoff"],
    tools: ["Figma", "Miro"],
    mainImage: { 
      src: "Images/Hero/Referencing.jpg", 
      caption: "The use of AI within regulated industry presents challenges. This application addresses regulatory pain points by constraining AI agent responses to primary source material.", 
    },
    images: [
      { 
        src: "/Images/Projects/AtlasLLM/ARMain.png", 
        caption: "The redesigned interface showing the main reference tracker, a collapsible side panel displaying citation information and other useful document actions. This keeps the main user flow clean while providing full context on demand.",
        alt: "The redesigned interface showing the main reference tracker, a collapsible side panel displaying citation information and other useful document actions. This keeps the main user flow clean while providing full context on demand."
      },
      { 
        src: "/Images/Projects/AtlasLLM/AROriginal.png", 
        caption: "The initial product was functionally robust but featured a placeholder front-end and a UI built primarily for functionality, with dedicated user experience considerations not yet integrated into its development.",
        alt: "The initial product was functionally robust but featured a placeholder front-end and a UI built primarily for functionality, with dedicated user experience considerations not yet integrated into its development."
      },
      { 
        src: "/Images/Projects/AtlasLLM/ARStepsFirst.png", 
        caption: "Raw reference text produced by the back-end and initial design iteration showing the first steps of the reference UI.",
        alt: "Raw reference text produced by the back-end and initial design iteration showing the first steps of the reference UI.",
        background: "#000"
      },
      { 
        src: "/Images/Projects/AtlasLLM/ARDesignIterations.png", 
        caption: "The design process involved extensive iteration, progressing to more minimal designs, with cognitive walkthroughs at each stage to identify pain points and streamline interactions.",
        alt: "The design process involved extensive iteration, progressing to more minimal designs, with cognitive walkthroughs at each stage to identify pain points and streamline interactions."
      },
      { 
        src: "/Images/Projects/AtlasLLM/ARSnippets.png", 
        caption: "Clickable citations within the response text indicates sources instantly. Hovering shows a tooltip with a short excerpt, title, and date; clicking expands full source details. Badges under each citation display usage counts and jump to the exact location in the chat.",
        alt: "Clickable citations within the response text indicates sources instantly. Hovering shows a tooltip with a short excerpt, title, and date; clicking expands full source details. Badges under each citation display usage counts and jump to the exact location in the chat."
      }
  
    ]
  }
];

export default projects;