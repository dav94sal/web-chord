import { useState } from "react";
import { useDispatch } from "react-redux"
import { editMerch } from "../../../redux/merch";
import { useModal } from "../../../context/Modal"

function EditMerchModal({ merch }) {
    const [name, setName] = useState(merch.name);
    const [price, setPrice] = useState(merch.price);
    const [url, setUrl] = useState(merch.url);
    const [errors, setErrors] = useState({})
    const { closeModal } = useModal();
    const dispatch = useDispatch();

    const handleSubmit = async e => {
        e.preventDefault();

        const newMerch = {
            id: merch.id,
            name,
            price,
            url
        }

        const response = await dispatch(editMerch(newMerch))
            .catch(err => setErrors({ ...err }))

        if (response.errors) setErrors(response.errors)
        else closeModal()
    }

    return (
        <>
            <h2>Edit Merch</h2>
            <form onSubmit={handleSubmit}>
                {errors.server && <p>{errors.server}</p>}
                <input
                    type="text"
                    placeholder="Name your Merch..."
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                {errors.name && <p>{errors.name}</p>}
                <input
                    type="integer"
                    placeholder="Price"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    required
                />
                {errors.price && <p>{errors.price}</p>}
                <input
                    type="text"
                    placeholder="Url"
                    value={url}
                    onChange={e => setUrl(e.target.value)}
                    required
                />
                {errors.url && <p>{errors.url}</p>}
                <button type="submit" className="buttons">Save</button>
                <button
                    type="click"
                    className="buttons"
                    onClick={() => closeModal()}
                >Cancel</button>
            </form>
        </>
    )
}

export default EditMerchModal;
