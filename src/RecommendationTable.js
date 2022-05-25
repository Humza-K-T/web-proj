import "./Recommendation.css";

const RecommendationTable = (props) => {
    return (



        <div className="recommendation--table">
            <h4> {props.title}</h4>
            <span>{props.inp1}: <input type="text" /></span>
            <br></br> <br></br>
            <span>{props.inp2}: <input type="text" /></span>
            <br></br> <br></br>
            <span>{props.inp3}: <input type="text" /></span>
            <br></br> <br></br>
            <span>{props.inp4}: <input type="text" /></span>
            <br></br> <br></br>
            <span>{props.inp5}: <input type="text" /></span>
        </div>

    );
}

export default RecommendationTable;