import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Todo() {
  const [activity, setactivity] = useState("");
  const [listdata, setlistdata] = useState([]);
  function addactivity() {
    setlistdata((listdata) => {
      const update = [...listdata, activity];
      console.log(update);
      setactivity("");
      return update;
    });
  }
  function remove(i) {
    const updatelist = listdata.filter((elem, id) => {
      return i!= id;
    });
    setlistdata(updatelist);
  }

  function edit(i) {
    const edit = listdata.filter((ele)=>Text === listdata[i]);
    setlistdata(edit[i])
  }
  return (
    <div className="container  bg-dark rounded ">
      <div className="header ">
        <h1 className="text-light ">Todo List</h1>
      </div>

      <div className=" d-flex justify-content-center w-100 mt-3">
        <input
          type="Text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Enetr any text"
          className="w-75 p-2 rounded"
          value={activity}
          onChange={(e) => setactivity(e.target.value)}
        />
        <button
          type="btn"
          className="btn btn-primary mx-2 p-2"
          onClick={addactivity}
        >
          Add Data
        </button>
      </div>

      <div className="w-100  d-flex justify-content-center text-center">
        <p className="bg-primary  fs-3 mt-4 p-2 border text-light w-50 rounded mx">
          {" "}
          Here is your data
        </p>
      </div>

      <br />

      {listdata != [] &&
        listdata.map((data, i) => {
          return (
            <>
              <p key={data} className="d-flex">
                <div className="bg-light text-dark fs-3 mt-3 px-4 border w-25 rounded ">
                  {data}
                </div>

                <button
                  type="btn"
                  className="btn btn-danger p-2 w-15 mx-2 h-25 mt-3"
                  onClick={() => remove(i)}
                >
                  remove
                </button>
                
                <button
                  type="btn"
                  className="btn btn-success p-2 w-15 mx-2 h-25 mt-3"
                  onClick={() => edit(i)}
                >
                  Edit
                </button>
              </p>
              <br />
            </>
          );
        })}
    </div>
  );
}

export default Todo;
