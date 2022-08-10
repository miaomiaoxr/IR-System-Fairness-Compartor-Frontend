import { Typography } from "@mui/material"

const PyEvals = ({ pyEval, showQids }) => {
    if (!pyEval) return <></>;
    const ret = [];
    for (let title in pyEval) {
        ret.push(<br key={title + 'br'} />);

        ret.push(<Typography key={title} variant="h7" sx={{ fontWeight: 600 }}>{title}: </Typography>);
        for (let v in pyEval[title]) {
            if (showQids.includes(v))
                ret.push(<Typography key={v + title} variant="body1">{`${v}: ${pyEval[title][v]}`}</Typography>);
        }

    }
    return ret;
}

export default PyEvals;