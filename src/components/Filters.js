import FilterByTitle from "./FilterByTitle";
import FilterByYear from "./FilterByYear";
import '../styles/Filters.scss';

function Filters (props) {
    const handleSubmit = (ev) => {
        ev.preventDefault();
    }
    return <form className="form" onSubmit={handleSubmit}>
        <FilterByTitle 
        handleTitle={props.handleTitle} inputTextValue={props.inputTextValue}/>
        <FilterByYear 
        years={props.years}
        handleYear={props.handleYear}
        inputYearValue={props.inputYearValue}/>
    </form>
}

export default Filters;