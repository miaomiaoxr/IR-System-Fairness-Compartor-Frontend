import { Typography } from '@mui/material';

const Form = ({ noEval, evalsList }) => {
    return (
        <>
            <Typography variant="h7" sx={{ fontWeight: 600 }}>Statistics: </Typography>
            {noEval.length > 0 && <Typography variant="body1">{`No Evaluations in those qids:${noEval.join(', ')}`}</Typography>}
            {evalsList.length > 0 && evalsList.map(e => <Typography variant="body1" key={e.qid}>
                {`${e.qid} - F1: ${e.f1}`}
            </Typography>)}
        </>
    )
}

export default Form