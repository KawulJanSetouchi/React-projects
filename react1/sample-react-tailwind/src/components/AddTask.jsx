import { useState } from "react";
const AddTask = ({taskList, setTaskList}) => {
    const [addModel , setAddModel] =useState(false);
    const [projectName, setProjectName] =useState("");
    const [taskDescription , setTaskDescription] =useState("");
    const [errorMessage, setErrorMessage] =useState("");

    const handelInput =e =>{
        const {name, value} =e.target;

        if (name==="projectName") {
            setProjectName(value);
            setErrorMessage("")
        } 
        if (name==="projectName" && value===""){
            setErrorMessage("Enter project name to continue")
        }
        if (name==="taskDescription") setTaskDescription(value)

    }

    const handelAdd = e => {
        e.preventDefault();
        if (!projectName) {
            setErrorMessage("Enter project name to continue")
        } else {
             setTaskList(
            [...taskList, {projectName, taskDescription}]
        );
        setAddModel(false);
        setProjectName("");
        setTaskDescription("");
        }
       
    }
    return (

        <>
        <button 
        className="bg-blue-500 text-white uppercase text-sm font-semibold
        py-1 mx-1.5 pl-2 pr-3 rounded hover:opacity-70"
        type="button"
        onClick={() =>setAddModel(true)}
        >
          
            
            +New
        </button>
        {addModel ? (
            <>
            <div className="flex items-center justify-center overflow-x-hidden
             overflow-y-auto fixed inset-0 z-100">
                <div className="w-9/12 max-w-lg bg-white rounded-lg shadow-md relative flex flex-col " >
                   <div className=" flex flex-row justify-between p-5 border-b border-slate-200 rounded-t
                   ">
                  <h3 className="bg-white text-3xl font-semibold">Add New task</h3>
                  <button className="px-1 text-gray-400 float-right text-3xl 
                   leading-none font-semibold block" onClick={() => setAddModel(false)}>
                    X
                    </button>   
                </div>
                <form action="" className="px-6 pt-6 pb-4">
                    <div>
                      <label htmlFor="Name" className="track-wide uppercase text-gray-700 text-xs font-semibold mb-2 block">Project Name</label>
                    <input className="w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 
                    leading-tight focus:outline-none focus:bg-white" required id="project-Name"  type="text" placeholder="project name" name="projectName" value={projectName} onChange={handelInput} />
                     
                     <p className="text-red-500 text-center mt-2 mb-5">{errorMessage}</p>
                    </div>
                    <div>
                        <label 
                        className="track-wide uppercase text-gray-700 text-xs font-semibold mb-2 block">
                      
                        Task Discription</label>
                        <textarea className="w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-5
                        leading-tight focus:outline-none focus:bg-white" name="taskDescription" value={taskDescription} id="task-description" onChange={handelInput} rows={5} placeholder="Task Description"></textarea>
                    </div>
                    
                    
                </form > 
                <div className="flex justify-end p-6 border-t border-slate-200 rounded-b">
                    <button
                    className="bg-blue-500 text-white font-semibold uppercase text-sm px-6 py-3 rounded hover:opacity-70" 
                    onClick={handelAdd}
                    >Add Task</button>
                </div>
                </div>
                
              
            </div>
            

            </>
        ):null}
        </>
    )
}

export default AddTask;
