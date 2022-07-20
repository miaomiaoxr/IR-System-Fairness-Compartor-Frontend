import { AppBar, Box, Toolbar, Typography} from '@mui/material';
import { BackDropButton } from '../BackDrop/BackDropButton';
import CSVForm from '../FileUpLoads/CSVForm';
import JSONForm from '../FileUpLoads/JSONForm';


const ASAppBar = ({setData}) => {
    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        AS Comparer
                    </Typography>
                    <CSVForm setData={setData}/>
                    <JSONForm />
                    <BackDropButton />
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default ASAppBar;