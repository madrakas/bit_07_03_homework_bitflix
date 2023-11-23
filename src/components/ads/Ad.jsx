import style from './Ad.module.css';

export function Ad({ reverseDirection, img, alt, title, description }){
    const reverseRow = reverseDirection ? style.reverseRow : '';
    return(
        <div className={style.adContainer + ' ' + reverseRow}>
            <div className={style.imgContainer}>
                <img src={require('./img/'+ img)} alt={alt}/> 
            </div>
            <div className={style.description}>
                <div className={style.header}>
                    {title}
                </div>
                <div className={style.text}>
                    {description}
                </div>
            </div>
        </div>    
    );
}