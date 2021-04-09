import styles from './QuoteBox.module.css'
import {useState, useEffect} from 'react'
import {FaTwitter,FaQuoteLeft} from 'react-icons/fa'

const QuoteText = () => {

    const [quote, setquote] = useState('loading...')
    const [author, setauthor] = useState('Loading...')
    
    async function getRandomQuote() {
        await fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1")
            .then( res => res.json() )
            .then( data => {
                setquote(data.quotes[0].text);
                setauthor(data.quotes[0].author); 
                console.log('fetch complete')
             } )
            .catch(error => console.error(error));
        }

        useEffect(() => {
            getRandomQuote();
        }, [])

        return (
        <div>
            <h2 id="text" className={`${styles.quotetext} ${styles.animated}`}><FaQuoteLeft size="1em" className={styles.quoteicon}/>{quote}</h2>
            <p id="author" className={styles.author}>- {author}</p>
            <div className={styles.buttons}>
                <button id="new-quote" className={styles.newquotebutton} onClick={()=>{getRandomQuote()}}>New Quote</button>
                <a id="tweet-quote" target="_blank" href="twitter.com/intent/tweet"><FaTwitter  size="1.5em" className={styles.twitter}/></a>
            </div>
        </div>
      );
}
 
export default QuoteText;