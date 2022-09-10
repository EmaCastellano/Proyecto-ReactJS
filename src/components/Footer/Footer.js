import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import './Footer.css'

const Footer = () => {
    return (
    <div class="redes">
    <button className="btn btn-danger mx-2"><BsFacebook/></button>
    <button className="btn btn-danger mx-2"><BsInstagram/></button>
    <button className="btn btn-danger mx-2"><BsTwitter/></button>
    <button className="btn btn-danger mx-2"><BsWhatsapp/></button>
    </div>
    )
}

    export default Footer