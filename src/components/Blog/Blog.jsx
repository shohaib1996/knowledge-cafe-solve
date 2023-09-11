import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog, handleAddToBookmarks, handleMarkAsRead}) => {
    const {title, cover, reading_time, author, author_img, posted_date, hashtags, id} = blog;
    // console.log(blog)
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>


                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmarks(blog, id)} className='ml-2 text-xl text-red-600'><FaBookmark /></button>

                </div>
            </div>
            <h2 className='text-3xl font-semibold mb-4 mt-5'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx)=> <span className='mr-8' key={idx}>#{hash}</span>)
                }
            </p>
            <button
            onClick={()=> handleMarkAsRead(reading_time, id)} 
            className='text-purple-800 underline font-bold mt-5'
            >Mark As Read</button>
            
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blog;