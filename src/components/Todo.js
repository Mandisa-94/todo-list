import {db} from '../firebase-config';

const Todo = ({todo}) => {

  const deleteHandler = () => {
    db.collection("todos").doc(todo.id).delete().then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
  }

  const completeHandler = () => editarCompleted(todo)
  

  const editarCompleted = tarea => {
    // Add a new document in collection "cities"
    db.collection("todos").doc(tarea.id).set({
      ...tarea, 
      completed: !tarea.completed
    })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
  }


  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed && "completed"}`}>{todo.text}</li> 
      <button onClick={completeHandler} className={`complete-btn ${todo.completed && "boton-rojo"}  `}>
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;