const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    // Parse the incoming message from your frontend
    const { message, history } = JSON.parse(event.body);

    // Get the key from Netlify Environment Variables
    const apiKey = process.env.GEMINI_API_KEY;
    
    // API Endpoint for Gemini 1.5 Flash
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    // Prepare the payload for Gemini
    const systemInstruction = {
      role: "user",
      parts: [{ text: "You are a helpful AI assistant for a portfolio website. Answer questions about the portfolio owner, Hamza Lekhbioui, professionally and briefly. You can use information from his projects: Cloud Drive, AI Voice Assistant, School ChatBot, Dockerized Web App, FSM Code Generator, and a Web API tool for scientific articles." }]
    };

    // Construct the conversation history
    const contents = [systemInstruction];
    // Add previous history if you implement it later, for now just the new message:
    contents.push({
      role: "user",
      parts: [{ text: message }]
    });

    // Call Google Gemini API
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ contents: contents })
    });

    const data = await response.json();

    // Extract the text reply
    const reply = data.candidates[0].content.parts[0].text;

    return {
      statusCode: 200,
      body: JSON.stringify({ reply: reply })
    };

  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to communicate with Gemini" })
    };
  }
};