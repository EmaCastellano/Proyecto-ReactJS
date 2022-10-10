import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import './Footer.scss'

// const Footer = () => {
//     return (
//     <footer className="footer">
//     <div class="redes">
//     <button className="btn btn-danger mx-2"><BsFacebook/></button>
//     <button className="btn btn-danger mx-2"><BsInstagram/></button>
//     <button className="btn btn-danger mx-2"><BsTwitter/></button>
//     <button className="btn btn-danger mx-2"><BsWhatsapp/></button>
//     </div>
//     </footer>
//     )
// }


const Footer = () => {
    return (
    <footer className="footer">
    <div className="footer__icons">
    <button className="btn btn-danger mx-2"><BsFacebook/></button>
    <button className="btn btn-danger mx-2"><BsInstagram/></button>
    <button className="btn btn-danger mx-2"><BsTwitter/></button>
    <button className="btn btn-danger mx-2"><BsWhatsapp/></button>
    </div>
    
    <div className="footer__contacto">
        <h2>Contacto</h2>
        <p>gamershouse@gmail.com</p>
        <p>Avenida Rivadavia 4585</p>
        <p>11-2356-4589</p>
        
        </div>
        
    </footer>
    )
}

export default Footer