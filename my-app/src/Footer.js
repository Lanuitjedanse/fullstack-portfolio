import "./Footer.css";
import phone from "./phone.svg";
import email from "./email.svg";

export default function Footer() {
    return (
        <footer>
            <div className="box-footer">
                <div className="row">
                    <img src={phone} alt="phone icon" className="menu-icon" />
                    <p>01 51 75 72 24 71</p>
                </div>
                <div className="row">
                    <img src={email} alt="email icon" className="menu-icon" />
                    <a
                        className="email"
                        href="mailto:bellenger.lucie@gmail.com"
                    >
                        bellenger.lucie@gmail.com
                    </a>
                </div>
            </div>
        </footer>
    );
}
