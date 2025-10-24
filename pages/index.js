import { useEffect, useState } from "react";
import FeedbackForm from "../components/FeedbackForm";
import FeedbackList from "../components/FeedbackList";


export default function Home() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch("/api/feedback")
      .then((res) => res.json())
      .then(setFeedbacks);
  }, []);

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-400">KarmaFlow</h1>
      <p className="text-gray-400 mb-6 text-center">
        Envie feedbacks e fortaleça o time.
      </p>
      <FeedbackForm onSend={() => location.reload()} />
      <FeedbackList data={feedbacks} />
    </main>
  );
}
