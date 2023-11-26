import style from './Faq.module.css';
import { Question } from './Question';

export function Faq(){
    return(
        <div className={style.faqContainer}>
            <div className={style.title}>
                Frequently Asked Questions
            </div>
            <Question />
            <Question />
            <Question />
            <Question />
        </div>
    );
}