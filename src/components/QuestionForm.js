import React from 'react'

export const QuestionForm = ({ questions,setData }) => {
  return (
    <>
      {questions?.map((question) => (
        <tr key={question.id}>
          <td>{question.question}</td>
          <td>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name={question.question} id="inlineRadio1" value="Yes" onChange={setData} data-question={question.id}/>
              <label className="form-check-label" >Yes</label>
            </div>
          </td>
          <td>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name={question.question} id="inlineRadio1"  value="No" onChange={setData} data-question={question.id}/>
              <label className="form-check-label" >No</label>
            </div>
          </td>
          <td>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name={question.question} id="inlineRadio1"  value="Not Sure" onChange={setData} data-question={question.id} />
              <label className="form-check-label" >Not Sure</label>
            </div>
          </td>
        </tr>

      ))}


    </>
  )
}
