const express = require('express');
const cors = require('cors');


const port = 5000;
const app = express();
app.use(cors());
app.use(express.json());

let thoughts = [];

app.get("/thoughts", (req, res) => {
    res.json(thoughts);
});


app.delete("/thoughts/:id", (req, res) => {
    const id = req.params.id
    const idx = thoughts.findIndex((el) => el.id == id);
    const before = thoughts.slice(0, idx);
    const after = thoughts.slice(idx + 1);
    thoughts = [...before, ...after];
    res.json();
});


app.post("/thoughts", (req, res) => {


    thoughts.push(req.body);
    res.json(thoughts);
});

// по post запросу /thoughts будет вызываться функция
app.put("/thoughts", (req, res) => {
    if (req.body.propName !== 'edit') {
        thoughts = updateAction(thoughts, req.body.id, req.body.propName);
    }
    if(req.body.propName === 'edit') {
             thoughts = updateValue(thoughts, req.body.id, req.body.text);
    }
    res.json(thoughts);
});


const updateAction = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = {...oldItem, [propName]: !oldItem[propName]};
    return [
        ...arr.slice(0, idx),
        newItem,
        ...arr.slice(idx + 1)
    ];
};
const updateValue = (arr, id, val) => {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = {...oldItem, text: val, date: Date.now()};
    return [
        ...arr.slice(0, idx),
        newItem,
        ...arr.slice(idx + 1)
    ];
};


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});