import { useState } from "react";

export default function FeedbackForm({ onSend }) {
  const [msg, setMsg] = useState("");
  const [anon, setAnon] = useState(true);

  async function sendFeedback(e) {
    e.preventDefault();
    await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: msg, anonymous: anon }),
    });
    setMsg("");
    onSend();
  }

  return (
    <form
      onSubmit={sendFeedback}
      className="bg-gray-800 p-4 rounded-xl w-full max-w-md mb-6"
    >
      <textarea
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Deixe seu feedback..."
        className="w-full p-2 rounded bg-gray-900 text-gray-100 mb-3"
        required
      />
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-gray-400">
          <input
            type="checkbox"
            checked={anon}
            onChange={() => setAnon(!anon)}
          />
          Enviar anonimamente
        </label>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}
