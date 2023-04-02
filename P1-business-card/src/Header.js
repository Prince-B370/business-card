//import logo from './logo.svg''
import email from './images/envelope.png'
import linkedin from './images/linkedin.png'
function Header(){
    return (
      <div className = 'header'>
          <img src= {require('./images/mark.jpg')}  alt='' className='myimage'/>
          <h3 className='name'>Benedict Kariuki</h3>
          <h5 className = 'work'>Software Developer</h5>
          <h6>Nairobi, Kenya</h6>
          <div className = 'buttons'>
          <a href = 'mailto:bnavy99@gmail.com'>
          <button className='email-btn'>
            <img src={email} alt=''className='email-btn-img' width = '20px'/>
            <h4>Email</h4>
          </button>
          </a>
          <button className = 'linked-in-btn'>
            <img src={linkedin} alt='' className='linked-in-btn-img' width= '20px'/>
            <h4 className = 'linkedin-btn-text'>LinkedIn</h4>
          </button>
          </div>
          
      </div>
     
    )
}
export default Header;