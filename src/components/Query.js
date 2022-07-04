import Entry from "./Entry.js";

const Query = ({query}) =>{
    return (
        <>  
            <h3>qid: {query.qid}</h3>
            {query.data.map(entry => <Entry key={entry.docid} entry={entry} />)}
        </>
    )
}

export default Query;