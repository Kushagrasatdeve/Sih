import React,{useState} from 'react'
import Box from "@mui/joy/Box";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { TextField, Button } from '@mui/material'



const Form = () => {
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [schoolName, setSchoolName] = useState('');
    const [file, setFile] = useState(null);

    const handleStateChange = (event) => {
        setState(event.target.value);
      }
    
      const handleCityChange = (event) => {
        setCity(event.target.value);
      }
    
      const handleSchoolNameChange = (event) => {
        setSchoolName(event.target.value);
      }
    
      const handleFileChange = (event) => {
        setFile(event.target.files[0]);
      }

      const handleFileUpload = () => {
        console.log(file);
        setFile(null);
      }

      const handleSubmit = (event) => {
        event.preventDefault();
        
        
        setState('');
        setCity('');
        setSchoolName('');
        setFile(null);
      }
  return (
    <Box m={3}>
       <form onSubmit={handleSubmit}>
        <TextField
          label="State"
          value={state}
          sx={{mb: 3}}
          fullWidth
          width={25}
          onChange={handleStateChange}
          required
        />
        <TextField
          label="City"
          value={city}
          sx={{mb: 3}}
          fullWidth
          onChange={handleCityChange}
          required
        />
        <TextField
          label="School Name"
          value={schoolName}
          sx={{mb: 3}}
          fullWidth
          onChange={handleSchoolNameChange}
          required
        />
        <div>
          <input
            accept="application/pdf" // Only allow PDF files
            id="file-upload"
            type="file"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          <label htmlFor="file-upload">
            <Button
              variant="contained"
              component="span"
              onClick={handleFileUpload}
              startIcon={<FileUploadIcon/>}
            >
              Upload File
            </Button>
          </label>
        </div>
        <br/>
        <Button type="submit" variant="contained" color="primary"
        endIcon={<KeyboardArrowRightIcon/>}>
          Submit
        </Button>
      </form>
    </Box>
  )
}

export default Form
