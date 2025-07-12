import { useEffect, useState } from "react";
import { createBlog, getBlogs, uploadFile, viewFile } from "./config/app.service";
import { ID } from "appwrite";
import { APPWRITE_STORAGE } from "./constants";

export default function Blogs() {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    getBlogs().then((res: any) => setBlogs(res.documents))
  }, [])
  const handleEvent = (e: any) => {
    e.preventDefault()

    const formData = new FormData(e.target);
    console.log(formData.get('file'))
    const file_id = ID.unique();
    uploadFile(formData.get('file'), file_id).then(res => {
      if (res.$id) {

        const data: any = {
          title: formData.get('title'),
          content: formData.get('content'),
          file_id: file_id,
          bucket_id: APPWRITE_STORAGE
        };
        createBlog(data).then(res => {
          if (res.$id) {
            getBlogs().then((res: any) => setBlogs(res.documents))

          }
        })
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
        <div>
          <label>Thumbnail:</label>
          <input type="file" placeholder="Enter Content" name="file" accept="image/*" required />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h1>Blogs</h1>
        {
          blogs.map((blog: any) => (<div key={blog.$id}>
            <img src={viewFile(blog.bucket_id, blog.file_id)} alt=""  height={200}/>
            <h1>{blog.title} | {blog.$createdAt}</h1>
            <p>{blog.content}</p>
            <hr></hr>
          </div>))
        }
      </div>
    </div>
  )
}