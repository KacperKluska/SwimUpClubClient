/* spell-checker: disable */
import LOCALES from '../utils/locales';

export default {
  [LOCALES.POLISH]: {
    appName: 'SwimUp Club',
    hello: 'Witaj',
    language: 'Język',
    pageInProgress: 'Strona {page} jest w budowie',
    common: {
      loading: 'Ładowanie...',
      delete: 'Usuń',
      remove: 'Usuń',
      cancel: 'Anuluj',
      add: 'Dodaj',
      date: 'Data',
      swimmer: 'Zawodnik',
      coach: 'Trener',
    },
    appBar: {
      appName: 'SwimUp Club',
      language: 'Język',
      signIn: 'Zaloguj się',
      profile: 'Profil',
      logout: 'Wyloguj',
    },
    loginPage: {
      title: 'Logowanie',
      email: 'Email',
      emailPrompt: 'Wpisz swój adres email',
      password: 'Hasło',
      passwordPrompt: 'Wpisz swoje hasło',
      signIn: 'Zaloguj się',
      wrongData:
        'Podałeś błędny email i/lub hasło, spróbuj pownownie albo skontaktuj się z administratorem',
      emptyData: `Musisz uzupełnić oba pola`,
    },
    registerPage: {
      title: 'Rejestracja',
      name: 'Imie',
      namePrompt: 'Podaj imie uzytkownika',
      surname: 'Nazwisko',
      surnamePrompt: 'Podaj nazwisko użytkownika',
      email: 'Email',
      emailPrompt: 'Podaj adres email',
      password: 'Hasło',
      passwordPrompt: 'Podaj hasło dla użytkownika',
      passwordRepeated: 'Hasło',
      passwordRepeatedPrompt: 'Powtórz hasło',
      phoneNumber: 'Numer telefonu',
      phoneNumberPrompt: 'Podaj swój numer telefonu',
      signUp: 'Zarejestruj użytkownika',
      wrongEmail: 'Podałeś niepoprawny adres email',
      emptyData: `Musisz uzupełnić wszystkie pola`,
      notIdenticalPasswords: `Podane hasła różnią się od siebie`,
      passwordInvalid: `Hasło musi składać się z conajmniej 1 małej litery, 1 duzej litery, 1 liczby, 1 znaku specjalnego (!@#$%^&*) oraz musi mieć conajmniej 8 znaków lub więcej.`,
      phoneNumberInvalid: `Podałeś niepoprawny numer telefonu. Numer telefonu powinien składać się z 9 cyfr.`,
    },
    settingsPage: {
      profile: 'Profil',
      profileDetails: 'Szczegółowe dane',
      edit: 'Edytuj dane',
      save: 'Zapisz zmiany',
      email: 'Email',
      name: 'Imie',
      surname: 'Nazwisko',
      age: 'Wiek',
      weight: 'Waga',
      height: 'Wzrost',
      phoneNumber: 'Numer telefonu',
      gender: 'Płeć',
      uploadImage: 'Wgraj zdjęcie',
      password: 'Hasło',
      passwordPlaceholder: 'Podaj nowe hasło',
      passwordRepeated: 'Powtórzone hasło',
      passwordRepeatedPlaceholder: 'Powtórz nowe hasło',
      changePassword: 'Zmień hasło',
      addEvent: {
        title: 'Dodaj wydarzenie dla użytkownika',
        text: 'Treść',
        dateAndTime: 'Data i czas rozpoczęcia',
        duration: 'Czas trwania',
        durationValues: {
          hour: '1 godzina',
          twoHours: '2 godziny',
          threeHours: '3 godziny',
        },
        button: 'Dodaj wydarzenie',
        eventAdded: 'Dodano wydarzenie do kalendarza.',
        eventAddingError: 'Nie udało się dodać wydarzenia do kalendarza.',
      },
      errors: {
        loadingUserDataError: 'Nie udało się załadować danych użytkownika.',
        updateUserDataError: 'Nie udało się zaktualizować danych użytkownika.',
        updateUserDetailsError:
          'Nie udało się zaktualizować detali użytkownika.',
        uploadImageError: 'Nie udało się dodać zdjęcia dla użytkownika.',
        updatePasswordError: 'Nie udało się zaktualizować hasła użytkownika.',
      },
      genders: {
        man: 'Mężczyzna',
        woman: 'Kobieta',
        not_binary: 'Nie binarny',
      },
    },
    mySwimmersPage: {
      title: 'Moi zawodnicy',
      name: 'Imie',
      surname: 'Nazwisko',
      email: 'Email',
      confirmRemoveMessage: `Czy na pewno chcesz usunąć użytkownika o emailu: {value}, ze swojej listy zawodników?`,
      removeMessageError: `Nie udało się usunąć użytkownika {value} z twojej listy zawodników.`,
      addWorkoutSessionError: `Nie udało się utworzyć sesji treningowej dla {value}.`,
      addedWorkoutSession: `Udało się utworzyć sesję treningową dla {value}.`,
      remove: 'Usuń',
      view: 'Podgląd',
      addWorkout: 'Dodaj trening',
      viewWorkoutSessions: 'Sesje treningowe',
    },
    myCoachesPage: {
      title: 'Moi trenerzy',
    },
    addWorkoutPage: {
      session: 'Sesja',
      sessionId: 'Sesja #{value}',
      addNote: 'Dodaj notatkę',
      addWorkout: 'Dodaj trening',
      deleteSession: 'Usuń sesję',
      workoutsTab: 'Treningi',
      notesTab: 'Notatki',
      sessionRemoved: `Usunięto sesję`,
      sessionRemoveError: `Wystąpił nieznany problem podczas usuwania sesji.`,
      notes: {
        label: 'Nowa notatka (max 500 znaków)',
        placeholder: 'Zacznij pisać tutaj...',
        emptyNote:
          'Nie możesz dodać pustej notatki. Uzupełnij wpierw jej treść.',
        noteAdded: 'Notatka dodana poprawnie.',
        noteAddingError:
          'Wystąpił błąd poczas dodawania notatki. Skontaktuj się z deweloperem.',
        emptyArray: 'Nie ma żadnych notatek w tej sesji',
        noteCanceled: 'Dodawanie notatki anulowane.',
        noteRemoved: 'Notatka usunięta.',
        noteRemovingError: 'Nieznany błąd podczas usuwania notatki.',
      },
      workouts: {
        title: 'Dodaj trening',
        time: 'Czas: ',
        distance: 'Dystans: ',
        style: 'Styl: ',
        type: 'Typ treningu: ',
        emptyArray: 'Nie ma żadnych treningów w tej sesji',
        workoutAdded: 'Trening dodany poprawnie.',
        workoutAddingError:
          'Wystąpił błąd poczas dodawania treningu. Skontaktuj się z deweloperem.',
        workoutRemoved: 'Trening usunięty.',
        workoutRemovingError:
          'Wystąpił nieznany błąd podczas usuwania treningu.',
        swimmingStyle: 'Styl pływacki:',
        poolLength: 'Długość basenu:',
        workoutType: 'Typ treningu:',
        averageSpeed: 'Średnia prędkość: {value} km/h',
        averagePace: 'Średnie tempo: {value} /100m',
      },
      swimmingStyles: {
        backstroke: 'Grzbietowy',
        breaststroke: 'Żabka',
        butterfly: 'Motylkowy',
        front_crawl: 'Kraul',
      },
      workoutTypes: {
        sprint: 'Sprint',
        warm_up: 'Rozgrzewka',
        condition: 'Kondycja',
      },
    },
    allSwimmersPage: {
      title: 'Zawodnicy',
      loadingError:
        'Wystąpił nieznany błąd podczas ładowania listy zawodników.',
      addToMyList: "Dodaj do 'Moi zawodnicy'",
      addedToMyList: "Dodano do 'Moi zawodnicy'",
      addToMyListError:
        'Nie udało się dodać zawodnika o emailu {value} do listy twoich zawodników.',
    },
    myWorkoutSessionsPage: {
      title: 'Moje sesje treningowe',
      view: 'Zobacz szczegóły',
      loadingError:
        'Wystąpił nieoczekiwany błąd podczas wczytywania sesji treningowych.',
      sessionPage: {
        workoutsLoadingError:
          'Wystąpił nieoczekiwany błąd podczas wczytywania treningow.',
        notesLoadingError:
          'Wystąpił nieoczekiwany błąd podczas wczytywania notatek.',
      },
      noSessions: 'Nie ma żadnej sesji treningowej dla tego użytkownika.',
    },
    mySwimmerWorkoutSessionsPage: {
      title: 'Sesje treningowe zawodnika',
      view: 'Zobacz szczegóły',
      loadingError:
        'Wystąpił nieoczekiwany błąd podczas wczytywania sesji treningowych.',
      sessionPage: {
        workoutsLoadingError:
          'Wystąpił nieoczekiwany błąd podczas wczytywania treningow.',
        notesLoadingError:
          'Wystąpił nieoczekiwany błąd podczas wczytywania notatek.',
      },
      noSessions: 'Nie ma żadnej sesji treningowej dla tego użytkownika.',
    },
    homePage: {
      mainTitle: 'Śledź swoje wyniki, walcz z najlepszymi',
      joinTitle: 'Dołącz do SwimUp Club już dzisiaj!',
    },
    calendarPage: {
      title: 'Moje wydarzenia',
      loadingError: 'Wystąpił błąd podczas ładowania twoich wydarzeń.',
      createSession:
        'Czy jesteś pewien że chcesz założyć sesje treningową dla {value}?',
    },
    mainMenu: {
      cards: {
        addWorkout: 'Dodaj trening',
        workouts: 'Treningi',
        swimmers: 'Zawodnicy',
        mySwimmers: 'Moi zawodncy',
        coaches: 'Trenerzy',
        dictionary: 'Słowniczek pojęć',
        calendar: 'Kalendarz',
        timer: 'Stoper',
        newsletter: 'Newsletter',
        createAccount: 'Utwórz nowe konto',
      },
    },
    footer: {
      contact: 'Kontakt',
      socialMedia: 'Social media',
    },
    timer: {
      timer: 'Stoper',
      start: 'Start',
      pause: 'Pauza',
      resume: 'Wznów',
      split: 'Międzyczas',
      reset: 'Resetuj',
      stop: 'Stop',
      copy: 'Kopiuj',
      copiedMessage: 'Międzyczas skopiowany',
      meantimes: 'Międzyczasy:',
    },
    usersList: {
      usersListTitle: 'Lista zawodników',
      coachesListTitle: 'Lista trenerów',
      name: 'Imie',
      surname: 'Nazwisko',
      email: 'Email',
      remove: 'Usuń',
      edit: 'Edytuj',
      delete: 'Usuń',
      rowsPerPage: 'Wierszy na stronę:',
      confirmMessage: `Czy na pewno chcesz usunąć użytkownika o emailu: {value}?`,
    },
    dictionary: {
      styles: {
        frontCrawl: 'Kraul',
        backstroke: 'Grzbietowy',
        breaststroke: 'Klasyczny (żabka)',
        butterfly: 'Motylkowy',
      },
      descriptions: {
        frontCrawl:
          'Kraul jest prawdopodobnie pierwszym ruchem pływania, o którym myślisz, gdy wyobrażasz sobie pływanie. Jest powszechnie nazywany stylem dowolnym, ponieważ większość pływaków decyduje się na użycie tego stylu w zawodach freestyle, ponieważ jest najszybszy. Aby wykonać kraul przedni, kładziesz się na brzuchu z ciałem równoległym do wody. Poruszaj się naprzód, wykonując naprzemienne ruchy ramion w rodzaju ruchu wiatraka, który zaczyna się od pchania pod wodą i powraca do zdrowia nad wodą. Twoje nogi powinny napędzać cię kopnięciem trzepotającym, które wykonuje się za pomocą spiczastych stóp, gdy nogi poruszają się naprzemiennie w górę i w dół. Nie zginaj nóg w kolanie. Ustaw czas oddechu, aby dopasować się do ruchów pływackich, obracając głowę w bok, gdy ramię znajduje się w pozycji odpoczynku (nad wodą). Nie odwracaj głowy zbyt daleko i kieruj się do góry, bo w rzeczywistości zatoniesz w wodzie, zamiast pozostawać nad nią. ',
        backstroke:
          'Styl grzbietowy wymaga podobnych ruchów jak kraul, ale jak sama nazwa wskazuje, wykonuje się go na plecach. Lekarze często zalecają ten udar osobom z problemami z plecami, ponieważ zapewnia doskonały trening pleców. Aby wykonać styl grzbietowy, unosząc się na plecach, zmieniaj ramiona ruchem przypominającym wiatrak, aby odepchnąć się do tyłu. Podobnie jak kraul, twoje ramiona powinny rozpocząć ruch okrężny, pchając pod wodą i wynurzając się nad wodą. Twoje nogi powinny wykonać trzepotanie. Twoja twarz powinna znajdować się nad powierzchnią, gdy patrzysz prosto w górę. Trzymaj ciało tak prosto, jak to możliwe, z lekkim spadkiem dolnej części ciała, aby utrzymać nogi pod wodą. Nie pozwól, aby twoje biodra opadły zbyt nisko lub twoje ciało zbytnio się zginało, bo to cię spowolni. Trzymaj nogi blisko siebie i używaj ruchu bioder, aby uzyskać mocniejszy kopniak. Twoja twarz pozostanie poza wodą, ale nadal będziesz chciał być świadomy swojego rytmu oddychania. Ponownie dopasuj oddechy do uderzeń. ',
        breaststroke:
          'Żabka jest najwolniejszym stylem pływania w zawodach i jest to ruch najczęściej wyuczony. Często uczy się go początkujących pływaków, ponieważ nie wymaga wkładania głowy pod wodę. Jednak w pływaniu wyczynowym pływacy zanurzają głowę i oddychają w wyznaczonych punktach ruchu. Ten skok jest wykonywany z brzuchem skierowanym w dół. Twoje ramiona poruszają się jednocześnie pod powierzchnią wody w półkolistym ruchu przed twoim ciałem. Twoje nogi wykonują jednocześnie kopnięcie z bata. Rzut z bata jest wykonywany przez przyciągnięcie nóg prosto z tyłu do ciała poprzez zgięcie zarówno w kolanach, jak i w biodrach. Twoje nogi następnie przesuwają się na zewnątrz i na bok, a następnie rozciągają się i wracają do siebie. Ta technika pływania jest często porównywana do ruchu żaby. Synchronizuj każdy ruch ramion, aby dopasować ruchy nóg do bardziej efektywnego napędu, opierając ramiona podczas kopania nóg i prostując nogi, podczas gdy ramiona pchają cię do przodu. W ten sposób zawsze coś działa, aby kontynuować ruch do przodu. ',
        butterfly:
          'Motyl to zaawansowany ruch pływacki, który zapewnia doskonały trening. Nauka może być trudniejsza i męcząca, ale daje też dużo frajdy. Jest to drugie najszybsze uderzenie w zawodach i ulubione uderzenie legendy olimpijskiej Michaela Phelpsa. Aby wykonać ruch motylkowy, zacznij poziomo, z brzuchem skierowanym do dna basenu. Przenieś ręce jednocześnie nad głowę i wepchnij je do wody, aby popchnąć cię do przodu i ponownie wyciągnij je z wody, aby powtórzyć. Wsuwając ręce do wody, wypychasz głowę i ramiona nad powierzchnię wody. Twoje nogi wykonają kopnięcie delfina, co wymaga trzymania nóg razem i prosto podczas kopania, podobnie jak porusza się dolna część ciała i ogon delfina. Poruszaj ciałem płynnym ruchem przypominającym falę. Najlepszym momentem na wdech będzie moment, w którym ramiona dopiero zaczynają wynurzać się z wody, tuż przed kolejnym pchnięciem do przodu. Podczas tego ruchu unieś głowę prosto przed siebie i nie odwracaj głowy w bok. ',
      },
    },
  },
};
