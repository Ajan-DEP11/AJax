import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {getAllPosts, Post as TPost} from "./services/Post-service.tsx";
import {Post} from "./assets/post/Post.tsx";

function App() {
    const [posts,setPosts] = useState<TPost[]>([])

    useEffect(()=>{
        console.log("Working")
        getAllPosts().then(p => setPosts(p)).catch(err => console.log(err));
    },[])



  return (
    <>
      <h1 className="text-center p-2 m-0 border-bottom">WORKING WITH AJAX</h1>
        {posts.map((post) =>{
            <Post key={post.id} {...post}/>
        })}

    </>
  )
}

export default App
