import { Rating } from '@smastrom/react-rating';
import PropTypes from 'prop-types';

const ClientCard = ({ item }) => {
    const { name, image, designation, description, rating } = item;
    console.log(item)
    return (
        // < !--component -- >
        <div className="min-h-screen flex flex-col justify-center sm:py-12 bg-[#0E0E0E] text-white md:py-10 py-5">

            <div className="py-3 sm:max-w-xl sm:mx-auto">
                <div className="shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8 bg-[#E26E23]">
                    <div className="md:h-48 h-24 overflow-visible w-1/2 bg-yellow-400 rounded-badge p-2">
                        <img className="md:rounded-3xl rounded-sm shadow-lg" src={image} alt="" />
                    </div>
                    <div className="flex flex-col w-1/2 space-y-4">
                        <div className="flex justify-between items-start">
                            <h2 className="text-3xl font-bold">{name}</h2>
                            <div className="bg-yellow-400 font-bold rounded-xl p-2">{rating}</div>
                        </div>
                        <div>
                            <div className="text-xl text-white">{designation}</div>
                        </div>
                        <p className=" text-white max-h-40 overflow-y-hidden">{description}</p>
                        <div className="flex text-md md:text-2xl font-bold">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={rating}
                                readOnly></Rating>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};
ClientCard.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        designation: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired
    }).isRequired
};
export default ClientCard;