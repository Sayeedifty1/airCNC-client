import Header from "../../Components/Rooms/Header";
import RoomInfo from "../../Components/Rooms/RoomInfo";
import RoomReservation from "../../Components/Rooms/RoomReservation";
import Container from "../../Components/Shared/Container";

const RoomDetails = () => {
    return (
        <Container>
            <div className="max-w-screen-lg mx-auto">
                <div className="flex flex-col gap-6">
                    <Header></Header>
                    <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
                    <RoomInfo></RoomInfo>
                    <div className="order-first md:order-last mb-10 md:col-span-3"><RoomReservation></RoomReservation></div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default RoomDetails;