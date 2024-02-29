import { MdLocalShipping } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';
import { Header, NavLink } from './styles';
import logo from './../../assets/logo.webp';
import { CiLogout } from 'react-icons/ci';
import { useAuth0 } from "@auth0/auth0-react";
import { Profile } from '../Profile';
export function Nav() {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    // 2:43:20

    return (
        <Header>
            <div className="header">
                <div className="top_header">
                    <div className="icon">
                        <MdLocalShipping />
                    </div>
                    <div className="info">
                        <p>Free Shipping When Shopping upto $1000</p>
                    </div>
                </div>
                <div className="mid_header">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="search_box">
                        <input
                            placeholder="search"
                            type="text"
                            value={'search'}
                        />
                        <button>
                            <AiOutlineSearch />
                        </button>
                    </div>
                    {isAuthenticated ?
                        <div className="user">
                            <div className="icon">
                                <CiLogout />
                            </div>
                            <div className="btn">
                                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                            </div>
                        </div>
                        :
                        <div className="user">
                            <div className="icon">
                                <FiLogIn />
                            </div>
                            <div className="btn">
                                <button onClick={() => loginWithRedirect()}>Login</button>
                            </div>
                        </div>
                    }
                </div>
                <div className="last_header">
                    <div className="user_profile">
                        <Profile />
                    </div>
                    <div className="nav">
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/shop">Shop</NavLink></li>
                            <li><NavLink to="/collection">collection</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>
                    <div className="offer">
                        <p>flat 10% over all iphone</p>
                    </div>
                </div>
            </div>
        </Header>
    )
}