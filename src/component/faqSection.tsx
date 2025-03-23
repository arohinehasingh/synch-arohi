import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";


const faqData = [
  {
    question: "4.00% APY? Is this a promotional rate, or some kind of dark magic?",
    answer: "No magic here! This is our standard APY, designed to help you grow your savings faster.",
  },
  {
    question: "What's so great about a high APY anyway?",
    answer: "A high APY means your money earns more interest over time, helping you reach your financial goals faster.",
  },
  {
    question: "Break it down for me: how should I think about bonds vs. cash?",
    answer: "Bonds offer stability and potential returns over time, while cash provides liquidity and quick access to funds.",
  },
  {
    question: "How should I be thinking about short-term cash?",
    answer: "Short-term cash should be easily accessible and kept in a high-yield account to maximize growth.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Your money questions, answered.</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown />
              </motion.div>
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={openIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="faq-answer text-start"
            >
              <p>{faq.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
