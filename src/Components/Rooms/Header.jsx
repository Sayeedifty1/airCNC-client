import Heading from "../Heading/Heading";


const Header = ({roomData}) => {
    console.log(roomData.image)
    return (
        <>
          <Heading
                title={roomData.title}
                subtitle={roomData.location}
                center={false} 
                ></Heading>  

                <div className="w-full md:h-[60vh] overflow-hidden rounded-xl">
                    {/* TODO:dynamic img */}
                    <img className={roomData.image} />
                </div>
        </>
    );
};

export default Header;