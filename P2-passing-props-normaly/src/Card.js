import email from './images/envelope.png'
import linked_in from './images/linkedin.png'
import twitter from './images/twitter.png'
import facebook from './images/facebook.png'
import instagram from './images/instagram.png'
import linkedin from './images/linked-in.png'

export default function Card({img,name,work,address,about,interests}){
    return(
        <div className = 'main-container'>


            <div className = 'header'>
                <img src = {img} alt='Here' className='myimage'/>
                <h3 className='name'>{name}</h3>
                <h5 className = 'work'>{work}</h5>
                <h6>{address}</h6>
                <div className = 'buttons'>
                    <a href = 'mailto:bnavy99@gmail.com'>
                        <button className='email-btn'>
                            <img src={email} alt=''className='email-btn-img' width = '20px'/>
                            <h4>Email</h4>
                        </button>
                    </a>
                    <a href = 'https://www.linkedin.com'>
                        <button className = 'linked-in-btn'>
                            <img src={linked_in} alt='' className='linked-in-btn-img' width= '20px'/>
                            <h4 className = 'linkedin-btn-text'>LinkedIn</h4>
                        </button>
                    </a>
                </div>
            </div>
        

            <div className = 'main'>
                <h3 className = "about">About</h3>
                <div>
                    {about}
                </div>
                <h3 className="interests">Interests</h3>
                <div>
                    {interests}
                </div>
            </div>


            <div className = 'footer'>
                <a href = 'https://www.twitter.com'>
                    <img src = {twitter} alt  =''/>
                </a>
                <a href = 'https://www.facebook.com'>
                    <img src = {facebook} alt = ''/>
                </a>
                <a href='https://www.instagram.com'> 
                    <img src = {instagram} alt = ''/>
                </a>
                <a href='https://www.linkedin.com'>
                    <img src = {linkedin} alt = ''/>
                </a>
            </div>
        </div>
        
        )
    }