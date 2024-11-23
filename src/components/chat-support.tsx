"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, Send, X, User, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { chat } from "@/actions/chat";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import SupportBot from "../../public/support-bot.png";

type Message = {
  text: string;
  sender: "user" | "bot";
};

const initialMessages: Message[] = [
  {
    text: "Hello! I'm a bot created by Shanto. How can I help you today?",
    sender: "bot",
  },
];

export default function ChatSupport() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [sessionId] = useState(() => {
    let id = sessionStorage.getItem("chat-session-id");
    if (!id) {
      id = uuidv4();
      sessionStorage.setItem("chat-session-id", id);
    }
    return id;
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      const newMessage: Message = {
        text: input.trim(),
        sender: "user",
      };
      setMessages([...messages, newMessage]);
      setInput("");

      const botResponse = await chat({
        id: sessionId,
        text: input.trim(),
      });
      const botMessage: Message = {
        text: botResponse ?? "I'm sorry, something went wrong.",
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center rounded-full bg-primary p-2"
        >
          {/* <MessageCircle className="h-6 w-6" /> */}
          <Image src={SupportBot} alt="Chat" width={60} height={40} />
          <span className="sr-only">Open chat</span>
        </button>
      )}

      {isOpen && (
        <Card className="flex h-[35rem] w-[30rem] flex-col bg-gray-950 shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 rounded-t-lg bg-blue-800 p-4">
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage src="/support-bot-2.png" alt="Support Agent" />
                <AvatarFallback>CS</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">Support bot</div>
                <div className="text-xs text-muted-foreground">Online</div>
              </div>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              size="icon"
              variant="ghost"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close chat</span>
            </Button>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[25rem] pr-4 pt-3">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex items-end space-x-2 ${
                      message.sender === "user"
                        ? "flex-row-reverse space-x-reverse"
                        : "flex-row"
                    }`}
                  >
                    <Avatar className="h-8 w-8">
                      {message.sender === "user" ? (
                        <AvatarImage src="/user.png" alt="User" />
                      ) : (
                        <AvatarImage
                          src="/support-bot.png"
                          alt="Support Agent"
                        />
                      )}
                    </Avatar>
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </ScrollArea>
          </CardContent>
          <CardFooter className="px-4">
            <form onSubmit={handleSendMessage} className="flex w-full gap-2">
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="min-w-[25rem] flex-grow"
              />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
