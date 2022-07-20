import { AppBar, Box, Toolbar, Typography} from '@mui/material';
import { BackDropButton } from '../BackDrop/BackDropButton';
import CSVForm from '../FileUpLoads/CSVForm';
import JSONForm from '../FileUpLoads/JSONForm';
import HightLightSelect from '../GroupSelect/HightLightSelect';


const ASAppBar = ({setData, exposure, setExposure}) => {
    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        AS Comparer
                    </Typography>
                    <HightLightSelect exposure={exposure} setExposure={setExposure}/> 
                    <CSVForm setData={setData}/>
                    <JSONForm />
                    <BackDropButton />
                </Toolbar>
            </AppBar>
            <Toolbar /> 
        </Box>
    );
}

export default ASAppBar;