import { Grid } from "@mui/material"
import OneLabel from "./OneLabel"

const ChartsLabels = ({ qidColors }) => {
  const items = [];
  for (let qid in qidColors) {
    items.push(
      <Grid item key={qid}>
        <OneLabel qid={qid} color={qidColors[qid]} />
      </Grid>)
  }

  return (
    <Grid container spacing={2}>
      {items}
    </Grid>
  )
}

export default ChartsLabels