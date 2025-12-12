import { GoogleGenAI } from "@google/genai";
import { PUBLICATIONS, MEMBERS, RESEARCH_AREAS, GROUP_NAME } from '../constants';

let aiClient: GoogleGenAI | null = null;

const getClient = (): GoogleGenAI => {
  if (!aiClient) {
    const apiKey = process.env.API_KEY || '';
    // Note: In a real production app, handle missing key gracefully.
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
};

// Construct a system prompt based on the website data
const SYSTEM_INSTRUCTION = `
You are ChemBot, the AI Assistant for the ${GROUP_NAME}. 
Your goal is to answer questions about the research group, its members, projects (formerly research areas), publications, and news based on the provided context.

Context:
- Projects/Research Areas: ${RESEARCH_AREAS.map(a => a.title + ": " + a.description).join('; ')}
- Members: ${MEMBERS.map(m => `${m.name} (${m.role})`).join(', ')}
- Recent Publications: ${PUBLICATIONS.map(p => `${p.title} (${p.year}) by ${p.authors.join(', ')}`).join('; ')}

Guidelines:
- Identify yourself as "ChemBot".
- Be professional, scientific, yet approachable.
- If asked about joining the lab, encourage them to check the "Contact" or "People" section.
- Keep answers concise (under 3 sentences unless detailed explanation is requested).
- If you don't know the answer based on the context, politely say you don't have that information.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const client = getClient();
    if (!process.env.API_KEY) {
      return "I'm currently offline (API Key missing). Please check the configuration.";
    }

    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error while processing your request.";
  }
};