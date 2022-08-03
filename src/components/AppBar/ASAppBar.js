import { AppBar, Box, Toolbar, Typography} from '@mui/material';
import { BackDropControl } from '../BackDrop/BackDropButton';
import CSVForm from '../FileUpLoads/CSVForm';
import JSONForm from '../FileUpLoads/JSONForm';
import HightLightSelect from '../GroupSelect/HightLightSelect';
import DisplayControlModelAndQid from '../BackDrop/DisplayControl/DisplayControlModelAndQid';
import ChartList from '../BackDrop/Chart/ChartList';


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
                    <BackDropControl name='chart'>
                        <ChartList />
                    </BackDropControl>
                    <BackDropControl name='Display'>
                        <DisplayControlModelAndQid data={data} setData={setData} modelsWithQid={modelsWithQid}/>
                    </BackDropControl>
                </Toolbar>
            </AppBar>
            <Toolbar /> 
        </Box>
    );
}

export default ASAppBar;