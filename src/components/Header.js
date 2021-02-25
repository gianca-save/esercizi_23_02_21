function Header(props) {
    return (
        <header className='welcome'>
            <img src={props.logo} alt=""/>
            <span>{props.name}</span>
        </header>
    )
}

export default Header;