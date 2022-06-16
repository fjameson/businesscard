import '../style.css';

export default function Navbar(){
  return(
    <nav>
      <img src={require("../images/react-icon-small.png")} className="nav--icon" />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  )
  /*
  return(
    <div className="Navbar">
      <div className="NavStart">
        <img src={require("../bratzlogo.jpeg")} className="Image"/>
        <h2 className="Title">Bratz Bar</h2>
      </div>
      <h3 className="SubTitle">Opening Night</h3>
    </div>
  )
  */
}
