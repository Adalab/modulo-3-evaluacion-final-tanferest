function FilterByTitle (props) {
    const handleInput = (ev) => {
        props.handleTitle(ev.target.value);
    };
    return (
    <>
        <label htmlFor="title">Título de la película:</label>
        <input
        type="text"
        name="title"
        id="title"
        onChange={handleInput}
        />
    </>
    );
};

export default FilterByTitle;