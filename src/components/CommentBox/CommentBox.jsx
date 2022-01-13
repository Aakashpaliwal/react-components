import React, { useEffect, useState } from "react";

const CommentBox = () => {
  const [parentComment, setParentComment] = useState("");
  const [childComment, setChildComment] = useState("");
  const [commentContainer, setCommentContainer] = useState([]);

  const commentHandler = () => {
    console.log(parentComment);
    let value = {
      id: Math.random(),
      comment: parentComment,
      childComment: [],
      showChild: false,
    };
    console.log(value);
    setCommentContainer([...commentContainer, value]);
  };

  const showChildHandler = (id) => {
    let commentArr = [...commentContainer];
    let index = commentArr.findIndex((item) => item.id === id);
    console.log(index);
    commentArr[index].showChild = true;
    setCommentContainer(commentArr);
    console.log(commentContainer);
  };

  const childCommentHandler = (id) => {
    console.log(id);
    let commentArr = [...commentContainer];
    let index = commentArr.findIndex((item) => item.id === id);
    console.log(index);
    commentArr[index].showChild = false;
    commentArr[index].childComment = [
      ...commentArr[index].childComment,
      childComment,
    ];
    setCommentContainer(commentArr);
    console.log(commentArr);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mt-4">
            <textarea
              className="form-control"
              rows="5"
              onChange={(e) => setParentComment(e.target.value)}
              value={parentComment}
            ></textarea>
            <button
              className="btn btn-primary mt-3"
              onClick={() => {
                commentHandler();
                setParentComment("");
              }}
              disabled={parentComment.length === 0 ? true : false}
            >
              Submit
            </button>
            <hr />
            <ol>
              {commentContainer.map((comment, index) => {
                console.log("commentreturn", comment, index);
                return (
                  <div key={index}>
                    <li>{comment.comment}</li>{" "}
                    <button
                      className="btn btn-info"
                      style={{
                        float: "right",
                        position: "relative",
                        bottom: 30,
                      }}
                      onClick={() => showChildHandler(comment.id)}
                    >
                      reply
                    </button>
                    {comment && comment.showChild == true && (
                      <>
                        <textarea
                          className="form-control"
                          rows="5"
                          onChange={(e) => setChildComment(e.target.value)}
                        ></textarea>
                        <button
                          className="btn btn-info mt-2 mb-2"
                          style={{
                            float: "right",
                          }}
                          onClick={(id) => childCommentHandler(comment.id)}
                        >
                          Submit
                        </button>
                      </>
                    )}
                    <div className="mt-4">
                      <ul>
                        {comment.childComment.map((childComment, index) => {
                          return <li key={index}>{childComment}</li>;
                        })}
                      </ul>
                    </div>
                    {comment.childComment &&
                      comment.childComment.length > 0 && <hr />}
                  </div>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
