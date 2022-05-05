import FilterByTitle from "./FilterByTitle";

function Filters (props) {
    const handleSubmit = (ev) => {
        ev.preventDefault();
    }
    return <form onSubmit={handleSubmit}>
        <FilterByTitle handleTitle={props.handleTitle} inputValue={props.inputValue}/>
    </form>
}

export default Filters;