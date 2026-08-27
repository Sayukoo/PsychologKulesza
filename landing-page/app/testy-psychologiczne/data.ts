export interface TestOption {
  label: string;
  value: number;
  description?: string;
}

export interface TestQuestion {
  id: number;
  text: string;
  context?: string;
  category?: string;
  reverseScore?: boolean;
}

export interface ResultLevel {
  minScore: number;
  maxScore: number;
  title: string;
  badge: string;
  badgeColor: 'emerald' | 'amber' | 'rose' | 'blue';
  summary: string;
  description: string;
  mechanisms: string[];
  recommendations: string[];
}

export interface MultiDimensionResult {
  dimension: string;
  title: string;
  score: number;
  maxScore: number;
  summary: string;
  strengths: string[];
  risks: string[];
  tip: string;
}

export interface PsychologicalTest {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  tag: string;
  estimatedTime: string;
  questionCount: number;
  scientificBasis: string;
  description: string;
  benefits: string[];
  questions: TestQuestion[];
  options: TestOption[];
  isMultiDimensional?: boolean;
  dimensions?: {
    key: string;
    title: string;
    description: string;
    questionIds: number[];
  }[];
  calculateResult: (answers: Record<number, number>) => {
    score: number;
    maxScore: number;
    percentage: number;
    level?: ResultLevel;
    dimensionResults?: MultiDimensionResult[];
    dominantDimension?: MultiDimensionResult;
  };
}

