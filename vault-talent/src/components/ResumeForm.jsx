import { useState } from 'react'

export default function ResumeForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return <p className="text-center text-teal-dark p-4">Thank you for submitting your resume!</p>
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 text-teal-dark space-y-4">
      <div>
        <label className="block mb-1">Name</label>
        <input required className="w-full border rounded p-2" type="text" />
      </div>
      <div>
        <label className="block mb-1">Email</label>
        <input required className="w-full border rounded p-2" type="email" />
      </div>
      <div>
        <label className="block mb-1">Headshot</label>
        <input required className="w-full" type="file" />
      </div>
      <div>
        <label className="block mb-1">Resume</label>
        <input required className="w-full" type="file" />
      </div>
      <div>
        <label className="block mb-1">Demo Reel URL</label>
        <input className="w-full border rounded p-2" type="url" />
      </div>
      <div>
        <label className="block mb-1">Category</label>
        <select className="w-full border rounded p-2">
          <option>Actor</option>
          <option>Model</option>
          <option>Voice</option>
        </select>
      </div>
      <button type="submit" className="bg-brass text-teal-dark px-4 py-2 rounded">Submit</button>
    </form>
  )
}
