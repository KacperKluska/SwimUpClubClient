import LOCALES from '../utils/locales';

export default {
  [LOCALES.ENGLISH]: {
    appName: 'SwimUp Club',
    hello: 'Hello',
    language: 'Language',
    pageInProgress: 'Page {page} is in progress',
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
      email: 'Email',
      name: 'Name',
      surname: 'Surname',
      age: 'Age',
      weight: 'Weight',
      height: 'Height',
      phoneNumber: 'Phone number',
      gender: 'Gender',
    },
    homePage: {
      mainTitle: 'Track your score, beat the best',
      joinTitle: 'Join to SwimUp Club today!',
    },
    mainMenu: {
      cards: {
        addWorkout: 'Add workout',
        workouts: 'Workouts',
        swimmers: 'Swimmers',
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
          'The backstroke requires similar movements to the front crawl, but it is done, as the name suggests, on your back. Doctors often recommend this stroke to individuals with back problems as it provides a great back workout. To perform the backstroke, while floating on your back, alternate your arms with a windmill-like motion to propel yourself backwards. Like the front crawl, your arms should start the circular motion by pushing underwater and recovering above water. Your legs should engage in a flutter kick. Your face should be above the surface as you look straight up. Keep your body as straight as possible, with a slight decline in the lower body to keep your legs underwater. Don???t allow your hips to get too low or your body to bend too much or it will slow you down. Keep your legs close together and use the motion from your hips to get a more powerful kick. Your face will remain out of the water, but you will still want to be cognizant of your breathing rhythm. Again, match your breaths to your strokes.',
        breaststroke:
          'The breaststroke is the slowest competitive swimming stroke, and it is the most commonly learned stroke. It???s often taught to beginner swimmers because it does not require putting your head underwater. However, in competitive swimming, swimmers do submerge their head and breathe at designated points in the stroke. This stroke is performed with your stomach facing down. Your arms move simultaneously beneath the surface of the water in a half circular movement in front of your body. Your legs perform the whip kick at the same time. The whip kick is executed by bringing your legs from straight behind you close to your body by bending both at your knees and at your hips. Your legs then move outward and off to the side before extending and coming back together. This swimming technique is often compared to a frog???s movement. Time each arm stroke to match your leg movements for more effective propulsion by resting the arms while the legs kick, and straightening the legs while the arms push you forward. This way, there is always something working to continue forward movement.',
        butterfly:
          'The butterfly is an advanced swimming stroke that provides an excellent workout. It can be more difficult and tiring to learn, but it is also a lot of fun. It is the second fastest competitive stroke, and the favorite stroke of Olympic legend Michael Phelps. To perform the butterfly stroke, start horizontal with your stomach facing the bottom of the pool. Bring your arms simultaneously over your head and push them into the water to propel you forward and bring them up out of the water again to repeat. As you move your arms into the water, you will push your head and shoulders above the surface of the water. Your legs will perform a dolphin kick, which requires your legs to stay together and straight as you kick them similarly to how a dolphin???s lower body and tail moves. Move your body in a fluid wave-like motion. The best time to take a breath will be when your arms are just starting to come out of the water, just before you begin the next forward thrust. Lift your head straight in front of you during this move and do not turn your head to the side.',
      },
    },
  },
};
