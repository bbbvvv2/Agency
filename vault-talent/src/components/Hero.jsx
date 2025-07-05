export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(29,60,52,0.8), rgba(212,175,55,0.8))",
      }}
    >
      <div className="absolute inset-0 bg-teal-dark/80 flex items-center justify-center">
        <div className="text-center text-cream px-4">
          <h1 className="text-5xl font-serif mb-4">Vault Talent Agency</h1>
          <p className="mb-6 max-w-xl mx-auto">Boutique representation for outstanding performers.</p>
          <a href="/talent" className="bg-brass text-teal-dark px-6 py-3 rounded hover:opacity-90">View Talent</a>
        </div>
      </div>
    </section>
  );
}
