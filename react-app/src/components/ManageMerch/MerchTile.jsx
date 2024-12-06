import { MdOutlineEdit } from "react-icons/md";
import { IoTrashBinOutline } from "react-icons/io5";
import { LiaPlusCircleSolid } from "react-icons/lia";
import OpenModalButton from "../OpenModalButton";

function MerchTile({ merch }) {
    return (
        <>
            <div className="tour-tile">
                <div className="merch-edit">
                    <p>{ `${merch.name}` }</p>
                    <p>{ `$${merch.price}` }</p>
                </div>
                <div className="tour-buttons">
                    {/* <OpenModalButton
                        modalComponent={<EditTourModal tour={tour}/>}
                        buttonText={<MdOutlineEdit />}
                        newClass='edit-buttons'
                    /> */}
                    <MdOutlineEdit className="edit-buttons"/>
                    {/* <OpenModalButton
                        modalComponent={<DeleteTourModal tourId={tour.id}/>}
                        buttonText={<IoTrashBinOutline />}
                        newClass='delete-buttons'
                    /> */}
                    <IoTrashBinOutline className="delete-buttons" />
                </div>


            </div>
        </>
    )
}

export default MerchTile;
