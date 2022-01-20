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
                            <img src={profile} alt="profile_img" />
                        </figure>
                    </div>
                    <div className="left-column">
                        <h1>Nick Glushchenko</h1>
                        <div className="position">Web Developer</div>
                      
                    </div>
                    <div className="contact">
                           <a href="https://www.linkedin.com/in/nickglushchenko/"  target="_blank">
                                <img src={linkedin} alt="linkedin" /> 
                           </a>
                           <a href="mailto:enayfls@gmail.com"  target="_blank">
                                <img src={email} alt="email" />  
                           </a>  
                           <a href="https://twitter.com/nickglushchenko"  target="_blank">
                                <img src={twitter} alt="twitter" />
                           </a>
                    </div>
                </div>
        </section>
     );
}

export default Intro;