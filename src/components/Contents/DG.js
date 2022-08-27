import { DataGrid } from '@mui/x-data-grid';
import GeoAndGender from '../PropertyToColor/GeoAndGender.js'
import clsx from 'clsx';

const { GeoToProperty, genderToProperty } = GeoAndGender;

const DG = ({ exposure, ID_query }) => {
    const columns = (exposure) => {
        return ([
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
        ]);
    }

    return (
        <DataGrid
            sx={{
                boxShadow: 1,
                border: 1,
                borderColor: 'primary.light',
            }}
            rows={ID_query}
            columns={columns(exposure)}
            pageSize={5}
            rowsPerPageOptions={[5]}
        />
    )
}

export default DG;