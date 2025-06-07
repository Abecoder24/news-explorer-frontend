import { Link } from "react-router-dom";
import "./Footer.css"
export default function Footer() {
    return (
        <footer className="footer">
            <p className="footer__copyrights">
                © 2025 NewsExplorer, Powered by News API
            </p>
            <ul className="footer__list">
                <li className="footer__list-element">
                    <Link to="/" className="footer__links">
                        Home
                    </Link>
                    <Link to="http://tripleten.com/" target="_blank" className="footer__links">
                        TripleTen
                    </Link>
                </li>
                <li className="footer__list-element">
                    <Link to="https://github.com/Abecoder24" target="_blank" className="footer__links">
                        <svg className="footer__links__svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 1.89453C6.41702 1.89453 1.89478 6.42298 1.89478 11.9998C1.89478 16.4662 4.79174 20.2503 8.80531 21.5902C9.30778 21.6832 9.49388 21.3731 9.49388 21.1001C9.49388 20.8582 9.48768 20.2254 9.48148 19.3818C6.67136 19.9897 6.07584 18.0295 6.07584 18.0295C5.61679 16.8632 4.95303 16.5531 4.95303 16.5531C4.03493 15.9265 5.02127 15.9389 5.02127 15.9389C6.03241 16.0134 6.5721 16.9811 6.5721 16.9811C7.47159 18.5257 8.93558 18.0791 9.51249 17.8185C9.60554 17.1672 9.86608 16.7205 10.1514 16.4662C7.90582 16.2119 5.54855 15.3434 5.54855 11.4725C5.54855 10.3683 5.93936 9.46883 6.59071 8.76164C6.48526 8.50731 6.13787 7.47755 6.68997 6.088C6.68997 6.088 7.53983 5.81505 9.46907 7.12396C10.2755 6.90064 11.1378 6.78898 12 6.78277C12.8561 6.78898 13.7246 6.90064 14.531 7.12396C16.4602 5.81505 17.3101 6.088 17.3101 6.088C17.8622 7.47755 17.5148 8.50731 17.4094 8.76164C18.0545 9.46883 18.4453 10.3683 18.4453 11.4725C18.4453 15.3558 16.0818 16.2057 13.83 16.46C14.1898 16.7702 14.5186 17.3905 14.5186 18.3334C14.5186 19.6857 14.5062 20.7713 14.5062 21.1063C14.5062 21.3793 14.6861 21.6894 15.201 21.5902C19.2145 20.2503 22.1053 16.4662 22.1053 12.006C22.1053 6.42298 17.5831 1.89453 12 1.89453Z" fill="#191717" />
                        </svg>
                    </Link>
                    <Link to="https://github.com/Abecoder24" target="_blank" className="footer__links">
                        <svg className="footer__links__svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_301_168)">
                                <path d="M20.8958 2H3.10417C2.49417 2 2 2.49417 2 3.10417V20.8967C2 21.5058 2.49417 22 3.10417 22H12.6833V14.255H10.0767V11.2367H12.6833V9.01083C12.6833 6.4275 14.2608 5.02083 16.5658 5.02083C17.67 5.02083 18.6183 5.10333 18.895 5.14V7.84L17.2967 7.84083C16.0433 7.84083 15.8008 8.43667 15.8008 9.31V11.2375H18.79L18.4008 14.2558H15.8008V22H20.8975C21.5058 22 22 21.5058 22 20.8958V3.10417C22 2.49417 21.5058 2 20.8958 2V2Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_301_168">
                                    <rect width="20" height="20" fill="white" transform="translate(2 2)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                </li>


            </ul>
        </footer>
    )
}