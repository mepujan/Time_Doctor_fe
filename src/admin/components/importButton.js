import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';

function ImportButton() {
  const inputRef = useRef(null);

  const handleImportClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      const fileContent = reader.result;
      // Do something with the file content
    };
  };

  return (
    <>
      <Form.Group className="mb-4 mt-3" controlId="profilepic">
        <Form.Label>Upload CSV</Form.Label>
        <Form.Control type="file"
          accept=".csv"
          required />
      </Form.Group>
    </>
  );
}

export default ImportButton;
