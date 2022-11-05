const BASE_PALETTE = {
  white: '#ffffff',
  black: '#000000',
  neutral: {
    150: '#eaeaea',
    200: '#e5e5e5',
    300: '#dcdcdc',
    350: '#bababa',
    400: '#a7a7a7',
    500: '#888888',
    560: '#656565',
    570: '#585858',
    580: '#565656',
    590: '#555555',
    600: '#525252',
    620: '#494949',
    650: '#414141',
    660: '#3e3e3e',
    680: '#393939',
    700: '#373737',
    710: '#363636',
    720: '#333333',
    740: '#313131',
    760: '#2f2f2f',
    770: '#2e2e2e',
    780: '#292929',
    800: '#272727',
    820: '#242424',
    830: '#222222',
    840: '#202020',
    860: '#1f1f1f',
    880: '#1e1e1e',
    900: '#1b1b1b',
    920: '#171717',
    940: '#111111',
  },
  blueGray: {
    200: '#a8b2b9',
    400: '#7f99b1',
    600: '#476288',
  },
  red: {
    200: '#dcb1ac',
    400: '#eb877a',
    550: '#ff453a',
    600: '#ff3b30',
  },
  orange: {
    550: '#ec7121',
  },
  yellow: {
    300: '#f5dda4',
    550: '#ffd60a',
    600: '#ffcc00',
  },
  green: {
    400: '#63f279',
    550: '#32d74b',
    600: '#28cd41',
  },
  teal: {
    400: '#00b3aa',
    600: '#007a75',
  },
  cyan: {
    400: '#6ac1dc',
    600: '#24b0db',
  },
  blue: {
    300: '#77bdee',
    400: '#59a5de',
    500: '#3093df',
    600: '#2084cf',
    a700: '#053fc5',
  },
  indigo: {
    400: '#7790e4',
    600: '#3b66f1',
  },
  purple: {
    400: '#a89bed',
    600: '#7c68ee',
    a600: '#5e5ce6',
  },
  pink: {
    400: '#cf88dd',
    600: '#c053d5',
  },
  mac: {
    red: {
      550: '#ff453a',
      600: '#ff3b30',
      a700: '#f84545', // rgb(248, 69, 69)
    },
    orange: {
      550: '#ff9f0a',
      600: '#ff9500',
    },
    yellow: {
      550: '#ffd60a',
      600: '#ffcc00',
      a700: '#fbb124', // rgb(251, 177, 36)
    },
    green: {
      550: '#32d74b',
      600: '#28cd41',
      a700: '#28c031', // rgb(40, 192, 49)
    },
    mint: {
      550: '#66d4cf',
      600: '#00c7be',
    },
    teal: {
      550: '#6ac4dc',
      600: '#59adc4',
    },
    cyan: {
      550: '#5ac8f5',
      600: '#55bef0',
    },
    blue: {
      500: '#2997ff',
      550: '#0a84ff',
      600: '#007aff',
      700: '#0c6aff',
      a700: '#053fc5', // rgb(6, 63, 196)
    },
    indigo: {
      550: '#5e5ce6',
      600: '#5856d6',
    },
    purple: {
      550: '#bf5af2',
      600: '#af52de',
    },
    pink: {
      550: '#ff375f',
      600: '#ff2d55',
    },
    brown: {
      550: '#ac8e68',
      600: '#a2845e',
    },
    blueGray: {
      300: '#a8c2ed',
      500: '#436e97', // rgb(67, 110, 151)
      600: '#476288',
      800: '#203c68',
    },
    xcode: {
      keywords: '#ff7ab2',
      interfaces: '#dabaff',
      classes: '#b281eb',
      comments: '#7f8c98',
      numbers: '#d9c97c',
      strings: '#ff8170',
      functions: '#78c2b3',
      tags: '#ffa14f',
      attributes: '#cc9768',
      links: '#6699ff',
    },
    semantic: {
      titleActive: '#292929',
      titleInactive: '#1e1e1e',
      editorActive: '#171717', // Inactive tab
      editorInactive: '#111111',
      altStripe: '#1f1f1f',
      sidebarActive: '#1b1b1b',
      sidebarInactive: '#1e1e1e',
      sideSelectedActive: '#242424',
      sideSelectedInactive: '#333333',
      text1Active: '#e5e5e5',
      text1Inactive: '#565656',
      icon1Active: '#a7a7a7',
      icon1Inactive: '#555555',
      text2Active: '#888888',
      icon2Active: '#656565', // Table col sep
      text3Active: '#525252',
      text1SelActive: '#fff',
      text1SelInactive: '#dcdcdc',
      text2SelActive: '#a8c2ed',
      text2SelInactive: '#8c8c8c',
      border1Active: '#000', // Panel sep
      border2Active: '#313131', // Table head sep
      border3Active: '#373737', // Tab sep
      border4Active: '#272727', // Table col sep
      scrollbarActive: '#585858',
      scrollbarBGActive: '#202020',
      scrollbarBorderActive: '#2f2f2f',
      bgSelActive: '#063fc4',
      colorIconInactive: '#203c68',
      bgSelInactive: '#363636',
      redActive: '#f84545',
      yellowActive: '#fbb124',
      greenActive: '#28c031',
    },
  },
}

const PALETTE = {
  ...BASE_PALETTE,
}

export type Palette = typeof PALETTE

export default PALETTE
