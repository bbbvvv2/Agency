import Hero from '../components/Hero'
import TalentCard from '../components/TalentCard'
import { talentList } from '../data/talentList'

export default function Home() {
  return (
    <>
      <Hero />
      <section className="max-w-5xl mx-auto p-4">
        <h2 className="text-3xl font-serif text-teal-dark mb-4 text-center">Featured Talent</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {talentList.slice(0,3).map(t => (
            <TalentCard key={t.id} talent={t} />
          ))}
        </div>
      </section>
      <footer className="bg-teal-dark text-cream text-center p-4 mt-8">
        <p>Contact us: info@vaulttalent.com</p>
        <p className="mt-2">Follow us on <a href="#" className="underline">Instagram</a></p>
      </footer>
    </>
  )
}
