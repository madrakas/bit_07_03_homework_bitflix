import { useState } from "react";
import style from "./Faq.module.css";

export function Question({question, answer}){
    const [answerClassName, setAnswerClassName] = useState(style.answer + ' ' + style.hidden );
    const [questionIcon, setQuestionIcon] = useState('+');
    const answersArr = answer.split('\n');

    console.log(answer);
    console.log('####');
    console.log(answersArr);

    const formattedAnswer =answersArr.map(answer => (<p> {answer} </p>));
    
    console.log(formattedAnswer);

    function answerClassNameUpdate(){
        if (answerClassName === style.answer + ' ' + style.hidden){
            setAnswerClassName(style.answer);
            setQuestionIcon('-')
        } else{
            setAnswerClassName(style.answer + ' ' + style.hidden);
            setQuestionIcon('+')
        }
    }

    return(
        <>
            <div className={style.question} onClick={answerClassNameUpdate}>
                <div className={style.questionText}>{question}</div>
                <div className={style.questionExtender}>{questionIcon}</div>
            </div>
            <div className={answerClassName}>
                {formattedAnswer}
            </div>
        </>
    );
}