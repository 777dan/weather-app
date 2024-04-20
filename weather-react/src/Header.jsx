import logo from "./assets/images/logo.png";
import Image from "./Image.jsx";

function Header(props) {
    return (
        <div className={props.className}>
            <Image src={logo} />
            <h1>Weather</h1>
        </div>
    );
}

export default Header;