import "./PatientReport.css";

const ReportTable = (props) => {
  return (
    <div className="report--table rec-report--table ">
      <h4>{props.title}</h4>
      <span>
        {props.inp1}: <input type="text" className="report--input" />
      </span>
      <span>
        {props.inp2}: <input type="text" className="report--input" />
      </span>
      <br></br> <br></br>
      <span>
        {props.inp3}: <input type="text" className="report--input" />
      </span>
      <span>
        {props.inp4}: <input type="text" className="report--input" />
      </span>
      <br></br> <br></br>
      <span>
        {props.inp5}: <input type="text" className="report--input" />
      </span>
      <span>
        {props.inp6}: <input type="text" className="report--input" />
      </span>
      <br></br> <br></br>
      <span>
        {props.inp7}: <input type="text" className="report--input" />
      </span>
    </div>
  );
};
export default ReportTable;
