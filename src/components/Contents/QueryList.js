import Query from "./Query";

const QueryList = ({ querys }) => {
    return (
        <>
            {querys.map(query => <Query key={query.qid} query={query} />)}
        </>
    );
}
export default QueryList;