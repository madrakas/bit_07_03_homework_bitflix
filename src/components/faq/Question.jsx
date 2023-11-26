import { useState } from "react";
import style from "./Faq.module.css";

export function Question({question, answer}){
    const [answerClassName, setAnswerClassName] = useState(style.answer + ' ' + style.hidden );

    function answerClassNameUpdate(){
        if (answerClassName === style.answer + ' ' + style.hidden){
            setAnswerClassName(style.answer);
        } else{
            setAnswerClassName(style.answer + ' ' + style.hidden);
        }
    }

    return(
        <>
            <div className={style.question} onClick={answerClassNameUpdate}>
                <div className={style.questionText}>What is Bitflix?</div>
                <div className={style.questionExtender}>+</div>
            </div>
            <div className={answerClassName}>
                <p>Bitflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>
                <p>You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
            </div>
        </>
    );
}