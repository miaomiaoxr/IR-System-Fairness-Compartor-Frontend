import { useRef, useState, useEffect } from 'react';
import { Button } from "@mui/material";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { green } from '@mui/material/colors';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const FileForm = ({ afterUpload, mime, textContent, accept, postForm }) => {
    const fileInputRef = useRef();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const timer = useRef();

    useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    const handleFileUpload = async (e) => {
        e.preventDefault();

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

        setSuccess(false);
        setLoading(true);
        postForm(file).then(res => afterUpload && afterUpload(res.data, fileType)).then(()=>{
            setLoading(false);
            setSuccess(true);
            timer.current = window.setTimeout(() => {
                setSuccess(false);
            }, 2000);
        })


    }

    const buttonSx = {
        ...(success && {
            bgcolor: green[500],
            '&:hover': {
                bgcolor: green[700],
            },
        }),
    };


    return (
            <Box sx={{ ml: 1, position: 'relative' }}>
                <Button
                    // sx={{ ml: 1 }}
                    sx={buttonSx}
                    component="label"
                    variant="contained"
                    startIcon={<UploadFileIcon />}
                    disabled={loading}
                >
                    {textContent}
                    <input type="file" accept={accept} ref={fileInputRef} hidden onChange={handleFileUpload} />
                </Button>
                {loading && (
                    <CircularProgress
                        size={24}
                        sx={{
                            color: green[500],
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            marginTop: '-12px',
                            marginLeft: '-12px',
                        }}
                    />
                )}

            </Box>
        );
}

export default FileForm;