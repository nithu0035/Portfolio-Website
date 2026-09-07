const projects = {
  "exam monitoring": {
    title: "AI-Based Online Exam Monitoring System",
    overview:
      "A computer vision system for webcam-based online exam monitoring, detecting predefined abnormal activities and issuing real-time alerts through a Flask-based web monitoring dashboard. Currently in development as the major project for the XTRAGRAD AI Internship (Foundation Track).",
    tech: "Python · Computer Vision · Deep Learning · Flask",
    highlights: [
      "Webcam-based real-time monitoring with alerts for predefined abnormal activities.",
      "Web-based monitoring dashboard built with Flask.",
      "In active development as part of the XTRAGRAD AI Internship."
    ],
    repo: "",
    period: "Sep 2026 – Present"
  },

  "jobpilot": {
    title: "JobPilot — Agentic AI Job Search & Application Assistant",
    overview:
      "An agentic AI assistant for job search and applications, built on a backend foundation with database persistence, agent orchestration, tool-calling workflows, and a human-approval step. The agentic workflow is still in active development.",
    tech: "Python · FastAPI · Groq API · Llama 3.3 70B · PostgreSQL · SQLAlchemy · LangChain · LangGraph",
    highlights: [
      "Backend foundation with PostgreSQL persistence via SQLAlchemy.",
      "LangGraph-based agent orchestration with tool-calling workflows.",
      "Human-approval step built into the workflow; autonomous submission is not yet implemented."
    ],
    repo: "https://github.com/nithu0035/jobpilot.git",
    period: "2026"
  },

  "ai chatbot": {
    title: "AI Chatbot with Personality",
    overview:
      "A context-aware AI chatbot with voice and text interaction, powered by a ChromaDB RAG pipeline for persistent memory. Improved response relevance by ~40%.",
    tech: "Python · FastAPI · ChromaDB · Whisper · LangChain · Docker · JWT",
    highlights: [
      "Improved chatbot response relevance by ~40% using ChromaDB vector similarity search.",
      "Built Whisper speech-to-text pipeline for voice interaction.",
      "Designed 5 JWT-secured FastAPI endpoints and containerised with Docker."
    ],
    repo: "https://github.com/nithu0035/AI-chatbot",
    period: "Nov 2025 – Feb 2026"
  },
 
  "smart irrigation": {
    title: "AI-Based Smart Irrigation System",
    overview:
      "An ML-powered smart irrigation system with weather-aware crop guidance, trained on 10,000+ sensor readings. Achieved ~90% accuracy predicting irrigation actions, with an IEEE conference contribution.",
    tech: "Python · XGBoost · Random Forest · GridSearchCV · 5-Fold Cross-Validation · PostgreSQL · FastAPI",
    highlights: [
      "Trained on 10,000+ sensor readings, achieving ~90% accuracy with GridSearchCV-tuned models.",
      "XGBoost outperformed the Random Forest baseline by ~15% using 5-fold cross-validation.",
      "Added a weather-aware crop advisory module and a PostgreSQL/FastAPI backend.",
      "Contributed as part of an IEEE conference submission."
    ],
    repo: "https://github.com/nithu0035/smart-irrigation-system-with-weather-aware-crop-guidance",
    period: "Jan 2026 – Present"
  },
 
  "hair disease": {
    title: "Hair Disease Detection",
    overview:
      "A deep learning CNN model for scalp disease classification achieving ~94% prediction accuracy on alopecia, dandruff, and psoriasis detection. Designed for web/mobile health deployment.",
    tech: "Python · TensorFlow · CNN · OpenCV · Deep Learning · Keras",
    highlights: [
      "Attained ~94% prediction accuracy on scalp-image datasets using a custom CNN.",
      "Applied OpenCV augmentation to handle class imbalance — reduced misclassification by ~18% vs baseline.",
      "Inference runs under 200ms per image — ready for web/mobile health deployment."
    ],
    repo: "",
    period: "2025"
  },
 
  "placement intelligence": {
    title: "Placement Intelligence Platform",
    overview:
      "An ML-powered student placement prediction dashboard with career fit analysis, skill gap detection, ATS readiness scoring, and a personalized action plan. Achieved ~82% accuracy.",
    tech: "Python · Random Forest · Scikit-learn · Streamlit · Pandas · NumPy · Pickle",
    highlights: [
      "Predicted student placement probability at ~82% accuracy using 5-fold cross-validated Random Forest.",
      "Engineered academic & experience features to reduce overfitting.",
      "Built live Streamlit scoring dashboard with placement probability, readiness index, skill coverage & ATS score."
    ],
    repo: "https://github.com/nithu0035/placement-intelligence-platform",
    period: "Aug 2025 – Jan 2026"
  }
};
 
export default projects;