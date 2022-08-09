// const JSONForm = ({ setData }) => {
//     const postForm = Network.postJSONForm;


//     return (
//         <FileForm accept=".json" mime="application/json" textContent="Upload JSON" postForm={postForm} afterUpload={afterUpload} />
//     )
// }

const afterUpload = (data, setData) => {
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

export default afterUpload;