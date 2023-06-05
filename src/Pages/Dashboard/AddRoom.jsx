import React, { useContext, useState } from 'react';
import { uploadImage } from '../../API/imageUpload';
import { addRoom } from '../../API/rooms';
import AddRoomFrom from '../../Components/Froms/AddRoomFroms';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const AddRoom = () => {
    const { user } = useContext(AuthContext);
    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    });
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [uploadButtonText, setUploadButtonText] = useState('Upload Image')
    // handle submit
    const handleSubmit = (event) => {
        event.preventDefault();
        
        setLoading(true);
        const location = event.target.location.value;
        const title = event.target.title.value;
        const price = event.target.price.value;
        const guests = event.target.guests.value;
        const bedrooms = event.target.bedrooms.value;
        const bathrooms = event.target.bathrooms.value;
        const description = event.target.description.value;
        const category = event.target.category.value;
        const from = dates.startDate;
        const to = dates.endDate;
        const image = event.target.image.files[0];

        setUploadButtonText("Uploading...")

        // image upload
        uploadImage(image).then(data => {
            const roomData = {
                image: data.data.display_url,
                location,
                title,
                from,
                to,
                host: {
                    name: user?.displayName,
                    image: user?.photoURL,
                    email: user?.email
                },
                price,
                guests,
                bedrooms,
                bathrooms,
                description,
                category,
            }

            // post room data to the server
            addRoom(roomData)
            .then(data=>{
                setUploadButtonText('Uploaded!')
                setLoading(false)
                toast.success('Room added successfully')
                navigate('/dashboard/my-listings')
                console.log(data)})
            .catch(err=>console.log(err))
            console.log(roomData)
            setLoading(false)
        }).catch(err => {
            console.log(err.message)
            setLoading(false)
        })

    }

    const handleImageChange = (image) => {
        setUploadButtonText(image.name)
    }

    const handleDates = ranges => {

        setDates(ranges.selection)
    }
    return (
        <div>
            <AddRoomFrom handleSubmit={handleSubmit}
                loading={loading}
                handleImageChange={handleImageChange}
                uploadButtonText={uploadButtonText}
                dates={dates}
                handleDates={handleDates}
            ></AddRoomFrom>
        </div>
    );
};

export default AddRoom; 