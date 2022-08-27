import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { BackDropControl } from '../BackDrop/BackDropControl';
import UnifyUpload from '../FileUpLoads/UnifyUpload';
import DisplayControlModelAndQid from '../BackDrop/DisplayControl/DisplayControlModelAndQid';
import MainChartAndForm from '../BackDrop/Chart/MainChartAndForm';
import logo from './UofGlogo.png';


const ASAppBar = ({ data, setData, modelsWithQid }) => {
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
                        IR System Fairness Compartor 
                    </Typography>
                    <UnifyUpload setData={setData} />
                    <BackDropControl name='stats'>
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