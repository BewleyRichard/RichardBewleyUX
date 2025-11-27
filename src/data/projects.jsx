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
    mainImage: { src: "Images/Hero/Industrial.jpg", caption: "ATS dashboard hero" },
    images: [
      { 
        src: "/Images/Projects/ATS/ATSJourneysOverview.png", 
        caption: "Journeys overview displaying active material journeys with status indicators and real-time tracking",
        alt: "Journeys overview displaying active material journeys with status indicators and real-time tracking"
      },
      { 
        src: "/Images/Projects/ATS/ATSRobotsOverview.png", 
        caption: "Robot fleet overview displaying operational status, battery levels, and current assignments for each autonomous unit",
        alt: "Robot fleet overview displaying operational status, battery levels, and current assignments for each autonomous unit"
      },
      { 
        src: "/Images/Projects/ATS/ATSJourneyTracker.png", 
        caption: "Journey tracking view showing individual material transfer tasks with priority levels and completion status",
        alt: "Journey tracking view showing individual material transfer tasks with priority levels and completion status"
      },
      { 
        src: "/Images/Projects/ATS/ATSRoutesPage.png", 
        caption: "Routes configuration page showing predefined paths and waypoints for robot navigation through the facility",
        alt: "Routes configuration page showing predefined paths and waypoints for robot navigation through the facility"
      },
      { 
        src: "/Images/Projects/ATS/ATSDataVis.png", 
        caption: "Data visualisation dashboard with charts and metrics showing system performance and throughput statistics",
        alt: "Data visualisation dashboard with charts and metrics showing system performance and throughput statistics"
      }
    ]  
  },
  {
    id: 2,
    title: "Implementing Granular Alert Subscriptions",
    year: 2025,
    client: "Windscope",
    summary: "Designing a system to allow users to customise alert preferences in a granular way.",
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
    mainImage: { src: "Images/Hero/WindFarm.jpg", caption: "Granular Alert hero" },
    images: [
      { 
        src: "/Images/Projects/Windscope/WSSubAll.png", 
        caption: "Subscription interface showing options to subscribe to all alerts with frequency settings",
        alt: "Subscription interface showing options to subscribe to all alerts with frequency settings"
      },
      { 
        src: "/Images/Projects/Windscope/WSCustomSub.png", 
        caption: "Subscription interface showing options to select specific alert types and channels for notifications",
        alt: "Subscription interface showing options to select specific alert types and channels for notifications"
      },
      { 
        src: "/Images/Projects/Windscope/WSUnsub.png", 
        caption: "Subscription interface showing how a user can fully opt out of all alert categories",
        alt: "Subscription interface showing how a user can fully opt out of all alert categories"
      },
      { 
        src: "/Images/Projects/Windscope/WSDropdownComponents.png", 
        caption: "Dropdown component design showing selectable notification channels",
        alt: "Dropdown component design showing selectable notification channels"
      }
    ],
  },
  {
    id: 3,
    title: "Creating a Referencing System",
    year: 2025,
    client: "Ada Mode",
    summary: "Creating a referencing system for an LLM Doc managment system",
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
      caption: "Reference tracker interface showing citation management in the AI assistant" 
    },
    images: [
      { 
        src: "/Images/Projects/AtlasLLM/ARMain.png", 
        caption: "Main reference tracker view with collapsible citation panel",
        alt: "Interface showing the main reference tracker with a collapsible side panel displaying citation information"
      },
      { 
        src: "/Images/Projects/AtlasLLM/AROriginal.png", 
        caption: "Expanded reference details showing source attribution and context",
        alt: "Screenshot showing expanded reference panel with source attribution metadata"
      },
      { 
        src: "/Images/Projects/AtlasLLM/ARStepsFirst.png", 
        caption: "Expanded reference details showing source attribution and context",
        alt: "Design iteration showing the first steps of the reference system workflow",
        background: "#000"
      },
      { 
        src: "/Images/Projects/AtlasLLM/ARDesignIterations.png", 
        caption: "User flow diagram illustrating the streamlined reference retrieval process",
        alt: "Flowchart diagram showing the user journey for retrieving and managing references in the system"
      }
    ]
  }
];

export default projects;