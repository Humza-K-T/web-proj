import "./Dash.css";
export default function Nav() {
  return (
<> 
 <nav className="navbar">
     <div className="navimageDiv">
         <div className="navouterDiv">
        <center>
          <h2 className="navheading">PHARMACOTHERAPY FOR OBESITY MANAGEMENT</h2>
        </center>
        </div>
        <div className="navinnerDiv">
        <img className="navimage "src="./Icon.png" width="30px" />
        </div>
        <div className="navButtonDiv">
            <button>Dashboard</button>
        </div>
      </div>
    </nav>
    </>      
  );
}
