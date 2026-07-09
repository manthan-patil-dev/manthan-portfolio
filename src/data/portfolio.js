export const projects = [
    {
        id: "hospital-management",
        title: "Hospital Management System",
        category: "Full-Stack Web App",
        stack: ["Next.js", "Prisma", "Supabase", "PostgreSQL", "Tailwind CSS"],
        thumbnail: "/projects/hospital.jpg",
        short: "Full-stack app for managing hospital workflows, patient records, and appointments.",
        liveUrl: "",
        repoUrl: "https://github.com/manthan-patil-dev",
        readMore: {
            problem:
                "Hospitals struggle to track patient records, doctor availability, and appointments across departments using scattered paper or spreadsheet systems, leading to delays and lost data.",
            approach:
                "I designed a role-based web application with separate dashboards for admin, doctor, and reception staff. The frontend is built with Next.js App Router for server components and fast navigation, while Supabase handles auth and real-time data, and Prisma provides a typed ORM layer over PostgreSQL.",
            whatIBuilt: [
                "Role-based authentication (admin / doctor / reception) using Supabase Auth",
                "Patient registration and medical record management with CRUD operations",
                "Appointment scheduling system with doctor availability checks",
                "Admin dashboard with department and staff management",
                "Responsive UI built with Tailwind CSS, tested on mobile and desktop",
            ],
            challenges:
                "Managing real-time availability for doctors while preventing double-booking required a custom validation layer. I solved it by querying existing appointments before insertion and showing conflicts inline.",
            impact:
                "Reduces manual record-keeping time and centralizes hospital data in one secure system, making it easier for staff to find and update patient information quickly.",
        },
    },
    {
        id: "autoverse-parts",
        title: "Autoverse-Parts",
        category: "E-Commerce Platform",
        stack: ["React", "Node.js", "REST API", "Stripe", "Tailwind CSS"],
        thumbnail: "/projects/autoverse.jpg",
        short: "E-commerce website for car parts with cart, checkout, and product filtering.",
        liveUrl: "",
        repoUrl: "https://github.com/manthan-patil-dev",
        readMore: {
            problem:
                "Buying car parts online is hard because customers need to filter by make, model, and year, and most generic e-commerce templates don't handle vehicle-specific search well.",
            approach:
                "I built a dedicated car-parts storefront with a React frontend and a Node.js REST backend. The catalog supports vehicle-specific filtering so users can find exact-fit parts for their car.",
            whatIBuilt: [
                "Product catalog with vehicle make/model/year filtering",
                "Shopping cart drawer with quantity controls and live total",
                "Checkout flow with Stripe payment integration",
                "Product detail pages with specs and compatibility info",
                "Admin-friendly product data structure for easy catalog updates",
            ],
            challenges:
                "Designing the filter logic so it stays fast with a large catalog meant structuring the data around vehicle fitment tables rather than flat product tags. I used indexed lookups to keep searches responsive.",
            impact:
                "Provides a focused, fast shopping experience for car enthusiasts who need parts that actually fit their specific vehicle.",
        },
    },
    {
        id: "lumina-ai",
        title: "Lumina AI Study Companion",
        category: "AI / ML Application",
        stack: ["Python", "AI APIs", "React", "Node.js"],
        thumbnail: "/projects/lumina.jpg",
        short: "AI assistant that helps learners study with smart explanations and practice.",
        liveUrl: "",
        repoUrl: "https://github.com/manthan-patil-dev",
        readMore: {
            problem:
                "Students often need instant explanations, summaries, and practice questions while studying, but switching between multiple tools breaks their focus.",
            approach:
                "I built an AI study companion that brings explanations, summaries, and practice prompts into one interface. The backend integrates AI APIs to process study material and generate helpful responses.",
            whatIBuilt: [
                "Chat-based interface for asking study questions and getting explanations",
                "Content summarization for long notes or articles",
                "Practice question generation based on user-provided topics",
                "Context-aware responses using prompt engineering",
                "Clean, distraction-free UI focused on learning flow",
            ],
            challenges:
                "Getting reliable, useful answers from the AI meant careful prompt engineering so responses stayed accurate and relevant to the student's subject instead of going off-topic.",
            impact:
                "Gives students a single tool for explanations and practice, reducing context-switching and keeping study sessions focused.",
        },
    },
    {
        id: "fake-news-detector",
        title: "Fake News Detector",
        category: "AI / NLP Project",
        stack: ["Python", "NLP", "Machine Learning", "Scikit-learn"],
        thumbnail: "/projects/fakenews.jpg",
        short: "NLP project that classifies news articles as real or fake using machine learning.",
        liveUrl: "",
        repoUrl: "https://github.com/manthan-patil-dev",
        readMore: {
            problem:
                "Misinformation spreads fast online, and readers have no quick way to gauge whether a news article is credible before sharing it.",
            approach:
                "I built a machine learning classifier trained on labelled real and fake news datasets. Using NLP techniques, the model analyses the text of an article and predicts its credibility.",
            whatIBuilt: [
                "Data preprocessing pipeline: cleaning, tokenization, and TF-IDF vectorization",
                "Model training with multiple algorithms and comparison of accuracy",
                "Prediction function that takes raw article text and returns a real/fake label with confidence",
                "Simple interface to paste an article and get an instant result",
            ],
            challenges:
                "Balancing accuracy with avoiding overfitting required careful cross-validation and choosing the right model complexity for the dataset size.",
            impact:
                "Demonstrates how NLP can be applied to the misinformation problem, giving readers a quick signal about an article's credibility.",
        },
    },
];

export const resumeUrl = "/resume/Manthan_Patil_Resume.pdf";
