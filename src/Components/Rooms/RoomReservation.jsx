import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Button from "../Button/Button";
import BookingModal from "../Modal/BookingModal";
import DatePicker from "./Calender";
import { formatDistance } from "date-fns";
import { addBooking, updateRoomStatus } from "../../API/Bookings";
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom";




const RoomReservation = ({ roomData }) => {
    const { user, role } = useContext(AuthContext);
    const navigate = useNavigate();
    // price calculation
    const totalPrice = parseFloat(formatDistance(new Date(roomData.to), new Date(roomData.from)).split('')[0] * roomData.price);
    const [value, setValue] = useState({
        startDate: new Date(roomData?.from),
        endDate: new Date(roomData?.to),
        key: 'selection',
    });
    // booking state
    const [bookingInfo, setBookingInfo] = useState({
        host: roomData.host.email,
        guest: { name: user.displayName, email: user.email, image: user.photoURL },
        location: roomData.location,
        price: totalPrice,
        to: value.endDate,
        from: value.startDate,
        title: roomData.title,
        roomId: roomData._id,
        image: roomData.image,

    });

    // calender selection
    const handleSelect = (ranges) => {
        setValue({ ...value });
    }
    const modalHandler = () => {
        addBooking(bookingInfo).then(data => {
            console.log(data);
            updateRoomStatus(roomData._id, true).then(data => {
                console.log(data);
                toast.success('Room Booked Successfully')
                navigate('/dashboard/my-bookings');
                closeModal();
            }).catch(err => {
                console.log(err)
                closeModal();
            })
        })
            .catch(err => {
                console.log(err)
                closeModal();
            })
            .catch(err => console.log(err))

    }
    const closeModal = () => {
        setIsOpen(false);
    }
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden'>
            <div className='flex flex-row items-center gap-1 p-4'>
                <div className='text-2xl font-semibold'>$ {roomData.price}</div>
                <div className='font-light text-neutral-600'>night</div>
            </div>
            <hr />
            <div className="flex justify-center"><DatePicker handleSelect={handleSelect} value={value} /></div>

            <hr />
            <div className='p-4'>
                <Button onClick={() => setIsOpen(true)}
                    disabled={roomData.host.email === user.email || roomData.booked} label='Reserve' />
            </div>
            <hr />
            <div className='p-4 flex flex-row items-center justify-between font-semibold text-lg'>
                <div>Total</div>
                <div>$ {totalPrice}</div>
            </div>
            <BookingModal
                isOpen={isOpen}
                bookingInfo={bookingInfo}
                modalHandler={modalHandler}
                closeModal={closeModal}
            ></BookingModal>
        </div>
    );
};

export default RoomReservation;