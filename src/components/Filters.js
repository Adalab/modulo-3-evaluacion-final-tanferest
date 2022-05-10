import FilterByTitle from "./FilterByTitle";
import FilterByYear from "./FilterByYear";
import FilterDirectors from "./FilterByDirector";
import '../styles/Filters.scss';

function Filters (props) {
    const handleSubmit = (ev) => {
        ev.preventDefault();
    }
    return <form className="form" onSubmit={handleSubmit}>
        <FilterDirectors directors={props.directors} handleDirectors={props.handleDirectors} directorsValue={props.directorsValue} />
        <FilterByTitle 
        handleTitle={props.handleTitle} inputTextValue={props.inputTextValue}/>
        <FilterByYear 
        years={props.years}
        handleYear={props.handleYear}
        inputYearValue={props.inputYearValue}/>
    </form>
}

export default Filters;