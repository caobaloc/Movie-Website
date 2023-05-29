import { BsFacebook } from 'react-icons/bs'
import { TfiEmail } from 'react-icons/tfi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import {Link} from 'react-router-dom'
import '../Footer/Footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='content_footer'>
                <div className='copyRight'>
                    <a href='https://www.facebook.com/profile.php?id=100086753874895'>
                        <BsFacebook className='icon_footer' /> Cao Lộc
                    </a>
                </div>
                <div className=''>
                    <Link to="*" >
                        <TfiEmail className='icon_footer' /> Caoloc2001@gmail.com
                    </Link>
                </div>
                <div>
                    <Link to='*'>
                        <BsFillTelephoneFill className='icon_footer' /> 0968992924
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Footer