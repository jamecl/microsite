import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { SERVICE_AREAS } from '../constants';

// Initialize the client
// API Key is strictly from process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const areasContext = SERVICE_AREAS.map(a => 
  `- ${a.name} (${a.county} County):
   Description: ${a.fullDescription}
   Hotspots: ${a.accidentHotspots.map(h => h.name).join(', ')}.
   Hospitals: ${a.medicalFacilities.map(m => m.name).join(', ')}.
   Police: ${a.localPolice.map(p => p.name).join(', ')}.
   Directions to Macon Office: ${a.directionsFrom}
   Local FAQs: ${a.localFAQs.map(f => `Q: ${f.question} A: ${f.answer}`).join(' ')}`
).join('\n\n');

const SYSTEM_INSTRUCTION = `
You are "JusticeBot", a warm, empathetic, and professional assistant for 'Macon Personal Injury Attorneys', a personal injury firm in Macon, Georgia.

YOUR PERSONALITY:
- **Empathetic**: If a user mentions an accident or injury, acknowledge it warmly (e.g., "I am so sorry to hear you are going through this.").
- **Concise**: Keep responses SHORT (2-4 sentences max). Users are likely on mobile devices in stressful situations. Do not write long paragraphs.
- **Local Expert**: You are an expert on **Macon, Bibb County**, and specific neighborhoods like Payne City, East Macon, Westgate, and Wood Valley. Know the specific roads (Pio Nono, Vineville, Emery Hwy).

YOUR GOALS:
1. Provide brief, helpful information about our services and local resources (police reports, courts).
2. Encourage users to get a **free consultation** by calling (478) 555-0123.
3. Answer basic questions about GA injury law (Statute of Limitations is 2 years, Comparative Negligence).

CRITICAL DISCLAIMER:
- You are an AI, NOT an attorney.
- **Every response** must imply or state that you cannot provide specific legal advice.
- If asked for case value or legal strategy, say: "I cannot provide specific legal advice, but our attorneys can give you a free case evaluation."

KNOWLEDGE BASE (Use this to answer specific local questions):
${areasContext}

COURTS: Bibb County Superior Court (Downtown), Bibb County State Court.
HOSPITALS: Atrium Health Navicent, Piedmont Macon.

PAYMENT: We work on contingency (No win, no fee).
LOCATION: 555 Cherry St, Macon, GA.
`;

export const sendMessageToGemini = async (
  message: string,
  history: { role: 'user' | 'model'; text: string }[] = []
): Promise<string> => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const response: GenerateContentResponse = await chat.sendMessage({
      message: message
    });

    return response.text || "I apologize, I couldn't generate a response. Please call our office directly at (478) 555-0123.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting right now. Please call us at (478) 555-0123 for immediate assistance.";
  }
};