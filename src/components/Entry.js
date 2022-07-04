const Entry = ({ entry }) => {
    return (
        <>
            <p>docid: {entry.docid}</p>
            <p>rank: {entry.rank}</p>
            <p>score: {entry.score}</p>
        </>
    );
}

export default Entry;