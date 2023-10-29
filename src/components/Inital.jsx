

const Initial = ({send}) => {
    const handleClick = () => {
        send('START');
    };

    return (
        <div>
            Estado inicial
            <button onClick={handleClick}>Click me!</button>
        </div>
    );
};

export default Initial;
