
import React, { useState } from "react";
const QA = {
  "who are you": "I'm Nitesh Gudipatoju, an AI and ML student and developer focused on building intelligent systems.",
  "projects": "I built projects including an AI Chatbot, a Delivery Management System, and a Full Stack Web App.",
  "skills": "I work with Python, TensorFlow, React, Node.js, and data analytics tools like Pandas and Power BI."
};
export default function WelcomeAI(){
  const [msg,setMsg] = useState("Welcome to my webpage! Ask me a quick question.");
  function ask(q){
    const a = QA[q.toLowerCase()] || "Try asking 'who are you', 'projects' or 'skills'.";
    setMsg(a);
    try{ const u = new SpeechSynthesisUtterance(a); window.speechSynthesis.cancel(); window.speechSynthesis.speak(u); }catch(e){}
  }
  return (
    <div className="p-3 rounded card">
      <p className="text-sm text-gray-200">{msg}</p>
      <div className="mt-3 flex gap-2">
        <button className="btn" onClick={()=>ask('who are you')}>Who are you?</button>
        <button className="btn" onClick={()=>ask('projects')}>Projects</button>
        <button className="btn" onClick={()=>ask('skills')}>Skills</button>
      </div>
    </div>
  );
}
