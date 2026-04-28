import { useState } from "react"

export default function Form() {
  const [name, setName] = useState("")
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)

    const res = await fetch("http://127.0.0.1:5000/process", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name })
    })

    const data = await res.json()
    setResult(data)
    setLoading(false)
  }

  return (
    <div style={{
      maxWidth: "400px",
      margin: "50px auto",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 0 10px rgba(0,0,0,0.2)",
      textAlign: "center",
      fontFamily: "Arial"
    }}>
      
      <h2>🧪 API Testing Form</h2>

      <input
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: "10px",
          width: "90%",
          marginBottom: "10px"
        }}
      />

      <br />

      <button
        onClick={handleSubmit}
        style={{
          padding: "10px 20px",
          background: "black",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px"
        }}
      >
        {loading ? "Processing..." : "Test API"}
      </button>

      {result && (
        <div style={{ marginTop: "20px", textAlign: "left" }}>
          <h3>Response:</h3>
          <p>Original: {result.original}</p>
          <p>Upper: {result.upper}</p>
          <p>Length: {result.length}</p>
          <p>Status: {result.status}</p>
        </div>
      )}
    </div>
  )
}