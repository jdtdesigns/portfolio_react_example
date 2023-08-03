function Header(propsObj) {
  const changePage = (event) => {
    event.preventDefault();

    const link = event.target;
    const text = link.innerText;

    switch (text) {
      case 'About':
        propsObj.setPage('about');
        break;
      case 'Contact':
        propsObj.setPage('contact');
        break;
      default:
        propsObj.setPage('landing');
    }
  }

  return (
    <header className="row justify-between align-center">
      <h3>Logo</h3>
      <nav>
        <a onClick={changePage} className={propsObj.page === 'landing' ? 'active' : ''} href="/">Home</a>
        <a onClick={changePage} className={propsObj.page === 'about' ? 'active' : ''} href="/about">About</a>
        <a onClick={changePage} className={propsObj.page === 'contact' ? 'active' : ''} href="/contact">Contact</a>
      </nav>
      <p>Count: {propsObj.count}</p>
    </header>
  )
}

export default Header;