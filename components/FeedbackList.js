export default function FeedbackList({ data }) {
  if (!data?.length)
    return <p className="text-gray-500">Nenhum feedback enviado ainda.</p>;

  return (
    <section className="w-full max-w-md space-y-3">
      {data.map((f, i) => (
        <div key={i} className="bg-gray-800 p-3 rounded-lg">
          <p className="text-gray-200">{f.message}</p>
          <span className="text-xs text-gray-500">
            {f.anonymous ? "Anônimo" : f.author || "Usuário"}
          </span>
        </div>
      ))}
    </section>
  );
}
