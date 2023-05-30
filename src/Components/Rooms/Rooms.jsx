
import { useEffect, useState } from "react";
import Container from "../Shared/Container";
import Loader from "../Shared/Loader";
import Card from "./Card";


const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch('./rooms.json')
            .then(res => res.json())
            .then(data => {setRooms(data)
            setLoading(false);
    })
            .catch(err => console.log(err.message));  
    }, [])

    if (loading) {
        return <Loader></Loader>
      }

    return (
        <Container>
            <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                {rooms.map((room , i) => <Card
                key={i}
                room={room}></Card>)}
            </div>
        </Container>
    );
};

export default Rooms;