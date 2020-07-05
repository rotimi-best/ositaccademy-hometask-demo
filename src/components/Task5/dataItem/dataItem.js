import React, {Fragment} from 'react';
import './dataItem.css';

const DataItem = ({data}) => {

    const elements = data.map((item) => {
        return (
            <div
                className='data-item'
                key={item.id}>
                <div><strong>Id: </strong>{item.id}</div>
                <div><strong>Title: </strong>{item.title}</div>
                <div><strong>Body: </strong>{item.body}</div>

            </div>
        )
    });
    return (
        <Fragment>
            {elements}
        </Fragment>
    );
};

export default DataItem;