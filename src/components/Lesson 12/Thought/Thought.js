import React, {useState} from 'react';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';


const Thought = ({thought, onDelete, onToggleAct, updateText}) => {
    const [edit, setEdit] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const {id, text, like, favorite, date} = thought;
    const onEdit = () => {
        setEdit(true)
    }
    const onChange = (e) => {

        setInputValue(e.target.value)
        console.log(inputValue)
    };
    const onUpdate = () => {
        updateText(id, inputValue,'edit')
        setEdit(false)
    };

    let updateTime = Date.now() - date;
    updateTime=Math.floor(updateTime/60000);

    return (
        <Box style={{border: '1px solid grey'}} p={4} mb={2}>
            <Grid container spacing={4}>
                <Grid item sm={10}>
                    {edit ?
                        <TextField
                            value={text}
                            type='text'
                            onChange={onChange}/>
                        :
                        <>
                            <Typography variant='subtitle1'> Added/Edited by you {updateTime} min ago </Typography>
                            <Typography variant='h4'>{text}</Typography>
                        </>
                    }
                </Grid>
                <Grid item sm={2} style={{textAlign: 'center'}} display='flex'>
                    <Grid container spacing={1}>
                        <Grid item sm={6}>
                            {edit ?
                                <i className="material-icons icon medium edit-icon"
                                   style={{
                                       background: 'blue',
                                       cursor: 'pointer',
                                       borderRadius: '50%',
                                       color: 'white',
                                       padding: '7px'
                                   }}
                                   onClick={onUpdate}>
                                    save
                                </i>
                                :
                                <i className="material-icons icon medium edit-icon"
                                   style={{
                                       background: 'blue',
                                       cursor: 'pointer',
                                       borderRadius: '50%',
                                       color: 'white',
                                       padding: '7px'
                                   }}
                                   onClick={onEdit}>
                                    edit
                                </i>}
                        </Grid>

                        <Grid item sm={6}>
                            <i className="material-icons icon medium delete-icon"
                               style={{
                                   background: 'red',
                                   cursor: 'pointer',
                                   borderRadius: '50%',
                                   color: 'white',
                                   padding: '7px'
                               }}
                               onClick={() => onDelete(id)}
                            >
                                delete
                            </i>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={4}>
                <Grid item sm={6}
                      style={{
                          border: '1px solid black', textAlign: 'center', cursor: 'pointer',
                          background: `${like ? 'blue' : 'white'}`
                      }}
                      p={3}
                      onClick={() => onToggleAct(id, 'like')}>
                    <i className="material-icons icon medium icon">thumb_up_alt</i>
                </Grid>
                <Grid item sm={6}
                      style={{
                          border: '1px solid black', textAlign: 'center', cursor: 'pointer',
                          background: `${favorite ? 'red' : 'white'}`
                      }}
                      p={3}
                      onClick={() => onToggleAct(id, 'favorite')}>
                    <i className="material-icons icon medium icon">favorite</i>
                </Grid>
            </Grid>

        </Box>



        // <div className="thought">
        //     <div className="thought__box">
        //         <div className="thought__box-value">
        //             {/*      {editMode ? (*/}
        //             {/*          <input value={text} onChange={onInputChange} type="text"/>*/}
        //             {/*      ) : (*/}
        //             {/*          <div className="thought-info">*/}
        //             {/*<span>*/}
        //             {/*  Added/Edited by you {thoughtTime.minutes} min ago*/}
        //             {/*</span>*/}
        //             {/*              <p>{text}</p>*/}
        //             {/*          </div>*/}
        //             {/*      )}*/}
        //         </div>
        //         <div className="thought__box-buttons">
        //             {/*        {editMode ? (*/}
        //             {/*            <span*/}
        //             {/*                // onClick={onButtonSave}*/}
        //             {/*                className="icons-circle blue material-icons"*/}
        //             {/*            >*/}
        //             {/*  save*/}
        //             {/*</span>*/}
        //             {/*        ) : (*/}
        //             {/*            <span*/}
        //             {/*                onClick={onButtonEdit}*/}
        //             {/*                className="icons-circle blue material-icons"*/}
        //             {/*            >*/}
        //             {/*  create*/}
        //             {/*</span>*/}
        //             {/*        )}*/}
        //
        //             <span
        //                 // onClick={onButtonDelete}
        //                 className="icons-circle  material-icons"
        //             >
        //     delete
        //   </span>
        //         </div>
        //     </div>
        //
        //     <div className="thought__bottom-buttons">
        // <span
        //     // onClick={onButtonLike}
        //     className={"material-icons icons"}
        // >
        //   thumb_up_alt
        // </span>
        //
        //         <span
        //             // onClick={onButtonFavorite}
        //             className={"material-icons icons"}
        //         >
        //   favorite
        // </span>
        //     </div>
        // </div>
    );
};

export default Thought;