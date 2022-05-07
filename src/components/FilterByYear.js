import '../styles/FilterInput.scss';

function FilterByYear (props) {
    const yearOptions = props.years.map((year, index) => <option key={index} value={year}> {year}</option>);
    const handleYear = (ev) => {
        props.handleYear(ev.target.value)
    };

    return (<>
    <label className="label" htmlFor="year">Año de la película</label>
    <select className="select" id="year" name="year" value={props.inputYearValue} onChange={handleYear}>
        <option value="all">Todos</option>
        {yearOptions}
    </select>
    </>)
}

export default FilterByYear;