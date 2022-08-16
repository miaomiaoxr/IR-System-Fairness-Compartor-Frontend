import { Box } from "@mui/material";
import { BoxSettings, colorSettings } from "./BoxSettings.js";
import { memo } from "react";
import DG from "./DG.js";

const Query = (
    {
        query,
        exposure,
    }
) => {

    const ID_query = query.data.map(entry => { return { ...entry, id: entry.docid } });

    return (
        <Box sx={{
            width: 650,
            ...BoxSettings,
            ...colorSettings
        }}
        >
            <h3>qid: {query.qid}</h3>
            <DG
                ID_query={ID_query}
                exposure={exposure}
            />
        </Box>
    )
}

export default memo(Query);