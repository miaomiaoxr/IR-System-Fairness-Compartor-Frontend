import FileForm from "./FileForm"
import Network from "../../services/Network"

const JSONForm = ({ setData }) => {
    const postForm = Network.postJSONForm;

    const afterUpload = (data) => {
        setData(m => {
            const models = [...m];
            data.forEach(oneModelEval => {
                const target = m.find(oneModel => oneModel.id === oneModelEval.id)
                if (target) {
                    target.evals = oneModelEval.evals;
                }
            })
            return models;
        });
    }
    return (
        <FileForm accept=".json" mime="application/json" textContent="Upload JSON" postForm={postForm} afterUpload={afterUpload} />
    )
}

export default JSONForm