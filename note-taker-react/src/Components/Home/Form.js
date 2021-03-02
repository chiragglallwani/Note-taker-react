import React from 'react'
import useInput from '../../customHook/useInput';
import {addNote} from '../../store/actions/noteAction';
import  {useDispatch} from 'react-redux'

const Form = () => {
    const [title, bindTitle, resetTitle] = useInput();
    
    const [content, bindContent, resetContent] = useInput();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNote({title, content}));
        resetContent();
        resetTitle();
    }
    return (
        <div className="section">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">New Note</h5>
                    <div className="input-field">
                        <input id="first_name" type="text" className="validate" {...bindTitle}/>
                        <label htmlFor="first_name">Note Title</label>
                    </div>
                    <div className="input-field">
                        <textarea id="notes_content" className="materialize-textarea" {...bindContent}></textarea>
                        <label htmlFor="notes_content">Notes Content</label>
                    </div>
                    <button className="btn green">Add</button>
            </form>
            
        </div>
    )
}

export default Form
