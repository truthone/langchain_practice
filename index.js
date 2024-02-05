import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage } from "@langchain/core/messages";
import dotenv from "dotenv";
dotenv.config();

const apiKey = process.env.API_KEY;

const chatModel = new ChatOpenAI({
  modelName: "gpt-3.5-turbo",
  openAIApiKey: apiKey,
});

const text = "i love you and please translate korean";
const messages = [new HumanMessage(text)];

// await llm.invoke(text);
// Feetful of Fun

const result = await chatModel.invoke(messages);
console.log(result.content);
