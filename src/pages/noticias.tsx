import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Post {
  title: any;
  content: { text: string | null; image: string; body: any };
  published: Date;
}

export default function Noticias() {
  const [posts, setPosts] = useState<Post[]>([]);

  function extractDataPosts(data: any): Post[] {
    const dataItems = data.items;
    const array: Post[] = dataItems.map((item: any) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(item.content, "text/html");
      const imgElement = doc.body.querySelector("img");
      const image = imgElement ? imgElement.src : "";
      return {
        title: item.title,
        content: {
          body: item.content,
          text: item.content.replace(/<img[^>]*>/g, ""),
          image: image,
        },
        published: item.published,
      };
    });
    return array;
  }

  useEffect(() => {
    async function getPosts() {
      const response = await fetch(
        "https://www.googleapis.com/blogger/v3/blogs/2118883880947676297/posts?key=AIzaSyB-P4-DuifvHMzJFYeP7eB3KzwWYEX90YI"
      );
      const data = await response.json();
      const posts: Post[] = extractDataPosts(data);
      setPosts(posts);
    }

    getPosts();
  }, []);

  return (
    <>
      <Head>
        <title>Instituto IPHEA - Notícias</title>
      </Head>
      <ScrollToTop />
      <main className="h-screen flex flex-col justify-between  max-md:gap-10 gap-20">
        <Header currentPage="noticias" />

        <div className="flex flex-col max-w-3xl m-auto justify-center items-center gap-10 px-9">
          {posts &&
            posts.map((post, i) => (
              <div
                className="flex flex-col justify-start items-start max-md:items-center"
                key={i}
              >
                <h2 className="text-4xl font-bold tracking-tighter mb-2 max-md:text-center">
                  {post.title}
                </h2>
                <span className="text-sm text-gray-400 mb-4 max-md:text-center">
                  {new Date(post.published).toLocaleDateString("pt-BR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                  , por IPHEA
                </span>
                <div className="flex flex-col justify-center items-center">
                  <img
                    className="w-full h-auto rounded-md"
                    src={post.content.image}
                    alt=""
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.content.text!,
                    }}
                    className="text-gray-500 leading-[1.5]"
                  />
                </div>
              </div>
            ))}
        </div>

        <footer className="flex justify-center bg-slate-900 text-white p-5">
          <div className="text-white m-auto text-sm p-2">
            <p>© 2023 IPHEA | Todos os Direitos Reservados</p>
          </div>
        </footer>
      </main>
    </>
  );
}
