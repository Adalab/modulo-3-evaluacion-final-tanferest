import '../styles/FilterInput.scss';

function FilterByTitle (props) {
    const handleInput = (ev) => {
        props.handleTitle(ev.target.value);
    };
    return (
    <>
        <label className="label" htmlFor="title">Título de la película:</label>
        <input
        className="input-text"
        type="text"
        name="title"
        id="title"
        placeholder="Busca una película..."
        onChange={handleInput}
        value={props.inputTextValue}
        />
    </>
    );
};

export default FilterByTitle;