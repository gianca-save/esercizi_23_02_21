const today = new Date();
const year = today.getFullYear();

function Footer(props) {
    return (
        <footer>{year} © {props.company}</footer>
    )
}

export default Footer;