import style from "./Faq.module.css";

export function Question({question, answer, test, updateTest, id}){
    const answersArr = answer.split('\n');

    const formattedAnswer =answersArr.map(answer => (<p> {answer} </p>));
    
    function answerClassNameUpdate(event){
        if (parseInt(event.currentTarget.id) === parseInt(test))  {
            updateTest(null);
        } else {
            updateTest(event.currentTarget.id)
        } 
    }

    return(
        <>
            <div className={style.question} onClick={answerClassNameUpdate} id={id}>
                <div className={style.questionText}>{question}</div>
                <div className={style.questionExtender}>{(id === parseInt(test)) ? '-' : '+'}</div>
            </div>
            <div className={(id === parseInt(test)) ? style.answer : style.answer + ' ' + style.hidden}>
                {formattedAnswer}
            </div>
        </>
    );
}