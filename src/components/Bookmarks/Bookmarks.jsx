
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="w-1/3">
            <div className='bg-slate-200 rounded-lg mb-5 mt-5'>
                <p className='text-[#6047EC] font-bold p-5 '>Spent Time On read: {readingTime} min</p>
            </div>
            <div className='bg-slate-200 rounded-lg mt-6'>
                <h1 className="text-2xl font-bold pt-8 pl-3">Bookmarks Blog: {bookmarks.length}</h1>
                <div>
                    {
                        bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                    }
                </div>
            </div>

        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default Bookmarks;