import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  
  const handleAddToBookmarks = (blog, id) => {
    const bookmarkAdd = bookmarks.some(bookmark => bookmark.id === id);
    // console.log(blog)
    // console.log('bookmarks')
    if(!bookmarkAdd){
      const newBookmarks = [...bookmarks, blog];
      setBookmarks(newBookmarks);
    }else{
      alert('You can not add same bookmark Again !!')
    }
  }

  const handleMarkAsRead = (time, id) => {
    
      const newBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
      setReadingTime(readingTime + time);
      setBookmarks(newBookmarks); 
    
  }
  
  
  

  return (
    <>
      <Header></Header> 
      <main className='md:flex mx-auto max-w-6xl gap-6'>
        <Blogs handleMarkAsRead = {handleMarkAsRead} handleAddToBookmarks={handleAddToBookmarks}></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks= {bookmarks}></Bookmarks>
      </main>
    </>
  )
}

export default App
