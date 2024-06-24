import React from "react";
import Welcome from "./componets/Welcome";
import Todoo from "./componets/Todo";
// import Todolist from './componets/Todolist'

function app() {
  return (
    <div>
      <Welcome />
      <Todoo />
      {/* Comment */}
    </div>
  );
}

export default app;
