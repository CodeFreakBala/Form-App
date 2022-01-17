import React, { useEffect, useState } from 'react';
import classes from './form.module.scss'


function Form(props) {
    const [questionName, setQuestionName] = useState('');
    const [questionType, setQuestionType] = useState('');
    const [multichoice, setMultichoice] = useState('');
    const { formName } = props;
    const { closeModal } = props;
    const { clearFormName } = props;
    const [formData, setFormData] = useState([]);
    const [formDetail, setFormDetail] = useState([]);



    useEffect(() => {
        return () => {
            clearInputs()
            clearFormName()
        }
    },[])


    const addQuestionToFrom = () => {
        let multiChoiceQuestion = null;
        if (multichoice) {
            multiChoiceQuestion =  getMultiChoiceVal(multichoice);
        }
        let newFormData = [...formData]
        let data = {
            question: questionName,
            type: questionType,
            multi_choices: multiChoiceQuestion
        }
        newFormData.push(data)
        setFormData(newFormData);
        setQuestionName('')
        setQuestionType('')
        setMultichoice('')
    }


    const saveForm = () => {
        let data = {
            form_name:formName,
            formData:[...formDetail]
        };
        data.formData.push(formData)
        data.formSlug = (Math.random() + 1).toString(36).substring(7);
        let utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
        data.createdAt = utc;
        console.log(data)
        setFormDetail(data)
        localStorage.setItem("form_details", JSON.stringify(data));
        closeModal()
    }


    const clearInputs = () => {
        setFormData(null)
        setQuestionName('')
        setQuestionType('')
        setMultichoice('')
        setFormDetail(null)
    }

    const getMultiChoiceVal = (multichoice) => {
        let lines = multichoice.split(/\n/)
        let texts = [];
        for (var i = 0; i < lines.length; i++) {
            // only push this line if it contains a non whitespace character.
            if (/\S/.test(lines[i])) {
                texts.push(lines[i].trim());
            }
        }
        return texts;
    }

    return (
        <>
            <div>
                <input type="text"
                    placeholder='Enter Question'
                    className={classes.input}
                    value={questionName}
                    onChange={(event) => { setQuestionName(event.target.value) }}/>
                <select name="" id=""
                    placeholder='Enter Question Type'
                    className={classes.input}
                    value={questionType}
                    onChange={(event) => { setQuestionType(event.target.value) }}>
                    <option value="" defaultValue={" "}>Select your option</option>
                    <option value="Text">Text</option>
                    <option value="Multichoice Checkbox">Multichoice Checkbox</option>
                    <option value="Single Select radio">Single Select radio</option>
                </select>
                {questionType === 'Multichoice Checkbox' &&
                    <textarea className={classes.input} name="" id="" cols="30" rows="5"
                        placeholder='Enter Your Choice'
                        value={multichoice}
                        onChange={(event) => { setMultichoice(event.target.value) }}>
                    </textarea>
                }
                <button type="button" className="btn btn-success" onClick={addQuestionToFrom}>Add Question</button>
                <div className={classes.break}>Or</div>
                <button type="button" className="btn btn-primary" onClick={saveForm}>Save Form</button>
            </div>
        </>
    );
}

export default Form;
