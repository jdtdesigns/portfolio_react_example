function Footer(propsObj) {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="row justify-between">
      <p>&copy; {year}</p>
      <p>Dev'd and Designed by JD Tadlock</p>
      <p>Count: {propsObj.count}</p>
    </footer>
  )
}

export default Footer;