export const PSYCHOLOGICAL_TESTS: PsychologicalTest[] = [
  {
    id: 'paraliz-decyzyjny',
    slug: 'paraliz-decyzyjny',
    title: 'Test Paraliżu Decyzyjnego i Prokrastynacji',
    shortTitle: 'Paraliż decyzyjny',
    subtitle: 'Sprawdź, czy tkwisz w pętli nadmiernego analizowania (Analysis Paralysis) i odkładania wyborów na później.',
    tag: 'Podejmowanie decyzji',
    estimatedTime: '3-4 minuty',
    questionCount: 8,
    scientificBasis: 'Oparty na Skali Prokrastynacji Decyzyjnej (DPS — Mann et al.) oraz modelach przeciążenia poznawczego.',
    description:
      'Czy zdarza Ci się w nieskończoność analizować za i przeciw, czekać na „idealny moment” lub czuć lęk przed podjęciem niewłaściwej decyzji? Ten test pozwala zdiagnozować natężenie paraliżu analitycznego i zbadać Twoje nawyki decyzyjne.',
    benefits: [
      'Dowiesz się, czy Twój proces decyzyjny jest optymalny, czy blokowany przez lęk',
      'Poznasz mechanizmy stojące za odkładaniem ważnych spraw na później',
      'Otrzymasz konkretne strategie na przełamanie impasu decyzyjnego',
    ],
    options: [
      { label: 'Prawie nigdy', value: 1 },
      { label: 'Rzadko', value: 2 },
      { label: 'Czasami', value: 3 },
      { label: 'Często', value: 4 },
      { label: 'Prawie zawsze', value: 5 },
    ],
    questions: [
      {
        id: 1,
        text: 'Odwlekam podjęcie ważnej decyzji nawet wtedy, gdy mam już większość potrzebnych informacji.',
        context: 'Dotyczy decyzji zawodowych, relacyjnych lub osobistych.',
      },
      {
        id: 2,
        text: 'Wciąż szukam kolejnych danych, opinii i analiz, boję się, że przeoczyłem kluczowy szczegół.',
        context: 'Pętla szukania „100% pewności”.',
      },
      {
        id: 3,
        text: 'Myśl o dokonaniu złego wyboru wywołuje we mnie silny niepokój lub paraliżujące napięcie.',
        context: 'Lęk przed pomyłką i poczuciem żalu po decyzji (buyer’s remorse).',
      },
      {
        id: 4,
        text: 'Czekam, aż sytuacja sama się rozwiąże lub aż okoliczności zmuszą mnie do wyboru.',
        context: 'Oddawanie kontroli przypadkowi zamiast aktywnego wyboru.',
      },
      {
        id: 5,
        text: 'Po podjęciu decyzji wciąż wracam do niej myślami i zastanawiam się, czy inna opcja nie była lepsza.',
        context: 'Ciągłe reewaluowanie i brak spokoju po dokonanym wyborze.',
      },
      {
        id: 6,
        text: 'Liczba możliwych opcji przytłacza mnie tak bardzo, że rezygnuję z jakiegokolwiek działania.',
        context: 'Zjawisko przesytu wyboru (choice overload).',
      },
      {
        id: 7,
        text: 'Potrzebuję potwierdzenia i aprobaty wielu innych osób, zanim zdecyduję się na ruch.',
        context: 'Rozpraszanie odpowiedzialności na otoczenie.',
      },
      {
        id: 8,
        text: 'Proste wybory dnia codziennego zabierają mi niewspółmiernie dużo energii mentalnej.',
        context: 'Trudność z filtrowaniem priorytetów i wagą poszczególnych spraw.',
      },
    ],
    calculateResult: (answers) => {
      const questionIds = [1, 2, 3, 4, 5, 6, 7, 8];
      let score = 0;
      questionIds.forEach((id) => {
        score += answers[id] || 1;
      });
      const minScore = 8;
      const maxScore = 40;
      const percentage = Math.round(((score - minScore) / (maxScore - minScore)) * 100);

      const levels: ResultLevel[] = [
        {
          minScore: 8,
          maxScore: 16,
          title: 'Niski poziom paraliżu decyzyjnego (Płynność i sprawczość)',
          badge: 'Niskie obciążenie',
          badgeColor: 'emerald',
          summary: 'Podejmujesz decyzje sprawnie i akceptujesz nieodłączny element niepewności.',
          description:
            'Twój profil wskazuje na dużą gotowość do działania i racjonalne podejście do ryzyka. Nie utykasz w niekończących się analizach i potrafisz wyznaczać granicę, kiedy danych jest wystarczająco dużo, by pójść do przodu. Ewentualne pomyłki traktujesz raczej jako informację zwrotną niż osobistą porażkę.',
          mechanisms: [
            'Wysoka tolerancja na niepewność i brak 100% gwarancji',
            'Umiejętność oddzielania decyzji kluczowych od błahych',
            'Konstruktywne zarządzanie czasem analitycznym',
          ],
          recommendations: [
            'Utrzymuj swoje dotychczasowe nawyki i uważność na higienę psychiczną.',
            'Przy szczególnie trudnych dylematach strategicznych pamiętaj o konsultacji z zewnętrznym partnerem do myślenia.',
          ],
        },
        {
          minScore: 17,
          maxScore: 28,
          title: 'Umiarkowany paraliż analityczny (Okresowe zawahania i opór)',
          badge: 'Umiarkowane obciążenie',
          badgeColor: 'amber',
          summary: 'W codziennych sprawach radzisz sobie dobrze, lecz przy decyzjach o dużej stawce pojawia się hamowanie.',
          description:
            'Gdy poziom złożoności lub stawka rosną, Twój umysł ma tendencję do wchodzenia w tryb „nadmiernego zbierania dowodów”. Przez to proces wyboru staje się męczący, pochłania cenną energię i może opóźniać ważne projekty życiowe lub zawodowe. Często towarzyszy temu subtelny lęk przed utratą innych, alternatywnych możliwości.',
          mechanisms: [
            'Wydłużanie fazy poszukiwania informacji poza optymalny punkt zwrotu',
            'Zwracanie uwagi na potencjalne straty silniej niż na potencjalne zyski (awersja do straty)',
            'Zmęczenie decyzyjne kumulujące się w trudniejszych momentach',
          ],
          recommendations: [
            'Wprowadź regułę „satysfakcjonowania” zamiast maksymalizacji (szukaj opcji wystarczająco dobrej, a nie idealnej).',
            'Ustalaj twarde terminy końcowe (deadlines) na etap zbierania danych.',
            'Rozpisz decyzję na papierze: fakty vs emocjonalne obawy, aby zobaczyć realną stawkę.',
          ],
        },
        {
          minScore: 29,
          maxScore: 40,
          title: 'Wysoki paraliż decyzyjny (Analysis Paralysis & Silna blokada)',
          badge: 'Wysokie przeciążenie',
          badgeColor: 'rose',
          summary: 'Proces decyzyjny wywołuje w Tobie silny stres, przeciążenie i wyraźne utknięcie w miejscu.',
          description:
            'Jesteś w stanie silnego przeciążenia analitycznego. Prawdopodobnie czujesz, że każda opcja niesie zbyt duże ryzyko, a brak pewności odbiera Ci spokój snu i energię do działania. Twój mózg próbuje ochronić Cię przed błędem poprzez wstrzymanie decyzji, ale sam stan zawieszenia kosztuje Cię więcej sił niż jakikolwiek wybór.',
          mechanisms: [
            'Pętla ruminacji – wielokrotne powtarzanie tych samych scenariuszy bez dochodzenia do wniosków',
            'Silny lęk przed żalem i poczuciem winy w razie błędu',
            'Iluzja, że brak decyzji to brak konsekwencji (podczas gdy brak decyzji też jest decyzją)',
          ],
          recommendations: [
            'Zatrzymaj dalsze zbieranie informacji – masz już dość wiedzy, problem leży w emocjonalnym lęku przed ruchem.',
            'Zastosuj metodę małych, odwracalnych mikrokroków zamiast jednej wielkiej rewolucji.',
            'Skorzystaj z zewnętrznej, ustrukturyzowanej rozmowy 1:1 z psychologiem, aby uporządkować chaos w 60 minut.',
          ],
        },
      ];

      const matchedLevel = levels.find((l) => score >= l.minScore && score <= l.maxScore) || levels[1];
      return { score, maxScore, percentage, level: matchedLevel };
    },
  },
  {
    id: 'poziom-stresu',
    slug: 'poziom-stresu',
    title: 'Test Poziomu Stresu i Przeciążenia Poznawczego',
    shortTitle: 'Poziom stresu i przeciążenie',
    subtitle: 'Zbadaj swoje subiektywne poczucie kontroli, napięcia i wyczerpania psychicznego w ostatnim miesiącu.',
    tag: 'Odporność psychiczna',
    estimatedTime: '3-4 minuty',
    questionCount: 8,
    scientificBasis: 'Inspirowany Skalą Odczuwanego Stresu (PSS — Cohen et al.), uznanym standardem w badaniach psychologicznych.',
    description:
      'Przewlekły stres odbiera jasność myślenia, obniża jakość snu i utrudnia logiczne wnioskowanie. Ten kwestionariusz bada, jak często w ostatnim czasie czułeś się przytłoczony wymaganiami i w jakim stopniu zachowujesz wpływ na swoje życie.',
    benefits: [
      'Zdiagnozujesz, czy Twoje obciążenie ma charakter chwilowy, czy przewlekły',
      'Sprawdzisz swój poziom poczucia kontroli i wpływu na sytuację',
      'Poznasz wskazówki dotyczące regeneracji układu nerwowego i redukcji przeciążenia',
    ],
    options: [
      { label: 'Nigdy (0 pkt)', value: 0 },
      { label: 'Prawie nigdy (1 pkt)', value: 1 },
      { label: 'Czasami (2 pkt)', value: 2 },
      { label: 'Dość często (3 pkt)', value: 3 },
      { label: 'Bardzo często (4 pkt)', value: 4 },
    ],
    questions: [
      {
        id: 1,
        text: 'W ostatnim miesiącu czułem(-am) się wyprowadzony(-a) z równowagi przez nieprzewidziane zdarzenia.',
      },
      {
        id: 2,
        text: 'Czułem(-am), że nie jestem w stanie poradzić sobie ze wszystkimi obowiązkami, które na mnie spoczywają.',
      },
      {
        id: 3,
        text: 'Miałem(-am) poczucie, że sprawy układają się po mojej myśli i mam nad nimi kontrolę.',
        reverseScore: true,
        context: 'Pytanie odwrócone — wysoka ocena oznacza niższy stres.',
      },
      {
        id: 4,
        text: 'Czułem(-am) napięcie, nerwowość i trudność z fizycznym oraz psychicznym rozluźnieniem.',
      },
      {
        id: 5,
        text: 'Czułem(-am) się pewny(-a) swoich umiejętności rozwiązywania osobistych i zawodowych problemów.',
        reverseScore: true,
        context: 'Pytanie odwrócone — wysoka ocena oznacza większą odporność.',
      },
      {
        id: 6,
        text: 'Miałem(-am) wrażenie, że trudności piętrzą się tak bardzo, że nie potrafię ich przezwyciężyć.',
      },
      {
        id: 7,
        text: 'Trudno było mi się skoncentrować, a gonitwa myśli utrudniała mi zasypianie lub wypoczynek.',
      },
      {
        id: 8,
        text: 'Czułem(-am), że kontroluję sposób, w jaki spędzam swój czas i zarządzam priorytetami.',
        reverseScore: true,
        context: 'Pytanie odwrócone — wysoka ocena oznacza większą sterowność.',
      },
    ],
    calculateResult: (answers) => {
      let score = 0;
      const questionConfigs = [
        { id: 1, reverse: false },
        { id: 2, reverse: false },
        { id: 3, reverse: true },
        { id: 4, reverse: false },
        { id: 5, reverse: true },
        { id: 6, reverse: false },
        { id: 7, reverse: false },
        { id: 8, reverse: true },
      ];

      questionConfigs.forEach(({ id, reverse }) => {
        const raw = answers[id] !== undefined ? answers[id] : 0;
        const val = reverse ? 4 - raw : raw;
        score += val;
      });

      const minScore = 0;
      const maxScore = 32;
      const percentage = Math.round((score / maxScore) * 100);

      const levels: ResultLevel[] = [
        {
          minScore: 0,
          maxScore: 11,
          title: 'Niski poziom odczuwanego stresu (Równowaga i rezyliencja)',
          badge: 'Stan optymalny',
          badgeColor: 'emerald',
          summary: 'Dobrze radzisz sobie z bieżącymi wyzwaniami i zachowujesz wysokie poczucie wpływu.',
          description:
            'Twój układ nerwowy funkcjonuje w strefie równowagi. Nawet jeśli pojawiają się trudności, postrzegasz je jako wyzwania do rozwiązania, a nie zagrożenie. Posiadasz sprawne strategie regeneracji i nie dopuszczasz do kumulacji przeciążenia poznawczego.',
          mechanisms: [
            'Wysokie poczucie samoskuteczności i wpływu na bieg zdarzeń',
            'Zdolność do wyłączania myślenia o obowiązkach poza pracą',
            'Elastyczność w adaptacji do zmian',
          ],
          recommendations: [
            'Dbaj o stałe nawyki snu, regeneracji i granic psychicznych.',
            'Pamiętaj, że odporność to nie brak problemów, ale umiejętność powrotu do równowagi.',
          ],
        },
        {
          minScore: 12,
          maxScore: 21,
          title: 'Umiarkowany poziom stresu (Stan podwyższonej mobilizacji)',
          badge: 'Wymaga uwagi',
          badgeColor: 'amber',
          summary: 'Doświadczasz zauważalnego napięcia i okresowego spadku poczucia kontroli.',
          description:
            'Funkcjonujesz w stanie przewlekłej gotowości. Choć nadal wywiązujesz się ze swoich zadań, dzieje się to coraz większym kosztem energetycznym. Możesz zauważać pierwsze objawy przeciążenia poznawczego: gorszą koncentrację, drażliwość, problem z wyciszeniem przed snem czy trudność w podejmowaniu decyzji.',
          mechanisms: [
            'Długotrwałe utrzymywanie wysokich obrotów bez odpowiednich przerw na wygaszenie napięcia',
            'Biorąc na siebie zbyt wiele, tracisz poczucie sterowności',
            'Tendencja do traktowania odpoczynku jako straty czasu',
          ],
          recommendations: [
            'Wprowadź codzienny 15-minutowy bufor ciszy (bez powiadomień, ekranów i bodźców).',
            'Dokonaj bezwzględnej selekcji zadań: oddziel rzeczy pilne od naprawdę ważnych.',
            'Zadbaj o fizjologiczne wygaszanie stresu: ruch, wydłużony wydech, redukcja kofeiny.',
          ],
        },
        {
          minScore: 22,
          maxScore: 32,
          title: 'Wysoki poziom stresu (Przeciążenie poznawcze i emocjonalne)',
          badge: 'Wysoki alert',
          badgeColor: 'rose',
          summary: 'Twoje zasoby adaptacyjne są na wyczerpaniu. Układ nerwowy pracuje w trybie przetrwania.',
          description:
            'Twój wynik wskazuje na znaczne przeciążenie psychiczne. W tym stanie mózg przełącza się z logicznej kory przedczołowej na mechanizmy obronne (walka / ucieczka / zamrożenie), co drastycznie utrudnia podejmowanie mądrych decyzji, widzenie perspektywy i konstruktywne działanie. To nie jest kwestia „słabej woli”, lecz biologicznego wyczerpania.',
          mechanisms: [
            'Poczucie utraty kontroli nad lawiną zdarzeń i zobowiązań',
            'Zjawisko tunelowego myślenia – trudność w dostrzeżeniu rozwiązań innych niż skrajne',
            'Chroniczne zmęczenie, które nie ustępuje po jednej nocy snu',
          ],
          recommendations: [
            'Priorytet absolutny: zatrzymanie eskalacji i odciążenie układu nerwowego.',
            'Nie podejmuj w tym stanie życiowych decyzji strategicznych – najpierw potrzebujesz obniżyć napięcie.',
            'Skorzystaj ze wsparcia psychologicznego, by wspólnie uporządkować priorytety i zdjąć zbędny balast.',
          ],
        },
      ];

      const matchedLevel = levels.find((l) => score >= l.minScore && score <= l.maxScore) || levels[1];
      return { score, maxScore, percentage, level: matchedLevel };
    },
  },
  {
    id: 'styl-decyzyjny',
    slug: 'styl-decyzyjny',
    title: 'Kwestionariusz Stylu Podejmowania Decyzji (GDMS)',
    shortTitle: 'Styl podejmowania decyzji',
    subtitle: 'Dowiedz się, jakim schematem posługujesz się przy wyborach: analitycznym, intuicyjnym, zależnym czy unikającym.',
    tag: 'Autodiagnoza stylów',
    estimatedTime: '4-5 minut',
    questionCount: 10,
    scientificBasis: 'Oparty na modelu stylów decyzyjnych General Decision Making Style (GDMS — Scott & Bruce, 1995).',
    description:
      'Każdy człowiek posiada dominujący styl podejmowania decyzji. Znajomość własnego profilu pozwala wykorzystywać swoje naturalne mocne strony i neutralizować pułapki (np. nadmierne analizowanie u analityków czy impulsywność u intuicjonistów).',
    benefits: [
      'Zidentyfikujesz swój dominujący i pomocniczy styl decyzyjny',
      'Poznasz typowe pułapki myślowe charakterystyczne dla Twojego profilu',
      'Otrzymasz wskazówki, jak łączyć twarde fakty z intuicją w codziennej pracy i życiu',
    ],
    isMultiDimensional: true,
    dimensions: [
      {
        key: 'rational',
        title: 'Styl Racjonalny (Analityczny)',
        description: 'Podejście logiczne, oparte na faktach, tabelach i chłodnej kalkulacji.',
        questionIds: [1, 2],
      },
      {
        key: 'intuitive',
        title: 'Styl Intuicyjny',
        description: 'Opieranie się na przeczuciach, emocjach, wrażeniach i całościowym obrazie.',
        questionIds: [3, 4],
      },
      {
        key: 'dependent',
        title: 'Styl Zależny (Konsultacyjny)',
        description: 'Szukanie oparcia, porad i potwierdzenia u innych ludzi przed dokonaniem wyboru.',
        questionIds: [5, 6],
      },
      {
        key: 'avoidant',
        title: 'Styl Unikający',
        description: 'Odwlekanie momentu decyzji, zwlekanie i odsuwanie tematu w czasie.',
        questionIds: [7, 8],
      },
      {
        key: 'spontaneous',
        title: 'Styl Spontaniczny (Szybki)',
        description: 'Podejmowanie decyzji pod wpływem chwili, chęć natychmiastowego zamknięcia sprawy.',
        questionIds: [9, 10],
      },
    ],
    options: [
      { label: 'Zdecydowanie się nie zgadzam (1)', value: 1 },
      { label: 'Raczej się nie zgadzam (2)', value: 2 },
      { label: 'Trudno powiedzieć (3)', value: 3 },
      { label: 'Raczej się zgadzam (4)', value: 4 },
      { label: 'Zdecydowanie się zgadzam (5)', value: 5 },
    ],
    questions: [
      {
        id: 1,
        text: 'Zanim podejmę decyzję, dokładnie zbieram fakty, rozpisuję opcje i logicznie oceniam konsekwencje.',
        category: 'rational',
      },
      {
        id: 2,
        text: 'Wolę kierować się chłodną kalkulacją i dowodami niż chwilowymi emocjami.',
        category: 'rational',
      },
      {
        id: 3,
        text: 'Często podejmuję decyzje na podstawie wewnętrznego „przeczucia” lub tego, co czuję w ciele.',
        category: 'intuitive',
      },
      {
        id: 4,
        text: 'Ufam swoim pierwszym wrażeniom i rzadko potrzebuję drobiazgowych tabel z wyliczeniami.',
        category: 'intuitive',
      },
      {
        id: 5,
        text: 'Zanim wybiorę rozwiązanie, muszę skonsultować się ze znajomymi, rodziną lub ekspertami.',
        category: 'dependent',
      },
      {
        id: 6,
        text: 'Czuję się znacznie bezpieczniej, gdy ktoś z zewnątrz potwierdzi, że mój wybór ma sens.',
        category: 'dependent',
      },
      {
        id: 7,
        text: 'Odwlekam decyzje tak długo, jak to tylko możliwe, licząc, że pojawi się lepsza opcja.',
        category: 'avoidant',
      },
      {
        id: 8,
        text: 'Unikam konfrontacji z trudnymi wyborami i czekam na ostatnią chwilę.',
        category: 'avoidant',
      },
      {
        id: 9,
        text: 'Decyzje podejmuję błyskawicznie, często pod wpływem impulsu danej chwili.',
        category: 'spontaneous',
      },
      {
        id: 10,
        text: 'Nie lubię długiego debatowania – wolę szybko wybrać cokolwiek i przejść do działania.',
        category: 'spontaneous',
      },
    ],
    calculateResult: (answers) => {
      const dimConfigs = [
        {
          key: 'rational',
          title: 'Styl Racjonalny (Analityczny)',
          qIds: [1, 2],
          summary: 'Cechuje Cię metodyczne i ustrukturyzowane podejście do rzeczywistości.',
          strengths: ['Świetna selekcja danych', 'Minimalizacja błędów logicznych', 'Spokój w obliczu złożoności'],
          risks: ['Paraliż analityczny', 'Ignorowanie ważnych sygnałów emocjonalnych', 'Zbyt wolne tempo przy presji czasu'],
          tip: 'Wyznaczaj punkt odcięcia zbierania danych (np. zasada 70% informacji).',
        },
        {
          key: 'intuitive',
          title: 'Styl Intuicyjny',
          qIds: [3, 4],
          summary: 'Kierujesz się całościowym wyczuciem sytuacji i syntezą podświadomych doświadczeń.',
          strengths: ['Szybkość reakcji', 'Dobre wyczucie ludzi i atmosfery', 'Brak blokady przy braku twardych danych'],
          risks: ['Błędy poznawcze (efekt potwierdzenia)', 'Trudność w wytłumaczeniu decyzji innym', 'Podatność na chwilowy nastrój'],
          tip: 'Weryfikuj przeczucia krótkim testem faktów przed ostatecznym ruchem.',
        },
        {
          key: 'dependent',
          title: 'Styl Zależny (Konsultacyjny)',
          qIds: [5, 6],
          summary: 'Kluczowe jest dla Ciebie bezpieczeństwo i zbieranie perspektyw od innych.',
          strengths: ['Budowanie sojuszy i konsensusu', 'Uwzględnianie perspektyw otoczenia', 'Wysoka empatia'],
          risks: ['Rozmywanie własnej odpowiedzialności', 'Uleganie presji grupy', 'Poczucie bezradności w samotności'],
          tip: 'Przed pytaniem innych najpierw zapisz, co sam(a) uważasz za słuszne.',
        },
        {
          key: 'avoidant',
          title: 'Styl Unikający',
          qIds: [7, 8],
          summary: 'Głównym motywem jest redukcja napięcia poprzez oddalenie momentu wyboru.',
          strengths: ['Nierobienie pochopnych ruchów', 'Pozwalanie opadnięciu emocjom'],
          risks: ['Utrata okazji', 'Kumulowanie stresu w tle', 'Podejmowanie decyzji przez przymus okoliczności'],
          tip: 'Dziel decyzję na małe, niegroźne mikrokroki zamiast jednego wielkiego skoku.',
        },
        {
          key: 'spontaneous',
          title: 'Styl Spontaniczny (Impulsywny)',
          qIds: [9, 10],
          summary: 'Działasz szybko i dynamicznie, chcąc natychmiast zredukować stan niepewności.',
          strengths: ['Wysoka dynamika działania', 'Brak lęku przed ruchem', 'Odblokowywanie impasów'],
          risks: ['Żal po pochopnych decyzjach', 'Niedoszacowanie ryzyka', 'Przeoczanie krytycznych detali'],
          tip: 'Wprowadź regułę 24 godzin odczekania przy ważnych decyzjach.',
        },
      ];

      const dimensionResults: MultiDimensionResult[] = dimConfigs.map((cfg) => {
        let score = 0;
        cfg.qIds.forEach((qId) => {
          score += answers[qId] || 1;
        });
        return {
          dimension: cfg.key,
          title: cfg.title,
          score,
          maxScore: 10,
          summary: cfg.summary,
          strengths: cfg.strengths,
          risks: cfg.risks,
          tip: cfg.tip,
        };
      });

      const sorted = [...dimensionResults].sort((a, b) => b.score - a.score);
      const dominantDimension = sorted[0];

      let totalScore = 0;
      dimensionResults.forEach((d) => (totalScore += d.score));

      return {
        score: totalScore,
        maxScore: 50,
        percentage: Math.round((totalScore / 50) * 100),
        dimensionResults,
        dominantDimension,
      };
    },
  },
  {
    id: 'zmeczenie-decyzyjne',
    slug: 'zmeczenie-decyzyjne',
    title: 'Test Zmęczenia Decyzyjnego i Wyczerpania Woli',
    shortTitle: 'Zmęczenie decyzyjne',
    subtitle: 'Sprawdź, czy Twoja siła woli i energia poznawcza są przeciążone ciągłym dokonywaniem mikrowyborów.',
    tag: 'Energia mentalna',
    estimatedTime: '3 minuty',
    questionCount: 8,
    scientificBasis: 'Inspirowany koncepcją wyczerpania ego (Ego Depletion — Baumeister) i zmęczenia decyzyjnego w psychologii poznawczej.',
    description:
      'Każdy wybór w ciągu dnia – od doboru ubrania, przez odpisywanie na wiadomości, po dylematy w pracy – zużywa tę samą pulę energii mentalnej. Gdy się wyczerpie, stajemy się drażliwi, ulegamy impulsom lub nie mamy siły na nic. Sprawdź stan swojego „akumulatora”.',
    benefits: [
      'Dowiesz się, dlaczego pod koniec dnia masz trudność z prostymi sprawami',
      'Poznasz poziom wyczerpania zasobów samokontroli i kory przedczołowej',
      'Otrzymasz techniki automatyzacji i ochrony energii mentalnej',
    ],
    options: [
      { label: 'Nigdy / Prawie nigdy (1)', value: 1 },
      { label: 'Rzadko (2)', value: 2 },
      { label: 'Czasami (3)', value: 3 },
      { label: 'Często (4)', value: 4 },
      { label: 'Bardzo często (5)', value: 5 },
    ],
    questions: [
      {
        id: 1,
        text: 'Pod koniec dnia czuję tak duże zmęczenie umysłowe, że irytuje mnie nawet pytanie „co jemy na obiad?”.',
      },
      {
        id: 2,
        text: 'W godzinach popołudniowych lub wieczornych znacznie łatwiej ulegam niezdrowym nawykom (słodycze, bezmyślne scrollowanie, impulsywne zakupy).',
      },
      {
        id: 3,
        text: 'Często wybieram opcję domyślną lub najprostszą tylko po to, by nie musieć już dłużej myśleć.',
      },
      {
        id: 4,
        text: 'Mam wrażenie, że w ciągu dnia muszę podjąć setki drobnych decyzji, co wysysa ze mnie całą energię.',
      },
      {
        id: 5,
        text: 'Trudniej mi panować nad emocjami i cierpliwością w kontaktach z bliskimi po intensywnym dniu pracy.',
      },
      {
        id: 6,
        text: 'Odkładam proste maile czy telefony na „jutro”, bo sam widok skrzynki odbiorczej budzi we mnie opór.',
      },
      {
        id: 7,
        text: 'Często czuję fizyczne wyczerpanie mimo braku intensywnego wysiłku fizycznego.',
      },
      {
        id: 8,
        text: 'Trudno mi skupić się na jednej rzeczy bez odruchowego sprawdzania powiadomień.',
      },
    ],
    calculateResult: (answers) => {
      let score = 0;
      for (let i = 1; i <= 8; i++) {
        score += answers[i] || 1;
      }
      const minScore = 8;
      const maxScore = 40;
      const percentage = Math.round(((score - minScore) / (maxScore - minScore)) * 100);

      const levels: ResultLevel[] = [
        {
          minScore: 8,
          maxScore: 18,
          title: 'Wysoki poziom energii decyzyjnej (Akumulator naładowany)',
          badge: 'Świetna kondycja',
          badgeColor: 'emerald',
          summary: 'Twoja higiena poznawcza i poziom zasobów mentalnych są na bardzo dobrym poziomie.',
          description:
            'Umiejętnie zarządzasz swoimi zasobami i nie dopuszczasz do przeciążenia kory mózgowej nadmiarem mikrodecyzji. Posiadasz zdrowe nawyki i potrafisz regenerować siłę woli w ciągu dnia.',
          mechanisms: [
            'Dobra filtracja bodźców i automatyzacja powtarzalnych spraw',
            'Równomierne rozłożenie energii i regularne przerwy',
            'Brak nadmiernej uległości wobec impulsów pod koniec dnia',
          ],
          recommendations: [
            'Utrzymuj nawyki wyznaczania priorytetów rano.',
            'Dbaj o zachowanie obecnego balansu między pracą głęboką a odpoczynkiem.',
          ],
        },
        {
          minScore: 19,
          maxScore: 29,
          title: 'Umiarkowane zmęczenie decyzyjne (Objawy wyczerpywania woli)',
          badge: 'Stan ostrzegawczy',
          badgeColor: 'amber',
          summary: 'Twój zasób energii poznawczej regularnie drenuje się w drugiej połowie dnia.',
          description:
            'Doświadczasz klasycznego zmęczenia decyzyjnego (Decision Fatigue). W pierwszej połowie dnia funkcjonujesz sprawnie, ale pod wieczór Twoja samokontrola i zdolność krytycznego myślenia wyraźnie spadają. Zaczynasz podejmować decyzje gorszej jakości lub uciekać w prokrastynację.',
          mechanisms: [
            'Zbyt duża liczba niepotrzebnych mikrowyborów w ciągu dnia (tzw. clutter decyzyjny)',
            'Brak sztywnych nawyków i stałych procedur dla powtarzalnych czynności',
            'Zmniejszona odporność na pokusy i skłonność do unikania trudnych tematów wieczorem',
          ],
          recommendations: [
            'Zautomatyzuj poranki i wieczory (stałe posiłki, ubiór, rytuały, by nie tracić na to energii rano).',
            'Kluczowe decyzje podejmuj ZAWSZE w pierwszej części dnia lub po posiłku/odpoczynku.',
            'Ogranicz liczbę otwartych wątków i kart w przeglądarce.',
          ],
        },
        {
          minScore: 30,
          maxScore: 40,
          title: 'Głębokie wyczerpanie decyzyjne (Pusty akumulator poznawczy)',
          badge: 'Wyczerpanie',
          badgeColor: 'rose',
          summary: 'Twoje zasoby mentalne są chronicznie przeciążone. Mózg woła o natychmiastowe odciążenie.',
          description:
            'Jesteś w stanie ostrego przeciążenia poznawczego. Twój mózg próbuje oszczędzać resztki glukozy i energii poprzez rezygnację z myślenia analitycznego na rzecz automatycznych, często autodestrukcyjnych lub unikających schematów. W tym stanie każda kolejna prośba o decyzję wywołuje złość, bezsilność lub apatię.',
          mechanisms: [
            'Drenaż uwagi przez niekończący się strumień powiadomień, pytań i zadań',
            'Chroniczne obniżenie poziomu dopaminy i samokontroli',
            'Syndrom „nic mi się nie chce” wynikający z biologicznego zmęczenia kory czołowej',
          ],
          recommendations: [
            'Wprowadź radykalną redukcję bodźców: wyłącz powiadomienia i zrób sobie pełny weekend bez podejmowania decyzji.',
            'Zastosuj zasadę „nie podejmuję decyzji po 18:00”.',
            'Uporządkuj swoje otoczenie i obowiązki z pomocą kogoś z zewnątrz (np. podczas konsultacji psychologicznej).',
          ],
        },
      ];

      const matchedLevel = levels.find((l) => score >= l.minScore && score <= l.maxScore) || levels[1];
      return { score, maxScore, percentage, level: matchedLevel };
    },
  },
];
