const projects = {
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
      "An ML-powered irrigation decision system with real-time weather-aware crop guidance. Achieved ~90% classification accuracy predicting irrigation actions from environmental data.",
    tech: "Python · XGBoost · Random Forest · Gradient Boosting · FastAPI · Streamlit · Weather API · PostgreSQL · Docker",
    highlights: [
      "Achieved ~90% classification accuracy predicting irrigation actions from temperature, humidity, and rainfall data.",
      "XGBoost outperformed baseline by ~15% on unseen test data via cross-validated F1 scoring.",
      "Added AI crop advisory module — estimated to reduce water usage by ~20%."
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