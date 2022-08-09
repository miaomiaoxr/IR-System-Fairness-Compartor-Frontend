import { Typography } from '@mui/material';

const Form = ({ noEval, f1 }) => {
    return (
        <>
            <Typography variant="h7" sx={{ fontWeight: 600 }}>Statistics: </Typography>
            {noEval.length > 0 && <Typography variant="body1">{`No Evaluations in those qids:${noEval.join(', ')}`}</Typography>}
            <Typography variant="body1">{`F1: ${f1?f1:'no value'}`}</Typography>
        </>
    )
}

export default Form