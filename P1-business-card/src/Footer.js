import twitter from './images/twitter.png'
import facebook from './images/facebook.png'
import instagram from './images/instagram.png'
import linkedin from './images/linked-in.png'
export default function Footer(){
    return(
        <div className = "footer">
            <a href = 'https://www.twitter.com'><img src = {twitter} alt  =''/></a>
            <a href = 'https://www.facebook.com'> <img src = {facebook} alt = ''/></a>
            <a href='https://www.instagram.com'> <img src = {instagram} alt = ''/></a>
            <a href='https://www.linkedin.com'><img src = {linkedin} alt = ''/></a>
        </div>
    )
}