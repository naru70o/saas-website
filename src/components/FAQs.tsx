"use client";

import React, { useState } from "react";
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";

import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.",
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.",
  },
];

const AccordiaItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div
      className="py-7 border-b border-white/30"
      key={question}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center cursor-pointer">
        <span className="flex-1 text-lg font-bold">{question}</span>

        {!isOpen ? <PlusIcon /> : <MinusIcon />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className=""
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: "16px" }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQs = () => {
  return (
    <div className="text-white bg-black bg-gradient-to-b from-[#5D2CA8] to-black py-[72px]">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:max-w-[648px] mx-auto sm:text-6xl tracking-tighter">
          Frequently asked questions
        </h2>

        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }) => (
            <AccordiaItem key={question} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  );
};