import { useState } from "react";
import Arrow from "./down-arrow.svg"
import "./QAndA.css"

const FAQSection = (faqs) => {
    const FAQItem = ({ question, answer }) => {
        const [isOpen, setIsOpen] = useState(false);

        console.log(answer)

        return (
            <div className='frageUndAntwort'>
                <div className='frageDiv'>
                    <h3>{question}</h3>
                    <img src={Arrow} alt='arrow down' className='arrowDown' onClick={() => setIsOpen(!isOpen)} />
                </div>
                {isOpen &&
                        <div dangerouslySetInnerHTML={{__html:answer}} className="answerDiv"></div>
                }
            </div>
        );
    };

    return (
        <div className='fragenDiv'>
            {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
    );
};

export default FAQSection;