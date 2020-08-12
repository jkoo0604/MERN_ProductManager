import React, { useState } from 'react';

const OneForm = props => {
    const { initialTitle, initialPrice, initialDescription, submitHandler } = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const handleSubmit = e => {
        e.preventDefault();
        submitHandler({title, price, description});
        setTitle('');
        setPrice(0);
        setDescription('');
    };

    return(
            <form onSubmit={handleSubmit}>
                <div className="form-group row">
                    <label htmlFor="title" className="col-sm-4 col-form label">Title</label>
                    <div className="col-sm-8">
                        <input type="text" value={title} className="form-control" onChange={e=>{setTitle(e.target.value)}}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="price" className="col-sm-4 col-form label">Price</label>
                    <div className="col-sm-8">
                        <input type="number" step="0.01" min="0" value={price} className="form-control" onChange={e=>{setPrice(e.target.value)}}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="description" className="col-sm-4 col-form label">Description</label>
                    <div className="col-sm-8">
                        <input type="text" value={description} className="form-control" onChange={e=>{setDescription(e.target.value)}}/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm">
                        <button type="submit" className="btn btn-dark btn-sm">Submit</button>
                    </div>
                </div>
            </form>
    )
}

export default OneForm;