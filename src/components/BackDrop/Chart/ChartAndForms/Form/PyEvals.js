import { Typography } from "@mui/material"

const PyEvals = ({ pyEval }) => {
    console.log(pyEval)
    return (
        pyEval ? <Typography>{pyEval}</Typography> : <></>
    )
}

export default PyEvals;