import { useState } from "react"

const gifts = [
  'CPU i9',
  'Ram 32GB',
  'RGB keyboard'
];

const courses = [
  {id: 1, name: 'PHP'},
  {id: 2, name: 'JS'},
  {id: 3, name: 'Python'},
]

function App() {
  const [gift, setGift] = useState()
  const [name, setName] = useState('')
  const [checked, setChecked] = useState([])

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length)

    setGift(gifts[index])
  }

  const handleCheck = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id)
      if (isChecked) {
        return checked.filter(item => item !== id)
      } else {
        return [...prev, id]
      }
    })
  }

  return (
    <div id="wrapper" style={{padding: 32}}>
      <h1>{gift || 'Chưa có phần thưởng'}</h1>
      <button onClick={randomGift}>Lấy thưởng</button> <br/>

      <input type="text"
        onChange={e => setName(e.target.value)}
        value={name}
      />

      {courses.map((course) => (
        <div key={course.id}>
          <input
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
            type='checkbox'
          />{course.name}
        </div>
      ))}

    </div>
  );
}

export default App;
