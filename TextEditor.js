import React, { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import { Button } from "antd";

const TextEditor = () => {
  const ejInstance = useRef(null);
  const [comments, setComments] = useState([]);

  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs",
      onReady: () => {
        ejInstance.current = editor;
      },
      autofocus: true,
      onChange: async () => {
        let content = await editor.save();
        console.log(content);
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ejInstance.current
      .save()
      .then((outputData) => {
        console.log(outputData);
        setComments((prevComments) => [...prevComments, outputData]);
        ejInstance.current.clear();
      })
      .catch((error) => {
        console.error("Error saving editor content:", error);
      });
  };

  const handleCancel = (e) => {
    e.preventDefault();
    alert("Your comment is cancelled!");
  };

  useEffect(() => {
    initEditor();

    return () => {
      if (ejInstance.current) {
        ejInstance.current.destroy();
        ejInstance.current = null;
      }
    };
  }, []);

  return (
    <div id="editorjs">
      <h1 className="title">Text Editor</h1>
      <h2>Comments:</h2>
      <div className="buttonContainer">
        <Button onClick={handleSubmit} type="primary" className="commentButton">
          Comment
        </Button>
        <Button onClick={handleCancel} className="cancelButton">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default TextEditor;
