import { useState } from "react";
import { useDispatch } from "react-redux"
import { addMerch } from "../../../redux/merch";
import { useModal } from "../../../context/Modal"

function AddMerchModal() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [url, setUrl] = useState('');
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const { closeModal } = useModal();
    const dispatch = useDispatch();

    const handleSubmit = async e => {
        e.preventDefault();
        setErrors({})

        const formData = new FormData();

        formData.append("file", image)
        formData.append("name", name)
        formData.append("price", price)
        formData.append("url", url)

        // console.log("-----------formData: ", formData)
        setIsLoading(true)

        let validate = {};

        const merch = await dispatch(addMerch(formData))
            .catch(err => validate = { ...err })

        if (merch?.errors) {
            validate = { ...validate, ...merch.errors };
        }

        if (merch?.file?.length) {
            validate.file = merch.file[0]
        }


        if (Object.values(validate).length) {
            setErrors({ ...validate })
            setIsLoading(false)
        }
        else closeModal()

        setIsLoading(false)
    }

    return (
        <>
            <h2>Add Merch</h2>

            <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
            >

                {errors.server && <p>{errors.server}</p>}
                {errors.file && <p>{errors.file}</p>}
                {errors.errors && <p>{errors.errors}</p>}

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

                <p>Display Image</p>
                <input
                    type="file"
                    defaultValue={image}
                    accept=".pdf,.png,.jpg,.jpeg,.gif"
                    onChange={(e) => setImage(e.target.files[0])}
                />
                {errors.file && <p>{errors.file}</p>}

                <button
                    type="submit"
                    className="buttons"
                    disabled={isLoading}>Create Merch</button>
            </form>
        </>
    )
}

export default AddMerchModal;
