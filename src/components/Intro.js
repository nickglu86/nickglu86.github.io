import profile from '../assets/profile.jpeg';
import twitter from '../assets/twitter.png';
import linkedin from '../assets/linkedin.png';
import email from '../assets/email.png';
 

const Intro = () => {
    return ( 
        <section className="intro">
                <div className="inner">

                    <div className="right-column">
                        <figure>
                            <img className='profile-img' src={profile} alt="profile_img" />
                        </figure>
                    </div>
                    <div className="left-column">
                        <h1>Nick Glushchenko</h1>
                        <div className="position">Web Developer</div>
                      
                    </div>
                    <div className="contact">
                           <a href="https://www.linkedin.com/in/nickglushchenko/"  target="_blank" rel="noreffer" >
                                <img src={linkedin} alt="linkedin" title="LinkedIn: Nick Glushchenko"  /> 
                           </a>
                           <a href="mailto:enayfls@gmail.com"  target="_blank" rel="noreffer" >
                                <img src={email} alt="email"  title="eMail: enayfls@gmail.com"  />  
                           </a>  
                           <a href="https://twitter.com/nickglushchenko"  target="_blank"  rel="noreffer">
                                <img src={twitter} alt="twitter"  title="Twitter: Nick Glushchenko" />
                           </a>
                    </div>
                </div>
                
        </section>
     );
}
 
export default Intro;