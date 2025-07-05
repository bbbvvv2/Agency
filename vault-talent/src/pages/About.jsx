import AboutSection from '../components/AboutSection'

export default function About() {
  return (
    <section className="max-w-5xl mx-auto p-4">
      <h2 className="text-3xl font-serif text-teal-dark mb-4 text-center">About Vault Talent Agency</h2>
      <p className="mb-6 text-center text-teal-dark">We are a boutique agency dedicated to connecting exceptional talent with remarkable opportunities.</p>
      <AboutSection />
    </section>
  )
}
