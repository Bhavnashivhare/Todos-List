import React, {useState} from "react";
const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
  
    const submit = (e) => {
      e.preventDefault();
      if (!title || !desc) {
        alert("Title or Description cannot be blank");
        return;
      }
      addTodo(title, desc);
      setTitle('');
      setDesc('');
    };
  
    return (
            <div className="container my-5">
              <h3 className="title is-4">Add Todo</h3>
        
              <form onSubmit={submit}>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              type="text"
              placeholder="Todo Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input
              type="text"
              placeholder="Todo Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button type="submit" className="button is-primary">
              Add Todo
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;