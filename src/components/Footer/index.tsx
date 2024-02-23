import { FaHeadphones, FaPiggyBank, FaShippingFast, FaWallet } from 'react-icons/fa'
import { ContainerFooter } from './styles'
import logo from './../../assets/logo.webp'

export function Footer() {
    return (
        <>
            <ContainerFooter>
                <div className="container">
                    <div className="left_box">
                        <div className="box">
                            <div className="icon_box">
                                <FaPiggyBank />
                            </div>
                            <div className="detail">
                                <h3>Great Saving</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon_box">
                                <FaShippingFast />
                            </div>
                            <div className="detail">
                                <h3>Free delivery</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon_box">
                                <FaHeadphones />
                            </div>
                            <div className="detail">
                                <h3>24x7 Support</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon_box">
                                <FaWallet />
                            </div>
                            <div className="detail">
                                <h3>Money back</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="right_box">
                        <div className='header'>
                            <img src={logo} alt="" />
                            <p>
                                Discover the future of technological
                                innovation on our e-commerce platform, where
                                excellence meets the latest in smart devices
                                and digital solutions.
                            </p>
                        </div>
                        <div className="bottom">
                            <div className="box">
                                <h3>Your Account</h3>
                                <ul>
                                    <li>About us</li>
                                    <li>Account</li>
                                    <li>Payment</li>
                                    <li>Sales</li>
                                </ul>
                            </div>
                            <div className="box">
                                <h3>Products</h3>
                                <ul>
                                    <li>Delivery</li>
                                    <li>Track Oder</li>
                                    <li>New product</li>
                                    <li>Old product</li>
                                </ul>
                            </div>
                            <div className="box">
                                <h3>Contact us</h3>
                                <ul>
                                    <li>2500, Silver Business Gold PointCanada</li>
                                    <li>+(081) 0800 400 342</li>
                                    <li>info@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </ContainerFooter>
        </>
    )
}
