import Post from "../components/Post/Post";
import {useEffect, useState} from "react";

export default function IndexPage() {
  const [post,setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/post').then((response) => {
      response.json().then(posts => {
        setPosts(posts);
      });
    })
  }, []);
  return (
    <>
      {posts.length > 0 && posts.map(post => {
        <Post {...post} />
      })}
    </>
  );
}
