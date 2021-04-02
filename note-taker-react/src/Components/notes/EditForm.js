import React from 'react'
import useInput from '../../customHook/useInput';
import {useDispatch, useSelector} from 'react-redux';
import {updateNote} from '../../store/actions/noteAction';
import {useHistory} from 'react-router-dom'
const EditForm = () => {
    const note = useSelector((state)=> state.note);
    //console.log('edit Form:', note);
    const [title, bindTitle, resetTitle] = useInput(note.title);
    
    const [content, bindContent, resetContent] = useInput(note.content);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateNote({id: note.id,title, content}));
        resetContent();
        resetTitle();
        history.push('/');
    }
    return (
        <div className="section">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Update Note</h5>
                    <div className="input-field">
                        <input id="first_name" type="text" className="validate" {...bindTitle}/>
                        
                    </div>
                    <div className="input-field">
                        <textarea id="notes_content" className="materialize-textarea" {...bindContent}></textarea>
                       
                    </div>
                    <button className="btn green">update</button>
            </form>
            
        </div>
    )
}

export default EditForm;
