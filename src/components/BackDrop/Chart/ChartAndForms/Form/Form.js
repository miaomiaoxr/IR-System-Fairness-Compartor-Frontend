import { Typography } from '@mui/material';

const Form = ({ noEval }) => {
    return (
        <>
            <Typography variant="h7" sx={{ fontWeight: 600 }}>Statistics: </Typography>
            <Typography variant="body1">{`No Evaluations in those qids:${noEval.join(', ')}`}</Typography>
        </>
    )
}

export default Form