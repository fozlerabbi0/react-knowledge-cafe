import PropTypes from 'prop-types';
import { FaRegBookmark } from 'react-icons/fa';


const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {title, cover, author, author_img, posted_date, reading_time} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={'cover picture of the title'}/>
            <div className='flex justify-between'>
                <div className='flex my-6'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'> 
                        <h2 className='text-2xl'>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} Min Read </span>
                    <button 
                    onClick={() => handleAddToBookmark(blog)}
                     className='ml-2 text-pink-400 text-2xl'>
                        <FaRegBookmark> </FaRegBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <div>
                {/* <p>
                    {
                    
                        hashtags.map(hash => <span><a href="">#{hash}</a></span>)
                    
                    }
                </p> */}
                <button onClick={()=>handleMarkAsRead(reading_time)}
                className='text-purple-500 font-bold underline'>Mark As Red</button>
            </div>
        </div>
    );
};

Blog.propType = {
    blog: PropTypes.object.isRequired,
    handleToBookmark : PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;