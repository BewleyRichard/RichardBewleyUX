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
    deliverables: ["User Interviews", "Competitive Analysis", "Heuristic Evaluation", "Cognitive Walkthrough", "Task Analysis", "Journey Mapping", "Content Mapping", "Sitemap", "User Flows", "Wireframes", "Prototypes", "Usability Testing", "A/B Testing", "Developer Handoff"],
    tools: ["Figma", "FigJam", "Miro"],
    mainImage: { src: "Images/Hero/Industrial.jpg", caption: "ATS dashboard hero" },
    images: [
      { src: "/images/amhu-1.png", caption: "Dashboard overview showing real-time material flow" },
      { src: "/images/amhu-2.png", caption: "Task management interface with priority queue" },
      { src: "/images/amhu-3.png", caption: "Alert system and notification preferences" }
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
      "Persona Creation",
      "Competitive Analysis",
      "SWOT Analysis",
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
      { src: "/images/amhu-1.png", caption: "Alert subscription settings panel" },
      { src: "/images/amhu-2.png", caption: "Notification frequency controls" },
      { src: "/images/amhu-3.png", caption: "Channel-specific preferences" }
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
      { src: "/images/amhu-1.png", caption: "Main reference tracker view with collapsible citation panel" },
      { src: "/images/amhu-2.png", caption: "Expanded reference details showing source attribution and context" },
      { src: "/images/amhu-3.png", caption: "User flow diagram illustrating the streamlined reference retrieval process" }
    ]
  }
];

export default projects;