import {useState} from 'react';
import {useNavigate} from 'react-router';
import {createOne} from '../../services/petService';


export function Create() {
    const [state, setState] = useState({
        name: '',
        description: '',
        imageURL: '',
        category: '',
        likes: 5,
    });
    const navigate = useNavigate();

    function changeHandler(event) {
        const name = event.target.name;
        const value = event.target.value;
        setState(state => ({...state, [name]: value}));
    };

    async function submitHandler(event) {
        event.preventDefault();
        await createOne(state);
        navigate('/pets');
    };

    return (
        <section className="create">
            <form onSubmit={submitHandler}>
                <fieldset>
                    <legend>Add new Pet</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input onChange={changeHandler} type="text" name="name" id="name" placeholder="Name" />
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea onChange={changeHandler} rows="4" cols="45" type="text" name="description" id="description" placeholder="Description"></textarea>
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input onChange={changeHandler} type="text" name="imageURL" id="image" placeholder="Image" />
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="category">Category</label>
                        <span className="input">
                            <select onChange={changeHandler} type="text" name="category" value={state.value}>
                                <option>Cat</option>
                                <option>Dog</option>
                                <option>Parrot</option>
                                <option>Reptile</option>
                                <option>Other</option>
                            </select>
                            <span className="actions"></span>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Add Pet" />
                </fieldset>
            </form>
        </section>
    );
}