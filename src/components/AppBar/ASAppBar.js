import { AppBar, Box, Toolbar, Typography} from '@mui/material';
import { BackDropButton } from '../BackDrop/BackDropButton';
import CSVForm from '../FileUpLoads/CSVForm';
import JSONForm from '../FileUpLoads/JSONForm';
import HightLightSelect from '../GroupSelect/HightLightSelect';
import {VerticalBarChart} from '../BackDrop/VerticalBarChart';
import DisplayControlModelAndQid from '../BackDrop/DisplayControl/DisplayControlModelAndQid';


const ASAppBar = ({data, setData, exposure, setExposure,modelsWithQid}) => {
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
                        <DisplayControlModelAndQid data={data} setData={setData} modelsWithQid={modelsWithQid}/>
                    </BackDropButton>
                </Toolbar>
            </AppBar>
            <Toolbar /> 
        </Box>
    );
}

export default ASAppBar;