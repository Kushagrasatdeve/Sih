import React from 'react'
import { TextField, Button } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material'


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

      const handleSubmit = (event) => {
        event.preventDefault();
        
        
        setState('');
        setCity('');
        setSchoolName('');
        setFile(null);
      }
  return (
    <div>
       <form onSubmit={handleSubmit}>
        <TextField
          label="State"
          value={state}
          onChange={handleStateChange}
          required
        />
        <TextField
          label="City"
          value={city}
          onChange={handleCityChange}
          required
        />
        <TextField
          label="School Name"
          value={schoolName}
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
              color="default"
              component="span"
              startIcon={<CloudUploadIcon />}
            >
              Upload File
            </Button>
          </label>
        </div>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default Form
