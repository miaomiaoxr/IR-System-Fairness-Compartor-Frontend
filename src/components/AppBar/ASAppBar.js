import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { BackDropControl } from '../BackDrop/BackDropControl';
import CSVForm from '../FileUpLoads/CSVForm';
import JSONForm from '../FileUpLoads/JSONForm';
import HightLightSelect from '../GroupSelect/HightLightSelect';
import DisplayControlModelAndQid from '../BackDrop/DisplayControl/DisplayControlModelAndQid';
import MainChartAndForm from '../BackDrop/Chart/MainChartAndForm';
import logo from './UofGlogo.png';


const ASAppBar = ({ data, setData, exposure, setExposure, modelsWithQid }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" style={{ background: '#005C8A' }}>
                <Toolbar>
                    <Box
                        component="img"
                        sx={{
                            height: 50,
                        }}
                        alt="UofG logo"
                        src={logo}
                        
                    />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        AS Comparer
                    </Typography>
                    {/* <HightLightSelect exposure={exposure} setExposure={setExposure} /> */}
                    <CSVForm setData={setData} />
                    <JSONForm setData={setData} />
                    <BackDropControl name='chart'>
                        <MainChartAndForm data={data} />
                    </BackDropControl>
                    <BackDropControl name='Display'>
                        <DisplayControlModelAndQid data={data} setData={setData} modelsWithQid={modelsWithQid} />
                    </BackDropControl>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </Box>
    );
}

export default ASAppBar;