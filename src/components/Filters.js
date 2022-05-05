import FilterByTitle from "./FilterByTitle";
import FilterByYear from "./FilterByYear";

function Filters (props) {
    const handleSubmit = (ev) => {
        ev.preventDefault();
    }
    return <form onSubmit={handleSubmit}>
        <FilterByTitle 
        handleTitle={props.handleTitle} inputTextValue={props.inputTextValue}/>
        <FilterByYear 
        years={props.years}
        handleYear={props.handleYear}/>
    </form>
}

export default Filters;