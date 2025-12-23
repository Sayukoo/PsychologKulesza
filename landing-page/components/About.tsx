export default function About() {
  return (
    <section id="o-mnie" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="bg-gray-200 h-96 w-full flex items-center justify-center text-black font-mono text-sm border border-black">
            [ZDJĘCIE PROFILOWE]
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 uppercase">Kim jestem?</h2>
          <div className="space-y-4 text-lg text-gray-800">
            <p>
              Nazywam się <strong>Kacper Kulesza</strong>. Jestem magistrem psychologii.
            </p>
            <p>
              Nie interesuje mnie "pogadanka" o Twoim dzieciństwie, chyba że ma bezpośredni wpływ na Twoje dzisiejsze błędne decyzje.
              Nie jestem coachem, który każe Ci wizualizować sukces. Nie jestem terapeutą, który będzie Cię głaskał po głowie.
            </p>
            <p>
              Pracuję analitycznie. Zajmuję się psychologią poznawczą i behawioralną w kontekście efektywności osobistej.
              Pomagam ludziom zrozumieć ich własny "system operacyjny" – schematy myślenia, automatyczne reakcje emocjonalne i błędy poznawcze.
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-6 font-medium text-black">
              <li>Magister psychologii (SWPS - Szkoła Wyższa Psychologii Społecznej)</li>
              <li>Praktyk pracy z regulacją emocji</li>
              <li>Specjalista od analizy schematów decyzyjnych</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
