import mwiz from '../assets/projectsSrc/mwiz.jpg';
import askReddit from '../assets/projectsSrc/ask-reddit.png';
import chooseDif from '../assets/projectsSrc/choosedifferently.jpg';
import cryptoJunkiesAlpha from '../assets/projectsSrc/crypto-junkies-alpha.jpg';
import cryptoJunkies from '../assets/projectsSrc/crypto-junkies.jpg';
import cryptoNewsApi from '../assets/projectsSrc/crypto-news-api.jpg';
import neosec from '../assets/projectsSrc/neosec.jpg';
import dashboard3 from '../assets/projectsSrc/dashboard3.jpg';

const ProjectThumbnail = ({name}) => {
    const imgs = {
        'dashboard3' : dashboard3,
        'MWiz' : mwiz,
        'ask-reddit' : askReddit,
        'neosec' : neosec,
        'crypto-news-api' : cryptoNewsApi,
        'cryptojunkies' : cryptoJunkies,
        'crypto-junkies-alpha' : cryptoJunkiesAlpha,
        'choosedifferently' : chooseDif
    }
     return ( 
            <img src={imgs[name]} /> 
      );
 }
 
 export default ProjectThumbnail;