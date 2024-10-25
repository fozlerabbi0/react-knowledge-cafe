
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'



function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [redingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = blog => {
  const newBookmarks = [...bookmarks, blog];
  setBookmarks (newBookmarks)    
  }

  const handleMarkAsRead = (id, time) => {
  setReadingTime(redingTime + time)
  // remove the read blog form bookmark
// console. log('remove bookmark' , id)

  const reaminingBookmarks = bookmarks.filter(bookmark => bookmark.id !==id); setBookmarks(reaminingBookmarks);

  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} 
        handleMarkAsRead={handleMarkAsRead}>
        </Blogs>
        <Bookmarks bookmarks={bookmarks} redingTime={redingTime}></Bookmarks>
      </div>

    </>
  )
}

export default App
