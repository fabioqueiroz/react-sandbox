import { FunctionComponent, ReactElement, useEffect } from "react";
import { CommentInterface } from "./comment.model";
import { useState, ChangeEvent } from "react";
import { services } from "../../services/services";

export const Comment: FunctionComponent<CommentInterface> =
  (): ReactElement => {
    const [textInput, setTextInput] = useState<string>("");
    const [sentiment, setSentiment] = useState<string>("");

    const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
      setTextInput(e.target.value);
    };

    const addNewComment = () => {
      services.addComment(textInput).then((result) => {
        let algorithmResult = JSON.parse(result.data);
        setSentiment(algorithmResult.prediction);
        setTextInput("");
      });
    };

    //   useEffect(() => {
    //     console.log(sentiment);
    //   });

    return (
      <>
        <div>Comment section</div>
        <input
          id="new-comment"
          type="text"
          className="form-control"
          placeholder="Insert your comment"
          value={textInput}
          onChange={handleTextChange}
        ></input>
        <button
          id="send-btn"
          className="btn btn-dark btn-lg"
          type="button"
          onClick={addNewComment}
        >
          Send
        </button>
        {(sentiment !== "" || sentiment === undefined) && (
          <div>
            {sentiment === "Negative" ? <p>&#128548;</p> : <p>&#128512;</p>}
          </div>
        )}
      </>
    );
  };
