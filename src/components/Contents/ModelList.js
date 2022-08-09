import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Model from "./Model";
import HightLightSelect from "../GroupSelect/HightLightSelect";
import { Typography } from "@mui/material";

const ModelList = ({ data, exposure, setExposure, ...props }) => {

    //...props:exposure, setData, renameModel
    //
    // direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}
    return (
        <>
            <Box
                sx={{mb:2, width: '80%', flexDirection: 'column', borderRadius: 1, alignItems: 'center', justifyContent: 'center', margin: 'auto', padding: '1rem' }}
                bgcolor="#FFB948" >
                <Typography variant="h5" fontWeight={4}>
                    Compare ranking
                </Typography>
                <Typography fontWeight={4} color='white '>
                    Diffchecker will compare text to find the difference between two text files.
                    Just paste your files and click Find Difference</Typography>
                <HightLightSelect exposure={exposure} setExposure={setExposure} />
            </Box>
            <Stack sx={{mt:2, maxHeight: "100%", width: "100%",boxShadow:4,flexWrap:'wrap' }} justifyContent="center" direction="row" spacing={1}>
                {data.map(model =>
                    model.showModel &&
                    <Model
                        key={model.id}
                        modelID={model.id}
                        modelName={model.modelName}
                        querys={model.querys}
                        exposure={exposure}
                        {...props}
                    />)}

            </Stack>
        </>
    )
}

export default ModelList;