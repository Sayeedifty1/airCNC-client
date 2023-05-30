import Heading from "../Heading/Heading";


const Header = () => {
    return (
        <>
          <Heading
                title="Need to set dynamic title here"
                subtitle="location"
                center={false} 
                ></Heading>  

                <div className="w-full md:h-[60vh] overflow-hidden rounded-xl">
                    {/* TODO:dynamic img */}
                    <img className="object-cover w-full" src="https://i.ibb.co/nBTVJkn/racer.png" alt="header img" />
                </div>
        </>
    );
};

export default Header;