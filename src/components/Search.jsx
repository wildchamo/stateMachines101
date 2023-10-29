

const Search = ({send}) => {
    const avanzar = () => {
        send('CONTINUE');
    };
        const regresar = () => {
        send('RETURN');
    };

    return (
        <div>
            Buscando
            <button onClick={avanzar}>Avanzar!</button>
            <button onClick={regresar}>Regresar</button>
        </div>
    );
};

export default Search;
