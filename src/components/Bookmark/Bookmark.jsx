import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='p-4 rounded-sm'>
            <h1 className='text-xl font-semibold bg-white p-5 rounded-lg'>{title}</h1>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}

export default Bookmark;