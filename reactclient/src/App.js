import React, { useState } from "react";
import Constants from "./utilities/Constants";
import PostCreateForm from "./components/PostCreateForm";
import PostUpdateForm from "./components/PostUpdateForm";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [showingCreateNewPostForm, setShowingCreateNewPostForm] = useState(false);
  const [postCurrentlyBeingUpdated, setPostCurrentlyBeingUpdated] = useState(null);
  function getPosts() {
    const url = Constants.API_URL_GET_ALL_POSTS;

    fetch(url, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(postsFromServer => {
        setPosts(postsFromServer);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  }

  function deletePost(postId) {
    const url = `${Constants.API_URL_DELETE_POST_BY_ID}/${postId}`;

    fetch(url, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(responseFromServer => {
        console.log(responseFromServer);
        onPostDeleted(postId);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  }

  return(
    <div className="container">
      <div className="row min vh-100">
        <div className="col d-flex flex-column justify-content-center align-items-center">
          {(showingCreateNewPostForm === false && postCurrentlyBeingUpdated === null) && (
            <div>
            <h1>.NET React Projekti Personal - Lab 1</h1>

            <div className="mt-5">
              <button onClick={getPosts} className="btn btn-dark btn-lg w-100">Shfaq postet</button>
              <button onClick={()=>setShowingCreateNewPostForm(true)} className="btn btn-secondary btn-lg w-100 mt-4">Krijo nje post</button>
            </div>
          </div>
          )}

          {(posts.length > 0 && showingCreateNewPostForm === false && postCurrentlyBeingUpdated === null) && renderPostsTable()}

          {showingCreateNewPostForm && <PostCreateForm onPostCreated={onPostCreated} />}

          {postCurrentlyBeingUpdated !== null && <PostUpdateForm post={postCurrentlyBeingUpdated} onPostUpdated={onPostUpdated} />}
        </div>
      </div>
    </div>
  );

  function renderPostsTable() {
    return (
      <div className="table-responsive mt-5">
        <table className="table table-bordered border-dark">
          <thead>
            <tr>
              <th scope="col">PostId (PK)</th>
              <th scope="col">Titulli</th>
              <th scope="col">Content</th>
              <th scope="col">Operacionet CRUD</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.postId}>
              <th scope="row">{post.postId}</th>
              <td>{post.title}</td>
              <td>{post.content}</td>
              <td>
                <button onClick={() => setPostCurrentlyBeingUpdated(post)} className="btn btn-dark btn-lg mx-3 my-3">Perditeso</button>
                <button onClick={() => { if(window.confirm(`A deshiron me e fshi postin "${post.title}"?`)) deletePost(post.postId) }} className="btn btn-secondary btn-lg">Fshij</button>
              </td>
          </tr>
            ))}
          </tbody>
        </table>

        <button onClick={()=>setPosts([])} className="btn btn-dark btn-lg w-100 mb-5">Largo postet</button>
      </div>
    );
  }

  function onPostCreated(createdPost) {
    setShowingCreateNewPostForm(false);

    if (createdPost === null) {
      return;
    }

    alert(`Posti u krijua me sukses. Pasi te klikoni OK, Posti juaj "${createdPost.title}" do te shfaqet ne tabelen poshte`);

    getPosts();
  }

  function onPostUpdated(updatedPost) {
    setPostCurrentlyBeingUpdated(null);

    if (updatedPost === null) {
      return;
    }

    let postsCopy = [...posts];

    const index = postsCopy.findIndex((postsCopyPost, currentIndex) => {
      if (postsCopyPost.postId === updatedPost.postId) {
        return true;
      }
    });

    if (index !== -1) {
      postsCopy[index] = updatedPost;
    }

    setPosts(postsCopy);

    alert(`Posti u perditesua me sukses. Pasi te klikoni OK, Posti juaj "${updatedPost.title}" do te shfaqet ne tabelen poshte`);
  }

  function onPostDeleted(deletedPostPostId) {
    let postsCopy = [...posts];

    const index = postsCopy.findIndex((postsCopyPost, currentIndex) => {
      if (postsCopyPost.postId === deletedPostPostId) {
        return true;
      }
    });

    if (index !== -1) {
      postsCopy.splice(index, 1);
    }

    setPosts(postsCopy);

    alert('Posti u fshi me sukses');
  }
}