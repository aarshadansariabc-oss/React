import React, { useState } from "react";
import { X } from "lucide-react";

const App = () => {
  const [title, settitle] = useState("");
  const [detailed, setdetailed] = useState("");
  const [task, settask] = useState([]);

  const SubmitHandler = (e) => {
    e.preventDefault();
    const newtask = [...task];
    newtask.push({ title, detailed });
    settask(newtask);

    settitle("");
    setdetailed("");
  };

  const DeleteNode = (idx) => {
    // Create a copy of the task array
    const copyTask = [...task]; // or task.slice()

    // Remove 1 element at the given index
    copyTask.splice(idx, 1);

    // Update the state
    settask(copyTask);
  };


  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col lg:flex-row">
      {/* LEFT : FORM */}
      <form
        onSubmit={SubmitHandler}
        className="lg:w-[40%] p-10 flex flex-col gap-6 border-b lg:border-b-0 lg:border-r border-white/10">
        <h1 className="text-4xl font-semibold">Add Notes</h1>

        <input
          value={title}
          className="px-5 py-3 rounded-lg bg-[#1a1a1a] border border-white/10 focus:outline-none focus:border-white/30"
          type="text"
          placeholder="Title"
          onChange={(e) => settitle(e.target.value)}
        />

        <textarea
          value={detailed}
          className="px-5 py-3 h-40 rounded-lg bg-[#1a1a1a] border border-white/10 resize-none focus:outline-none focus:border-white/30"
          placeholder="Write note details..."
          onChange={(e) => setdetailed(e.target.value)}
        />

        <button className="mt-2 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition">
          Add Note
        </button>
      </form>

      {/* RIGHT : NOTES */}
      <div className="lg:w-[60%] p-10">
        <h1 className="text-4xl font-semibold mb-8">Recent Notes</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {task.map((elem, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl bg-gradient-to-br from-[#1b1b1b] to-[#111] p-5 border border-white/10 hover:border-white/30 transition">
              {/* close icon UI only */}

              <div onClick={ () =>{
                DeleteNode(idx)
              }} className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full bg-white/10 text-white opacity-0 group-hover:opacity-100 transition">
                <X size={14} />
              </div>

              <h3 className="text-lg font-semibold mb-3 line-clamp-2">
                {elem.title}
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed line-clamp-5">
                {elem.detailed}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
