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
                    if (q.showQuery && q.eval) {
                        if (!qidColors[q.qid]) {
                            setQidColors(pre => ({ ...pre, [q.qid]: randomcolor({ format: 'rgba', alpha: 0.5 }) }))
                        }
                    }
                })
        }, [data])
    })

    return (
        <>
            <ChartsLabels qidColors={qidColors} />
            <ChartAndFormList data={data} />
        </>
    )
}


export default MainChartAndForm
