import style from './Ad.module.css';
import { Ad } from './Ad';

export function AdSection(){
    return(
        <div className={style.adSection}>
            <Ad reverseDirection={true} img='1.png' title="Enjoy on your TV" 
            description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
            alt="it's an ad!"/>
            <Ad reverseDirection={false} img='2.png' title="Enjoy on your TV" 
            description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
            alt="it's an ad!"/>
            <Ad reverseDirection={true} img='3.png' title="Enjoy on your TV" 
            description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
            alt="it's an ad!"/>
            <Ad reverseDirection={false} img='4.png' title="Enjoy on your TV" 
            description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
            alt="it's an ad!"/>
        </div>
    );
}