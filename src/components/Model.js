import QueryList from "./QueryList";

const Model = ({model,querys}) => {
    return (
        <>
            <h3>Model: {model}</h3>
            <QueryList querys={querys} />
        </>
    );
}

export default Model;