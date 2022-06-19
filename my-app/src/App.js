import {useState} from "react";


function App() {
  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState([])

  const handleSubmit = () => {
    setJobs(prevState => {
      return [...prevState, job]
    })
  }

  return (
    <div className="App">
      <input
        value={job}
        onChange={(e) => setJob(e.target.value)}
        type="text"
      />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
