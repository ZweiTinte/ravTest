import * as React from "react";
import { Post } from "../models/post";
import Table from "../components/organisms/Table";
import Pagination from "../components/organisms/Pagination";

const Exam1Page: React.FC = () => {
  const [posts, setPosts] = React.useState<Post[] | null>(null);
  const [comments, setComments] = React.useState<Comment[] | null>(null);
  const [postSize, setPostSize] = React.useState<number>(0);
  const [page, setPage] = React.useState<number>(1);
  const [openPost, setOpenPost] = React.useState<number>(0);
  const pageSize = 20;
  const apiEndpointPosts = "https://jsonplaceholder.typicode.com/posts";

  React.useEffect(() => {
    fetch(`${apiEndpointPosts}`)
      .then((response) => response.json())
      .then((json) => {
        setPosts(
          json.slice(pageSize * (page - 1), pageSize * (page - 1) + pageSize)
        );
        setPostSize(json.length / pageSize);
      })
      .catch((e) => console.log(e));
  }, [page]);

  function changePage(newPage: number) {
    setPage(newPage);
  }

  function openComments(postId: number) {
    fetch(`${apiEndpointPosts}/${postId}/comments`)
      .then((response) => response.json())
      .then((json) => {
        setComments(json);
        setOpenPost(postId);
      })
      .catch((e) => console.log(e));
  }

  return (
    <div className="tablePage">
      {posts && (
        <>
          <h1>Posts</h1>
          <div className="tableArea">
            <Table
              entity={posts}
              tableRowAction={(entry: Post) => {
                if (openPost === entry.id) {
                  setOpenPost(0);
                  setComments(null);
                } else {
                  openComments(entry.id);
                }
              }}
              openEntry={openPost}
            />
            <Pagination page={page} pages={postSize} changePage={changePage} />
          </div>
        </>
      )}
      {comments && (
        <>
          <h1>Comments</h1>
          <div className="tableArea">
            <Table entity={comments} />
          </div>
        </>
      )}
    </div>
  );
};

export default Exam1Page;
