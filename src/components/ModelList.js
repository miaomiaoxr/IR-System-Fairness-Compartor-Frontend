import Model from "./Model";

const ModelList = ({data}) => {
    return (
        <div>
            <h2>Model List</h2>
            {data.map(model => <Model key={model.model} model={model.model} querys={model.querys} />)}
        </div>
    )
}

export default ModelList;