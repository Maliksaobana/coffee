import {userComments} from "../constant.ts";

const Reviews = ({id}:{id:string}) => {
    return (
        <div id={id} className='padding_main bg-[rgba(0,0,0,.5)] flex flex-col items-center justify-center'>
            <div className="title_component text-white">
                <h1>Testimonial</h1>
                <p className='text-white'>what our Customers say about our Services</p>
            </div>
            <div className="testimonial">
                {userComments.map(users => (
                    <div key={users.id} className="testimonial_content">
                        <img src={users.profileImg} alt={users.name} width={150} height={150} />
                        <h1>{users.name}</h1>
                        <h4>{users.tag}</h4>
                        <div className="testimonial_user_info">
                            <h6>{users.comment}</h6>
                        </div>
                        <div className="testimonial_user_review">
                            <h3>{users.review}⭐️</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;