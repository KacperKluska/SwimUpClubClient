import LOCALES from '../utils/locales';

export default {
  [LOCALES.ENGLISH]: {
    appName: 'SwimUp Club',
    hello: 'Hello',
    language: 'Language',
    pageInProgress: 'Page {page} is in progress',
    common: {
      loading: 'Loading...',
      delete: 'Delete',
      remove: 'Remove',
      cancel: 'Cancel',
      add: 'Add',
      date: 'Date',
      swimmer: 'Swimmer',
      coach: 'Coach',
    },
    appBar: {
      appName: 'SwimUp Club',
      language: 'Language',
      signIn: 'Sign in',
      profile: 'Profile',
      logout: 'Logout',
    },
    loginPage: {
      title: 'Sign in',
      email: 'Email',
      emailPrompt: 'Enter your email address',
      password: 'Password',
      passwordPrompt: 'Enter your password',
      signIn: 'Sign in',
      wrongData:
        'You passed wrong email and/or password, try again or contact administrator',
      emptyData: `You have to fill both fields`,
    },
    registerPage: {
      title: 'Sign up',
      name: 'Name',
      namePrompt: 'Enter user name',
      surname: 'Surname',
      surnamePrompt: 'Enter user surname',
      email: 'Email',
      emailPrompt: 'Enter your email address',
      password: 'Password',
      passwordPrompt: 'Enter password for user',
      passwordRepeated: 'Password',
      passwordRepeatedPrompt: 'Repeat password',
      phoneNumber: 'Phone number',
      phoneNumberPrompt: 'Enter your phone number',
      signUp: 'Sign up',
      wrongEmail: 'You passed incorrect email address',
      emptyData: `You have to fill all fields`,
      notIdenticalPasswords: `You passed not identical passwords`,
      passwordInvalid: `The password must contain at least 1 lowercase, 1 uppercase, 1 numeric and 1 special character (!@#$%^&*) and must be 8 characters or longer.`,
      phoneNumberInvalid: `You passed invalid phone number. Phone number should be 9 digits long.`,
    },
    settingsPage: {
      profile: 'Profile',
      profileDetails: 'Profile Details',
      edit: 'Edit data',
      save: 'Save changes',
      email: 'Email',
      name: 'Name',
      surname: 'Surname',
      age: 'Age',
      weight: 'Weight',
      height: 'Height',
      phoneNumber: 'Phone number',
      gender: 'Gender',
      uploadImage: 'Upload image',
      password: 'Password',
      passwordPlaceholder: 'Enter new password',
      passwordRepeated: 'Repeated password',
      passwordRepeatedPlaceholder: 'Repeat new password',
      changePassword: 'Change password',
      addEvent: {
        title: 'Add event for a swimmer',
        text: 'Text',
        dateAndTime: 'Start date and time',
        duration: 'Duration time',
        durationValues: {
          hour: '1 hour',
          twoHours: '2 hours',
          threeHours: '3 hours',
        },
        button: 'Add event',
        eventAdded: 'Added event to calendar.',
        eventAddingError:
          'There was an error when trying to add event to calendar.',
      },
      errors: {
        loadingUserDataError: 'There was an error when trying to user data.',
        updateUserDataError:
          'There was an error when trying to update user data.',
        updateUserDetailsError:
          'There was an error when trying to update user details.',
        uploadImageError:
          'There was an error when trying to upload user image.',
        updatePasswordError:
          'There was an error when trying to update user password.',
      },
      genders: {
        man: 'Man',
        woman: 'Woman',
        not_binary: 'Not binary',
      },
    },
    mySwimmersPage: {
      title: 'My swimmers',
      name: 'Name',
      surname: 'Surname',
      email: 'Email',
      confirmRemoveMessage: `Are you sure you want to delete user with email: {value} from your swimmers list?`,
      removeMessageError: `Couldn't remove user {value} from yours swimmers list.`,
      addWorkoutSessionError: `Couldn't create workout session for {value}.`,
      addedWorkoutSession: `Successfully created workout session for {value}.`,
      remove: 'Delete',
      view: 'View',
      addWorkout: 'Add workout',
      viewWorkoutSessions: 'Workout sessions',
    },
    myCoachesPage: {
      title: 'My coaches',
    },
    addWorkoutPage: {
      session: 'Session',
      sessionId: 'Session #{value}',
      addNote: 'Add note',
      addWorkout: 'Add workout',
      deleteSession: 'Delete Session',
      workoutsTab: 'Workouts',
      notesTab: 'Notes',
      sessionRemoved: `Session deleted`,
      sessionRemoveError: `There was an error when trying to delete session.`,
      notes: {
        label: 'New note (max 500 characters)',
        placeholder: 'Start typing here...',
        emptyNote: 'You cannot add empty note. Enter some text first.',
        noteAdded: 'Note added successfully.',
        noteAddingError:
          'There was an error when adding note. Contact the developer.',
        emptyArray: 'There is no notes in this session.',
        noteCanceled: 'Adding note canceled.',
        noteRemoved: 'Note removed.',
        noteRemovingError: 'There was an error when trying to delete note.',
      },
      workouts: {
        title: 'Add Workout',
        time: 'Time: ',
        distance: 'Distance: ',
        style: 'Style: ',
        type: 'Workout type: ',
        emptyArray: 'There is no workouts in this session.',
        workoutAdded: 'Workout added successfully.',
        workoutAddingError:
          'There was an error when adding workout. Contact the developer.',
        workoutRemoved: 'Workout removed.',
        workoutRemovingError:
          'There was an error when trying to delete workout.',
        swimmingStyle: 'Swimming style:',
        poolLength: 'Pool length:',
        workoutType: 'Workout type:',
        averageSpeed: 'Average speed: {value} km/h',
        averagePace: 'Average pace: {value} min/100m',
      },
      swimmingStyles: {
        backstroke: 'Backstroke',
        breaststroke: 'Breaststroke',
        butterfly: 'Butterfly',
        front_crawl: 'Front crawl',
      },
      workoutTypes: {
        sprint: 'Sprint',
        warm_up: 'Warm-up',
        condition: 'Condition',
      },
    },
    allSwimmersPage: {
      title: 'Swimmers',
      loadingError: 'An unexpected error has occurred during loading data.',
      addToMyList: "Add to 'My swimmers'",
      addedToMyList: "Added to 'My swimmers'",
      addToMyListError:
        "Couldn't add user with email {value} to your swimmers list.",
    },
    myWorkoutSessionsPage: {
      title: 'My Workout Sessions',
      view: 'View details',
      loadingError:
        'An unexpected error has occurred while fetching workout sessions data.',
      sessionPage: {
        workoutsLoadingError:
          'An unexpected error has occurred while fetching workouts data.',
        notesLoadingError:
          'An unexpected error has occurred while fetching notes data.',
      },
      noSessions: 'There is no sessions for this user.',
    },
    mySwimmerWorkoutSessionsPage: {
      title: 'Swimmer workout sessions',
      view: 'View details',
      loadingError:
        'An unexpected error has occurred while fetching workout sessions data.',
      sessionPage: {
        workoutsLoadingError:
          'An unexpected error has occurred while fetching workouts data.',
        notesLoadingError:
          'An unexpected error has occurred while fetching notes data.',
      },
      noSessions: 'There is no sessions for this user.',
    },
    homePage: {
      mainTitle: 'Track your score, beat the best',
      joinTitle: 'Join to SwimUp Club today!',
    },
    calendarPage: {
      title: 'My events',
      loadingError: 'There was an error while loading your events.',
      createSession:
        'Are you sure you want to create workout session for {value}?',
    },
    mainMenu: {
      cards: {
        addWorkout: 'Add workout',
        workouts: 'Workouts',
        swimmers: 'Swimmers',
        mySwimmers: 'My swimmers',
        coaches: 'Coaches',
        dictionary: 'Dictionary',
        calendar: 'Calendar',
        timer: 'Timer',
        newsletter: 'Newsletter',
        createAccount: 'Create new Account',
      },
    },
    footer: {
      contact: 'Contact',
      socialMedia: 'Social media',
    },
    timer: {
      timer: 'Timer',
      start: 'Start',
      pause: 'Pause',
      resume: 'Resume',
      split: 'Split',
      reset: 'Reset',
      stop: 'Stop',
      copy: 'Copy',
      copiedMessage: 'Meantime copied!',
      meantimes: 'Meantimes:',
    },
    usersList: {
      usersListTitle: 'Swimmers list',
      coachesListTitle: 'Coaches list',
      name: 'Name',
      surname: 'Surname',
      email: 'Email',
      remove: 'Delete',
      edit: 'Edit',
      delete: 'Delete',
      rowsPerPage: 'Rows Per Page:',
      confirmMessage: `Are you sure you want to delete user with email: {value}?`,
    },
    dictionary: {
      styles: {
        frontCrawl: 'Front Crawl',
        backstroke: 'Backstroke',
        breaststroke: 'Breaststroke',
        butterfly: 'Butterfly',
      },
      descriptions: {
        frontCrawl:
          'The front crawl is likely the first swimming stroke you think of when you picture swimming. It is commonly called the freestyle stroke as most swimmers choose to use this stroke in freestyle events as it is the fastest. To execute the front crawl, you lie on your stomach with your body parallel to the water. Propel yourself forward with alternating arm movements in a sort of windmill motion that starts by pushing underwater and recovers above water. Your legs should propel you with a flutter kick, which is performed with pointed feet as your legs move up and down in alternation. Do not bend your legs at the knee. Time your breathing to match your swimming strokes by turning your head to the side while your arm is in the recovery (above water) position. Do not turn your head too far and face upward or you will actually sink into the water rather than remain above it.',
        backstroke:
          'The backstroke requires similar movements to the front crawl, but it is done, as the name suggests, on your back. Doctors often recommend this stroke to individuals with back problems as it provides a great back workout. To perform the backstroke, while floating on your back, alternate your arms with a windmill-like motion to propel yourself backwards. Like the front crawl, your arms should start the circular motion by pushing underwater and recovering above water. Your legs should engage in a flutter kick. Your face should be above the surface as you look straight up. Keep your body as straight as possible, with a slight decline in the lower body to keep your legs underwater. Don’t allow your hips to get too low or your body to bend too much or it will slow you down. Keep your legs close together and use the motion from your hips to get a more powerful kick. Your face will remain out of the water, but you will still want to be cognizant of your breathing rhythm. Again, match your breaths to your strokes.',
        breaststroke:
          'The breaststroke is the slowest competitive swimming stroke, and it is the most commonly learned stroke. It’s often taught to beginner swimmers because it does not require putting your head underwater. However, in competitive swimming, swimmers do submerge their head and breathe at designated points in the stroke. This stroke is performed with your stomach facing down. Your arms move simultaneously beneath the surface of the water in a half circular movement in front of your body. Your legs perform the whip kick at the same time. The whip kick is executed by bringing your legs from straight behind you close to your body by bending both at your knees and at your hips. Your legs then move outward and off to the side before extending and coming back together. This swimming technique is often compared to a frog’s movement. Time each arm stroke to match your leg movements for more effective propulsion by resting the arms while the legs kick, and straightening the legs while the arms push you forward. This way, there is always something working to continue forward movement.',
        butterfly:
          'The butterfly is an advanced swimming stroke that provides an excellent workout. It can be more difficult and tiring to learn, but it is also a lot of fun. It is the second fastest competitive stroke, and the favorite stroke of Olympic legend Michael Phelps. To perform the butterfly stroke, start horizontal with your stomach facing the bottom of the pool. Bring your arms simultaneously over your head and push them into the water to propel you forward and bring them up out of the water again to repeat. As you move your arms into the water, you will push your head and shoulders above the surface of the water. Your legs will perform a dolphin kick, which requires your legs to stay together and straight as you kick them similarly to how a dolphin’s lower body and tail moves. Move your body in a fluid wave-like motion. The best time to take a breath will be when your arms are just starting to come out of the water, just before you begin the next forward thrust. Lift your head straight in front of you during this move and do not turn your head to the side.',
      },
    },
  },
};
