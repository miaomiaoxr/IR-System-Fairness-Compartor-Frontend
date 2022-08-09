import { useRef } from 'react';
import { Button } from "@mui/material";

const FileForm = ({ afterUpload, mime, textContent, accept, postForm }) => {
    const fileInputRef = useRef();

    const handleFileUpload = async (e) => {
        e.preventDefault();
        // const name = modelNameRef.current.value.trim();
        const file = fileInputRef.current.files[0];
        const fileType = file.type;

        if (fileInputRef.current.files.length === 0) {
            console.log('No file selected');
            return;
        }

        if (file.size > 1000000000) {
            console.log('File size is too big');
            return;
        }

        if (mime && !mime.split(',').map(oneMime => oneMime.trim()).includes(file.type)) {
            console.log(`File type is not ${mime}`);
            return;
        }

        // postForm({name:name, file:file})s
        postForm(file).then(res => afterUpload && afterUpload(res.data, fileType));


    }


    return (
        <>
            <Button
                color="inherit"
                component="label"
            // variant="outlined"
            // startIcon={<UploadFileIcon />}
            >
                {textContent}
                <input type="file" accept={accept} ref={fileInputRef} hidden onChange={handleFileUpload} />
            </Button>
        </>);
}

export default FileForm;