import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from '../../api/axios';

const ImportButton = () => {
  const [csvFile, setCsvFile] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('csv', csvFile, csvFile.name);
      axios.post("/api/createFromCSV", formData);
      setCsvFile('');
      alert("Data Inserted Successfully")

    } catch (e) {
      alert("Error in uploading data.Try Again")
    }
  }
  return (
    <>
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <Form.Group className="mb-4 mt-3" controlId="csvfile">
          <Form.Label>Upload CSV</Form.Label>
          <Form.Control type="file"
            accept=".csv"
            onChange={e => setCsvFile(e.target.files[0])}
            required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Upload
        </Button>
      </Form>
    </>
  );
}

export default ImportButton;
