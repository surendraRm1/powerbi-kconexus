"use client"

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LucideMessageSquare, LucideX, LucideSend, LucideBot, LucideCircle } from "lucide-react";

interface Message {
    id: number;
    text: string;
    sender: "bot" | "user";
    time: string;
}

export default function NexusChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Hi! I'm Nexus AI, your autonomous accounting co-worker. How can I help you scale today?",
            sender: "bot",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const newUserMessage: Message = {
            id: Date.now(),
            text: inputValue,
            sender: "user",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages((prev) => [...prev, newUserMessage]);
        setInputValue("");
        setIsTyping(true);

        // Simulated AI Response
        setTimeout(() => {
            const botResponse: Message = {
                id: Date.now() + 1,
                text: getBotResponse(inputValue),
                sender: "bot",
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setIsTyping(false);
            setMessages((prev) => [...prev, botResponse]);
        }, 1500);
    };

    const getBotResponse = (input: string) => {
        const lower = input.toLowerCase();
        if (lower.includes("price") || lower.includes("cost")) return "Nexus AI pays for itself! Most clients see a 10x ROI by saving 20+ hours of manual work weekly. Would you like a custom quote?";
        if (lower.includes("work") || lower.includes("how")) return "I use advanced OCR and proprietary AI to read your bank statements and bills, then sync them directly to Tally, Zoho, or SAP. Zero manual entry.";
        if (lower.includes("security") || lower.includes("data")) return "We use bank-grade encryption and comply with global data protection standards. Your financial data is secure and never used for training public models.";
        return "That's interesting! I can help you automate that. Would you like to see a live demo of how I handle complex accounting tasks?";
    };

    return (
        <div className="fixed bottom-24 right-6 z-[100] flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="mb-4 w-[350px] md:w-[400px] h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-white/20 glass-nav flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-4 bg-navy-900 border-b border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-openbi-green/20 rounded-xl flex items-center justify-center border border-openbi-green/30">
                                    <LucideBot className="text-openbi-green" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm">Nexus AI Assistant</h4>
                                    <div className="flex items-center gap-1.5">
                                        <LucideCircle className="text-openbi-green fill-openbi-green" size={8} />
                                        <span className="text-[10px] text-white/50 uppercase font-black tracking-widest">Always Active</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white/40 hover:text-white transition-colors"
                            >
                                <LucideX size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === "user"
                                            ? "bg-openbi-green text-navy-900 font-medium rounded-tr-none"
                                            : "bg-white/10 text-white border border-white/10 backdrop-blur-md rounded-tl-none"
                                        }`}>
                                        {msg.text}
                                        <div className={`text-[10px] mt-1 opacity-50 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
                                            {msg.time}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none border border-white/10 flex gap-1">
                                        <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0 }} className="w-1.5 h-1.5 bg-white/50 rounded-full" />
                                        <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-white/50 rounded-full" />
                                        <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-white/50 rounded-full" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-navy-900/50 border-t border-white/10 backdrop-blur-xl">
                            <div className="flex gap-2 bg-white/5 rounded-xl p-2 border border-white/10 focus-within:border-openbi-green/50 transition-colors">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                                    placeholder="Ask Nexus AI..."
                                    className="flex-1 bg-transparent border-none outline-none text-white text-sm px-2 py-1 placeholder:text-white/30"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!inputValue.trim()}
                                    className="w-10 h-10 bg-openbi-green rounded-lg flex items-center justify-center text-navy-900 hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100"
                                >
                                    <LucideSend size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-white text-navy-900" : "bg-navy-900 text-openbi-green border border-openbi-green/30"
                    }`}
            >
                {isOpen ? <LucideX size={28} /> : <LucideMessageSquare size={28} />}

                {!isOpen && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-openbi-green opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-openbi-green"></span>
                    </span>
                )}
            </motion.button>
        </div>
    );
}
