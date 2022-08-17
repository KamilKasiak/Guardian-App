import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {

    const[isExpanded, setExpanded] = useState(false);

    const[note, setNote] = useState({
        title: "",
        content: "",
    });

    function handleChange(event){
        const {value, name} = event.target;

        setNote( (prevNote) => {
            return {
                ...prevNote,
                [name]:value,
            }
        })
    };

    function submit(event){
        props.onAdd(note);
        setNote({
        title: "",
        content: "",
        })
        event.preventDefault();
        setExpanded(false);
    }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? <input 
        name="title" 
        onChange={handleChange} 
        value={note.title} 
        placeholder="Title" /> 
        : null}
        
        <textarea name="content"
        onClick={ () => {
            setExpanded(true);
        }} 
        onChange={handleChange} 
        value={note.content} 
        placeholder="Take a note..." 
        rows={isExpanded ? "3" : "1"} />

        <Zoom in={isExpanded}>
        <Fab onClick={submit}> <AddIcon /> </Fab>
        </Zoom >
      </form>
    </div>
  );
}

export default CreateArea;