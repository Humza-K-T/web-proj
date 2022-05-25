import "./PatientReport.css";

const ReportTable2 = (props) => {
    return (
        <div className="report--table2">
            <span>{props.inp1}: <input type="text" className="report--input" /></span>
            <br></br> <br></br>
            <span>{props.inp2}: <input type="text" className="report--input" /></span>
            <br></br> <br></br>
            <span>{props.inp3}: <input type="text" className="report--input" /></span>
            <br></br> <br></br>
            <span>{props.inp4}: <input type="text" className="report--input" /></span>
            <br></br> <br></br>
            <span>{props.inp5}: <input type="text" className="report--input" /></span>
            <br></br> <br></br>
            <span>{props.inp6}: <input type="text" className="report--input" /></span>
            <br></br> <br></br>
            <span>{props.inp7}: <input type="text" className="report--input" /></span>
            <br></br> <br></br>
            <span>{props.inp8}: <input type="text" className="report--input" /></span>
            <br></br> <br></br>
            <span>{props.inp9}: <input type="text" className="report--input" /></span>
            <br></br> <br></br>
            <span>{props.inp10}: <input type="text" className="report--input" /></span>
            <br></br> <br></br>
            <span>{props.inp11}: <input type="text" className="report--input" /></span>
        </div>
    );
}

export default ReportTable2;