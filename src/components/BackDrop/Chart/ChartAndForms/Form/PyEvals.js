import { Typography } from "@mui/material"

const PyEvals = ({ pyEval }) => {
    if (!pyEval) return <></>;
    const ret = [];
    for (let title in pyEval) {
        ret.push(<Typography key={title} variant="body1">{`${title}: ${pyEval[title]}`}</Typography>);//
    }
    return ret;
}

export default PyEvals;