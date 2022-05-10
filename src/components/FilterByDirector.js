function FilterDirectors (props) {
    const directorOptions = props.directors.map((item, index) => 
    <option key={index} value={item}>{item}</option>);
    const handleDirectors = (ev) => {
        props.handleDirectors(ev.target.value);
    }

    return (
    <select value={props.directorsValue} onChange={handleDirectors}>
        <option value='all'>Todos</option>
        {directorOptions}
    </select>)
}

export default FilterDirectors;