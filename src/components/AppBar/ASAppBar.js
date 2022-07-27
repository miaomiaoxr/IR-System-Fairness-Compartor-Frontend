import { AppBar, Box, Toolbar, Typography} from '@mui/material';
import { BackDropButton } from '../BackDrop/BackDropButton';
import CSVForm from '../FileUpLoads/CSVForm';
import JSONForm from '../FileUpLoads/JSONForm';
import HightLightSelect from '../GroupSelect/HightLightSelect';
import {VerticalBarChart} from '../BackDrop/VerticalBarChart';
import DisplayControlModelAndQid from '../BackDrop/DisplayControlModelAndQid';


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
                    <BackDropButton name='chart'>
                        <VerticalBarChart />
                    </BackDropButton>
                    <BackDropButton name='Display'>
                        <DisplayControlModelAndQid />
                    </BackDropButton>
                </Toolbar>
            </AppBar>
            <Toolbar /> 
        </Box>
    );
}

export default ASAppBar;