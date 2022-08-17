import { Box } from "@mui/material";
import { BoxSettings, colorSettings } from "./BoxSettings.js";
import { memo } from "react";
import DG from "./DG.js";

const QueryWithSeq = (
    {
        query,
        exposure,
    }
) => {

    const { seq_ids } = query;
    const ID_query = query.data.map(entry => { return { ...entry, id: entry.docid } });

    return (
        <>
            <h3>qid: {query.qid}</h3>
            {seq_ids.map(seq_id => {
                const oneSeq = ID_query.filter(entry => entry.seq_id === seq_id);
                // if(oneSeq.length === 0) return;
                return (
                    <Box key={seq_id} sx={{
                        width: 650,
                        ...BoxSettings,
                        ...colorSettings
                    }}
                    >
                        <h3>seq_id: {seq_id}</h3>
                        <DG
                            ID_query={oneSeq}
                            exposure={exposure}
                        />
                    </Box>
                )
            })}
        </>
    )
}

export default memo(QueryWithSeq);