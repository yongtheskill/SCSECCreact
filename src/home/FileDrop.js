import React, { useMemo } from 'react';
import {useDropzone} from 'react-dropzone';

import BackupOutlinedIcon from '@material-ui/icons/BackupOutlined';
import CloudDoneOutlinedIcon from '@material-ui/icons/CloudDoneOutlined';
import CloudOffOutlinedIcon from '@material-ui/icons/CloudOffOutlined';

import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';


const styles = {
    errorBox: {
        marginTop: "20px",
        padding: "5px 15px 5px 15px"
    },
    iconWrapper: {
        fontSize: "100px",
    }
}

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '10px',
    padding: '50px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
  };
  
  const activeStyle = {
    borderColor: '#fff'
  };
  
  const acceptStyle = {
    backgroundColor: '#00e676'
  };
  
  const rejectStyle = {
    backgroundColor: '#ff1744'
  };

export default function FileDrop(props) {

  const [oldFiles, setOldFiles] = React.useState();

  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({    
    maxFiles:1,
    accept: 'image/*'
  });

  if (oldFiles !== acceptedFiles && acceptedFiles.length === 1){
      props.handleFile(acceptedFiles[0]);
      setOldFiles(acceptedFiles);
  }
  
    const style = useMemo(() => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {})
    }), [
      isDragActive,
      isDragReject,
      isDragAccept
    ]);


  return (
    <Collapse in={props.uploadActive}>
    <Paper style={styles.title}>
        
      <div {...getRootProps({ style })}  >
          
        <Collapse in={!isDragActive} style={styles.iconWrapper}>
          <BackupOutlinedIcon elevation={4} fontSize="inherit"/>
        </Collapse>
        <Collapse in={isDragReject} style={styles.iconWrapper}>
            <CloudOffOutlinedIcon elevation={4}  fontSize="inherit"/>
        </Collapse>
        <Collapse in={isDragAccept} style={styles.iconWrapper}>
            <CloudDoneOutlinedIcon elevation={4}  fontSize="inherit"/>
        </Collapse>
        <input {...getInputProps()} />
        <Typography variant="body1" color="textSecondary">Drag & Drop to upload</Typography>
        <Typography variant="caption" color="textSecondary">or click to browse</Typography>
        <Collapse in={isDragReject}>
          <Paper elevation={4} style={styles.errorBox}>
            <Typography variant="body1" color="textSecondary">Please upload only one image file.</Typography>
          </Paper>
        </Collapse>

      </div>
    </Paper>
    </Collapse>
  );
}