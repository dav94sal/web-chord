import { useState } from "react";
import { useDispatch } from "react-redux"
import { addMerch } from "../../redux/merch";
import { useModal } from "../../context/Modal"

function AddMerchModal() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [url, setUrl] = useState('');
    const [errors, setErrors] = useState({})
    const { closeModal } = useModal();
    const dispatch = useDispatch();

    const handleSubmit = async e => {
        e.preventDefault();

        const newMerch = {
            name,
            price,
            url
        }

        const response = await dispatch(addMerch(newMerch))
            .catch(err => setErrors({...err}))

        if (response.errors) setErrors(response.errors)
        else closeModal()
    }

    return (
        <>
            <h2>Add Merch</h2>
            <form onSubmit={handleSubmit}>
            { errors.server && <p>{errors.server}</p> }
                <input
                    type="text"
                    placeholder="Name your Merch..."
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                { errors.name && <p>{errors.name}</p> }
                <input
                    type="integer"
                    placeholder="Price"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    required
                />
                { errors.price && <p>{errors.price}</p> }
                <input
                    type="text"
                    placeholder="Url"
                    value={url}
                    onChange={e => setUrl(e.target.value)}
                    required
                />
                { errors.url && <p>{errors.url}</p> }
                <button type="submit" className="buttons">Add Merch</button>
            </form>
        </>
    )
}

export default AddMerchModal;
