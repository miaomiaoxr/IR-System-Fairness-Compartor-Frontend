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
            {/* <Box
                sx={{ position: 'fixed', left: 137, ml: 2, mb: 2, width: '80%', borderRadius: 1, alignItems: 'center', justifyContent: 'center', margin: 'auto', padding: '1rem', zIndex: 5 }}
                bgcolor="#FFB948" >
                <Typography variant="h5" fontWeight={4}>
                    Compare ranking
                </Typography>
                <Typography fontWeight={4} >
                    Diffchecker will compare text to find the difference between two text files.
                    Just paste your files and click Find Difference
                </Typography>

                <Typography variant="h6" fontWeight={4}>
                    HightLightSelect: <HightLightSelect exposure={exposure} setExposure={setExposure} />
                </Typography>

            </Box>
            <Box
                sx={{ mb: 17, zIndex: 6, }} bgcolor="#000000"
            >
            </Box> */}

            <Box
                sx={{ position: 'fixed', width: '100%', display: 'flex',borderRadius: 1, alignItems: 'center', justifyContent: 'space-between', margin: 'auto', padding: '1rem', zIndex: 5 }}
                bgcolor="#FFB948" >
                <Typography variant="h6" fontWeight={4}>
                    Upload CSV and JSON, compare between Models and view Charts
                </Typography>
                <Typography variant="h6" fontWeight={4} sx={{mr:4}}>
                    Highlight Attributes: <HightLightSelect exposure={exposure} setExposure={setExposure} />
                </Typography>
            </Box>
            <Box
                sx={{ mb: 10,  }}
            ></Box>
            <Stack sx={{ mt: 1, ml: 1, maxHeight: "100%",  boxShadow: 6 }} direction="row" spacing={1} >
                {data.map(model =>
                    model.showModel &&
                    <Model
                        key={model.id}
                        modelID={model.id}
                        modelName={model.modelName}
                        modelVer={model.ver}
                        querys={model.querys}
                        exposure={exposure}
                        {...props}
                    />)}

            </Stack>
        </>
    )
}

export default ModelList;