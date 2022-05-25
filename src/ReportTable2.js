import "./PatientReport.css";

const ReportTable2 = (props) => {
  return (
    <div className="report--table2">
      <span>
        {props.inp1}:{" "}
        <input type="text" name={props.inp1} className="report--input" />
      </span>
      <br></br> <br></br>
      <span>
        {props.inp2}:{" "}
        <input type="text" name={props.inp2} className="report--input" />
      </span>
      <br></br> <br></br>
      <span>
        {props.inp3}:{" "}
        <input type="text" name={props.inp3} className="report--input" />
      </span>
      <br></br> <br></br>
      <span>
        {props.inp4}:{" "}
        <input type="text" name={props.inp4} className="report--input" />
      </span>
      <br></br> <br></br>
      <span>
        {props.inp5}:{" "}
        <input type="text" name={props.inp5} className="report--input" />
      </span>
      <br></br> <br></br>
      <span>
        {props.inp6}:{" "}
        <input type="text" name={props.inp6} className="report--input" />
      </span>
      <br></br> <br></br>
      <span>
        {props.inp7}:{" "}
        <input type="text" name={props.inp7} className="report--input" />
      </span>
      <br></br> <br></br>
      <span>
        {props.inp8}:{" "}
        <input type="text" name={props.inp8} className="report--input" />
      </span>
      <br></br> <br></br>
      <span>
        {props.inp9}:{" "}
        <input type="text" name={props.inp9} className="report--input" />
      </span>
      <br></br> <br></br>
      <span>
        {props.inp10}:{" "}
        <input type="text" name={props.inp10} className="report--input" />
      </span>
      <br></br> <br></br>
      <span>
        {props.inp11}:{" "}
        <input type="text" name={props.inp11} className="report--input" />
      </span>
    </div>
  );
};

export default ReportTable2;
