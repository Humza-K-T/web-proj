import "./PatientReport.css";


const ReportTable = (props) => {
    return (
        <div className="report--table">
        <h4>{props.title}</h4>
            <span>CBC wdwdwdWBC: <input type="text" className="report--input" /></span>
            <span>CBC WBC: <input type="text" className="report--input" /></span>
            <br></br> <br></br>
            <span>CBC WBC: <input type="text" className="report--input" /></span>
            <span>CBC WdwdwBC: <input type="text" className="report--input" /></span>
            <br></br> <br></br>
            <span>CBC WdwdwBC: <input type="text" className="report--input" /></span>
            <span>CBC dwddWBC: <input type="text" className="report--input" /></span>
            <br></br> <br></br>
            <span>CBC dwdwdwdwdWBC: <input type="text" className="report--input" /></span>
        </div>
    );
}
export default ReportTable;


