import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, redingTime }) => {
    return (
        <div className="md:w-1/3 bg-gray-200 ml-4 p-4 my-4">
            <div>
                <h3 className="text-3xl">Reading Time: {redingTime}</h3>
            </div>
            <h2 className="text-3xl text-center">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark =>
                    <Bookmark key={bookmark.id}
                        bookmark={bookmark}
                    ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    redingTime: PropTypes.number
}

export default Bookmarks;