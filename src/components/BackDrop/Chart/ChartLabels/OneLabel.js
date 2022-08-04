import { Typography } from "@mui/material"

const OneLabel = ({qid,color}) => {
  return (
    <Typography variant='body1' style={{color:color}}>{qid}</Typography>
  )
}

export default OneLabel