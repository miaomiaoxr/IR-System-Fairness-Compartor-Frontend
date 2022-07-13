import FileForm from "./FileForm"
import Network from "../../services/Network"

const JSONForm = () => {
    const postForm = Network.postJSONForm;
    return (
        <FileForm accept=".json" mime="application/json" textContent="Upload JSON" postForm={postForm} />
    )
}

export default JSONForm