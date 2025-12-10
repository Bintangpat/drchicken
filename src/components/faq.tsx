import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Bagaimana saya dapat memesan secara online?",
    answer: "Dengan menghubungi melalui whatsapp."
  },
  {
    question: "Bagaimana saya dapat membeli langsung dari tempat?",
    answer: "Anda dapat menghubungi dukungan melalui email atau formulir kontak."
  },
  {
    question: "Apakah Dr.Chicken halal?",
    answer: "Ya bahan dan proses dilalui sudah sesuai standar halal."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="container py-24">
      {faqData.map((item, index) => (
        <div
          key={index}
          className=" relative transition-all p-4 duration-500 ease-in-out border-b-2 border-red-900"
        >
          <button
            onClick={() => toggleFAQ(index)}
        className="text-xl text-red-600 justify-between flex w-full"
          >
            {item.question}
            <span>{openIndex === index ? "−" : "+"}</span>
          </button>

          {openIndex === index && (
            <p className="ml-12 pt-2 text-red-600 text-xl">
              {">"}   {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
