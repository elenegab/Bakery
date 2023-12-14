import photo1 from '../photos/278729925_1707475749607932_9220360770734074957_n.jpg';
import photo2 from '../photos/278730508_1707481972940643_459334397370891818_n.jpg';
import photo3 from '../photos/278731169_1707482112940629_8947893436257202097_n.jpg';
import photo4 from '../photos/278734463_1707481936273980_3479228618219628609_n.jpg';
import photo5 from '../photos/278735832_1707479822940858_4169966664824668058_n.jpg';
import photo6 from '../photos/278741402_1707477706274403_7108323447255352212_n.jpg';
import photo7 from '../photos/278755930_1707480329607474_4251705429419977300_n.jpg';
import photo8 from '../photos/278756867_1707482056273968_4988854716443343365_n.jpg';
import photo9 from '../photos/278758572_1707477756274398_3684961664807377301_n.jpg';
import photo10 from '../photos/278767522_1707479769607530_5496846971005641595_n.jpg';
import Header from './header';
import './main.css';

const Main = () =>{
    return(
        <>
            <Header/>
            <div className='main-container'>
                <img className='photos' src={photo1} alt="photos"/>  
                <img className='photos' src={photo2} alt='photos'/>
                <img className='photos' src={photo3} alt='photos'/>
                <img className='photos' src={photo4} alt='photos'/>
                <img className='photos' src={photo5} alt='photos'/>
                <img className='photos' src={photo6} alt='photos'/>
                <img className='photos' src={photo7} alt='photos'/>
                <img className='photos'  src={photo8} alt='photos'/>
                <img className='photos' src={photo9} alt='photos'/>
                <img className='photos' src={photo10} alt='photos'/>

            </div>
        </>
    )
}
export default Main;