import { useRef } from 'react';
import Network from '../../services/Network';
import { Button } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const postForm = Network.postForm;

const FileForm = ({afterUpload,mime,textContent,accept}) => {
    const fileInputRef = useRef();

    const handleFileUpload =async (e) => {
        e.preventDefault();
        // const name = modelNameRef.current.value.trim();
        const file = fileInputRef.current.files[0];

        if (fileInputRef.current.files.length === 0) {
            console.log('Please fill all the fields');
            return;
        }

        if(file.size > 10000000) {
            console.log('File size is too big');
            return;
        }

        if(mime && file.type !== mime) {
            console.log(`File type is not ${mime}`);
            return;
        }

        // postForm({name:name, file:file})
        postForm(file).then(res => afterUpload && afterUpload(res.data));

        
        // e.target.reset();
        // modelNameRef.current.value = '';//DON"T manipulate the DOM
        // fileInputRef.current.files = null;
    }

    // return (
    //     <form onSubmit={formSubmissionHandler} encType="multipart/form-data">
    //         <div className='form-control'>
    //             {/* <label>
    //                 Model Name:
    //                 <input type="text" ref={modelNameRef} />
    //             </label> */}
    //             {/* <br /> */}
    //             <label>
    //                 File:
    //                 <input type="file" ref={fileInputRef} name="model_file" />
    //             </label>
    //         </div>
    //         <div className='form-actions'>
    //             <button type="submit">Submit</button>
    //         </div>
    //     </form>
    // )
    return (
        <>
            <Button
                component="label"
                variant="outlined"
                startIcon={<UploadFileIcon />}
            >
                {textContent}
                <input type="file" accept={accept} ref={fileInputRef} hidden onChange={handleFileUpload} />
            </Button>
        </>);
}

export default FileForm;