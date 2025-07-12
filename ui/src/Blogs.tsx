import { useEffect, useState } from "react";
import { createBlog, getBlogs } from "./config/app.service";

export default function Blogs() {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    getBlogs().then((res: any) => setBlogs(res.documents))
  }, [])
  const handleEvent = (e: any) => {
    e.preventDefault()

    const formData = new FormData(e.target);
    const data: any = {
      title: formData.get('title'),
      content: formData.get('content')
    };
    createBlog(data).then(res => {
      if (res.$id) {
        getBlogs().then((res: any) => setBlogs(res.documents))

      }
    })
  }
  return (
    <div className="page">
      <h1>Blogs</h1>
      <form onSubmit={(e) => handleEvent(e)}>
        <div>
          <label>Title:</label>
          <input type="title" placeholder="Enter title" name="title" required />
        </div>
        <div>
          <label>content:</label>
          <input type="textbox" placeholder="Enter Content" name="content" required />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h1>Blogs</h1>
        {
          blogs.map((blog: any) => (<div key={blog.$id}>
            <h1>{blog.title} | {blog.$createdAt}</h1>
            <p>{blog.content}</p>
            <hr></hr>
          </div>))
        }
      </div>
    </div>
  )
}