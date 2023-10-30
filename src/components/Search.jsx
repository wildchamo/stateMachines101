

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
            <button onClick={regresar}>Regresar</button>
            <button onClick={avanzar}>Avanzar!</button>
        </div>
    );
};

export default Search;
