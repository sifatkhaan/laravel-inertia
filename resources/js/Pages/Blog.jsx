import { Link } from '@inertiajs/react'
import { wrap } from 'lodash';
import React from 'react'

export default function Blog({ blogs }) {
  
  const truncateText = (text, limit)=>{
    // if (text.length <= limit || expanded) return text;
    const words = text.split(" ");
    let truncatedText = "";

    for (const word of words){
      if(truncatedText.length + word.length + 1 > limit) break;
      truncatedText += word + " ";
    }
 
    return truncatedText.trim() + "...";
  }

  return (
    <div className='w-full flex justify-center my-5 md:my-10 px-2'>
      <div className="w-full md:w-[80%] flex flex-wrap mb-2 md:mb-5 gap-5">
        {blogs.data.map((blog, index) => (
          <div
            key={blog.id}
            className={`w-full flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} flex-wrap mb-0 md:mb-6 gap-5 justify-between`}
          >
            <div className="flex flex-col justify-start w-full md:w-[50%]">
              <h1 className="text-3xl font-crismo font-bold">{blog.title}</h1>
              <span>{new Date(blog.created_at).toLocaleDateString()}</span>
              <span>{new Date(blog.created_at).toLocaleTimeString()}</span>
              <div className="text-wrap">
                {truncateText(blog.body, 600)} {"  "}
                {blog.body.length > 600 && (
                <Link
                  href={`/blogs/${blog.id}`}
                  className="text-blue-500"
                >
                  See More
                </Link>
                )}
              </div>
            </div>
              <div className="w-full md:w-[45%] flex flex-col pt-0 md:pt-10">
              <Link href={`/blogs/${blog.id}`}>
                <img
                  src={`/storage/${blog.image}`}
                  alt=""
                  className="w-full h-auto object-cover rounded-md"
                />
                </Link>
              </div>
          </div>
        ))}
        {/* pagination */}
        <div>
          {blogs.links.map(link => (
            link.url ? (
              <Link
                key={link.label}
                href={link.url}
                dangerouslySetInnerHTML={{ __html: link.label }}
                className={`p-1 mx-2 px-2 hover:bg-gray-100 rounded-md ${link.active ? 'text-blue-400 font-bold bg-gray-100 rounded-md' : ''}`}
              />
            ) : (<span

              key={link.label}
              dangerouslySetInnerHTML={{ __html: link.label }}
              className='p-1 mx-2 text-gray-400'>
            </span>)

          ))}
        </div>
      </div>
    </div>
  )
}
