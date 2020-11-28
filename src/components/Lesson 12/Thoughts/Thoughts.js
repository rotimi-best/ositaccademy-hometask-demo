import React, {useState, useEffect} from 'react';
import Thought from "../Thought";
import TextField from '@material-ui/core/TextField';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import Api from "../service/api";


const Thoughts = () => {
    const [inputValue, setInputValue] = useState('');
    const [thoughtsList, setThoughtsList] = useState([]);

    const api = new Api();


    useEffect(() => {
        getThoughts()
    }, []);
    const getThoughts = () => {
        api.getThoughts().then(res => setThoughtsList(res));
    }
    const onChange = (e) => {
        setInputValue(e.target.value)
    };

    const onSubmit = (e) => {
        e.preventDefault()
        const thought = {
            id: new Date().getUTCMilliseconds(),
            text: inputValue,
            like: false,
            favorite: false,
            date: Date.now()
        };
        if (inputValue) {
            api.addThought(thought).then(res=> getThoughts());
            setInputValue('')
        }
    }
    const onDeleteThought = (id) => {
        api.deleteThought(id).then( res=>getThoughts());

    }
    const onToggleAct = (id,propName) => {
        api.updateThought({id,propName}).then( res=>getThoughts());

    }
    const updateText = (id,text,propName) => {
        api.updateThought({id,text,propName}).then( res=>getThoughts());

    }

    return (
        <Box>
            <Typography variant='h2'>My Thoughts App</Typography>
            {thoughtsList.map(thought => (
                <Thought key={thought.id}
                         thought={thought}
                         onDelete={onDeleteThought}
                         onToggleAct={onToggleAct}
                         updateText={updateText}
                />
            ))}

            <form onSubmit={onSubmit}>
                <TextField
                    value={inputValue}
                    type="text"
                    placeholder="Write your thought and press enter"
                    onChange={onChange}
                    variant="outlined"

                />
            </form>
        </Box>
    );
};

export default Thoughts;