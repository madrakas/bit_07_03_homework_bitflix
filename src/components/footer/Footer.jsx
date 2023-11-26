import style from './Footer.module.css' ;

export function Footer(){
    return(
        <div className={style.footerCopntainer}>
            <div className={style.title}>
                <a href="/">Questions? Contact us.</a>
            </div>
            <div className={style.FooterColumn}>
                <div className={style.footerRow}><a href="/">FAQ</a></div>
                <div className={style.footerRow}><a href="/">Investor Relations</a></div>
                <div className={style.footerRow}><a href="/">Privacy</a></div>
                <div className={style.footerRow}><a href="/">Speed Test</a></div>
                <div className={style.footerRow}><a href="/">Bitflix Lithuania</a></div>
            </div>
            <div className={style.FooterColumn}>
                <div className={style.footerRow}><a href="/">Help Center</a></div>
                <div className={style.footerRow}><a href="/">Jobs</a></div>
                <div className={style.footerRow}><a href="/">Cookie Preferences</a></div>
                <div className={style.footerRow}><a href="/">Legal Guarantee</a></div>
            </div>
            <div className={style.FooterColumn}>
                <div className={style.footerRow}><a href="/">Account</a></div>
                <div className={style.footerRow}><a href="/">Ways to Watch</a></div>
                <div className={style.footerRow}><a href="/">Corporate Information</a></div>
                <div className={style.footerRow}><a href="/">Legal Notices</a></div>
            </div>
            <div className={style.FooterColumn}>
                <div className={style.footerRow}><a href="/">Media Center</a></div>
                <div className={style.footerRow}><a href="/">Terms of Use</a></div>
                <div className={style.footerRow}><a href="/">Contact Us</a></div>
                <div className={style.footerRow}><a href="/">Only on Bitflix</a></div>
            </div>

        </div>
        );
}