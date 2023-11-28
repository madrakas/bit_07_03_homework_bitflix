import style from './Faq.module.css';
import { Question } from './Question';
import data from './data.json';

export function Faq(){
    const questions  = [];
    for (const q in data){
        questions.push(data[q]);
    }
console.log(questions)
    return(
        <div className={style.faqContainer}>
            <div className={style.title}>
                Frequently Asked Questions
            </div>
            {questions.map((q, idx) => (
                <Question key={idx}
                          question={q.question} 
                          answer={q.answer}
                />))}
        </div>
    );
}