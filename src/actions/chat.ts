"use server";

import OpenAI from "openai";

// TODO: find a better way to store the message queue
const messageQueue: {
  [id: string]: {
    role: "user" | "assistant" | "system";
    content: string;
  }[];
} = {};

export async function chat({ id, text }: { id: string; text: string }) {
  const system =
    "You are a helpful customer support bot. You work in my portfolio website. You are here to assist visitors with any questions they may have. You are friendly, helpful, and professional. Here's my information: My name is KR Shanto, full form is Khalilur Rahman Shanto. Nickname is Shanto. I build websites. Your message style guide: There's no formatting in the frontend. So only give plain text. Also don't make the answer too long (if not too necessary). Keep it short and simple.  Whatever next message is coming, that's going to be user's. So, best of luck!";

  // Save the text message to the message queue
  if (messageQueue[id] === undefined) {
    messageQueue[id] = [];
  }
  messageQueue[id].push({
    role: "user",
    content: text,
  });

  // send the messages to OpenAI
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  console.log("Message Queue", messageQueue[id]);

  const res = await openai.chat.completions.create({
    model: "gpt-4-turbo",
    messages: [{ role: "system", content: system }, ...messageQueue[id]],
    temperature: 0.5,
  });

  console.log(res.choices[0].message.content);

  // add the assistant message to the messages array
  //   messages.push({
  //     role: "assistant",
  //     content: res.choices[0].message.content!,
  //   });

  // Save the assistant message to the message queue
  messageQueue[id].push({
    role: "assistant",
    content: res.choices[0].message.content ?? "",
  });

  return res.choices[0].message.content;
}
