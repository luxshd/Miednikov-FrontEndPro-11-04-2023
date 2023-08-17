function Header() {
    return (
        <header>
            <div className={'header_wrapper'}><span className={'logo'}>Stanislav's App</span>
                <ul className={'menu'}>
                    <li><p>Main</p></li>
                    <li><p>About Us</p></li>
                    <li><p>Contacts</p></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;