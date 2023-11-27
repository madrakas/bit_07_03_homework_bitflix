import style from './Ad.module.css';
import { Ad } from './Ad';
import data from './data.json'

export function AdSection(){
    
    const adsArr = [];
    for (const ad in data){
        adsArr.push(data[ad]);
    }
    console.log(adsArr);
    adsArr.map((ad, idx) => (console.log(ad.image)));
    return(
        <div className={style.adSection}>
            {adsArr.map((ad, idx) => (
                <Ad key={idx}
                    reverseDirection={(idx % 2 > 0)}
                    img={ad.image} 
                    title={ad.title}
                    description={ad.description} />))
            }
        </div>
    );
}