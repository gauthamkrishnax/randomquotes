import styles from './QuoteBox.module.css'
import QuoteText from './QuoteText'


const QuoteBox = () => {

    return ( 
        <div id="quote-box" className={styles.bg}>
            <QuoteText />
        </div>
     );
}
 
export default QuoteBox;