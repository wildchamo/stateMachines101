

const Search = ({send}) => {
    const avanzar = () => {
        send('CONTINUE');
    };
        const regresar = () => {
        send('RETURN');
    };

    return (
        <div>
            Buscando <br />
            <select name="" id="">
                <option value="Colombia">Colombia</option>
                <option value="Buenos Aires">Buenos Aires</option>
            </select>
            <button onClick={regresar}>Regresar</button>
            <button onClick={avanzar}>Avanzar!</button>
        </div>
    );
};

export default Search;
