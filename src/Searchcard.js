import "./App.css";
import "./search.css";

export default function SearchCard(props) {
  return (
    <>
      <div className="card">
        <div className="card-imageDiv">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg" />
        </div>
        <div className="detailsDiv">
          <div className="details-r">
            Name:
            <br />
            ID:
            <br />
            DOB:
            <br />
            Visit Date:
            <br />
          </div>
          <div className="details-l">
            {props.name}
            <br />
            {props.id}
            <br />
            {props.dob}
            <br />
            {props.visit}
            <br />
          </div>
        </div>
      </div>
    </>
  );
}
