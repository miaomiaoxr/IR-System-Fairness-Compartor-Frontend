import { Box } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';

const Query = ({ query }) => {
    const ID_query = query.data.map(entry =>{ return {...entry, id: entry.docid}});
    const columns = [
        {
            field: "id",
            headerName: "ID",
            hide: true,
        },
        {
            field: "docid",
            headerName: "docID",
            sortable:false
        },
        {
            field: "docno",
            headerName: "docNo",
            sortable:false
        },
        {
            field: "rank",
            headerName: "Rank",
        },
        {
            field: "score",
            headerName: "Score",
        },
        {
            field: "gender",
            headerName: "Gender",
            sortable:false
        },
        {
            field: "quality_scores",
            headerName: "Quality Scores",
        },
        {
            field: "geographic_locations",
            headerName: "Geo",
            sortable:false
        },
    ];

    return (
        <Box sx={{ width: 600,height: 400,pb:5}}>
            <h3>qid: {query.qid}</h3>
            {/* {query.data.map(entry => <Entry key={entry.docid} entry={entry} />)} */}
            <DataGrid
                rows={ID_query}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </Box>
    )
}

export default Query;