import "./DashHeading.css";

export default function DashHeading(props) {
  return (
    <>
      <div className="DashHeading">
        <p>{props.name}</p>
      </div>
    </>
  );
}
