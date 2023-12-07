import './head.css';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate();
    const navigateToProduct =() => {
        navigate('/')
    }
    return(
        <div className='head'>
            <nav>
               <div className='rit'>
               <h1 className='heading' onClick={navigateToProduct}>Mobile Gadgets</h1>
               </div>
            </nav>
        </div>
    )
};

export default Header;