import ChartsLabels from "./ChartLabels/ChartsLabels"
import ChartAndFormList from "./ChartAndForms/ChartAndFormList"
import { useEffect, useState } from "react"
import randomcolor from "randomcolor"

const MainChartAndForm = ({ data }) => {
    const [qidColors, setQidColors] = useState({});

    useEffect(() => {
        data.forEach(m => {
            if (m.showModel)
                m.querys.forEach(q => {
                    const qid = q.qid;
                    if (q.showQuery && m.evals && m.evals[qid]) {//this qid has eval data
                        if (!qidColors[qid]) {//this qid has no color yet
                            setQidColors(pre => {
                                const d = { ...pre }
                                d[qid] = randomcolor({format: 'rgba', alpha: 0.5})//give each qid a random color
                                return d;
                            }
                            )
                        }
                    }
                }
                )
        }, [data])
    })

    return (
        <>
            <ChartsLabels qidColors={qidColors} />
            <ChartAndFormList data={data} qidColors={qidColors} />
        </>
    )
}


export default MainChartAndForm
