import { useState } from "react";

function EditTourModal({ tour }) {
    const [name, setName] = useState(tour.name)
    
    return (
        <>
            <h2>Edit Name</h2>
            <form>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </form>
        </>
    )
}

export default EditTourModal;
