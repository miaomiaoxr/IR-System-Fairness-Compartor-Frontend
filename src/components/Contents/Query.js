import { Box } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import clsx from 'clsx';
import GeoAndGender from '../PropertyToColor/GeoAndGender.js'
import { memo } from "react";

const Query = (
    {
        query,
        exposure,
    }
) => {
    const ID_query = query.data.map(entry => { return { ...entry, id: entry.docid } });

    const {propertyToColor,GeoToProperty,genderToProperty} = GeoAndGender;


    const columns = [
        {
            field: "id",
            headerName: "ID",
            hide: true,
            
        },
        {
            field: "docid",
            headerName: "docID",
            sortable: false,
        },
        {
            field: "docno",
            headerName: "docNo",
            sortable: false,
        },
        {
            field: "rank",
            headerName: "Rank",
            width: 10,
        },
        {
            field: "score",
            headerName: "Score",
            width: 100,
        },
        {
            field: "gender",
            headerName: "Gender",
            sortable: false,
            width: 70,
            cellClassName: (params) => {
                if (exposure !== 'gender') return;
                
                return clsx('query', genderToProperty[params.value.toString()]);
            },
        },
        {
            field: "quality_scores",
            headerName: "Quality Scores",
        },
        {
            field: "geographic_locations",
            headerName: "Geo",
            sortable: false,
            width: 120,
            cellClassName: (params) => {
                if (exposure !== 'geo') return;
                
                return clsx('query', GeoToProperty[params.value.toString()]);
            },
        },
    ];

    return (
        <Box sx={{
            width: 650, height: 400, pb: 5,
            '& .query.first_color': {
                backgroundColor: propertyToColor['first_color'],
            },
            '& .query.second_color': {
                backgroundColor: propertyToColor['second_color'],
            },
            '& .query.third_color': {
                backgroundColor: propertyToColor['third_color'],
            },
            '& .query.fourth_color': {
                backgroundColor: propertyToColor['fourth_color'],
            },
            '& .query.fifth_color': {
                backgroundColor: propertyToColor['fifth_color'],
            },
            '& .query.sixth_color': {
                backgroundColor: propertyToColor['sixth_color'],
            },
            '& .query.other_color': {
                backgroundColor: propertyToColor['other_color'],
            }
        }}

        >
            <h3>qid: {query.qid}</h3>
            <DataGrid
                rows={ID_query}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </Box>
    )
}

export default memo(Query);