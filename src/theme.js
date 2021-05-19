
export default {
    fonts: {
      body: 'system-ui, sans-serif',
      heading: '"Avenir Next", sans-serif',
      monospace: 'Menlo, monospace',
    },
    colors: {
      text: 'darkslategray',
      background: 'floralwhite',
      primary: '#33e',
      bg: 'dodgerblue'
    },
    styles: {
        h1: {
          fontSize: 32,
          fontFamily: 'heading',
          fontWeight: 'heading',
          color: 'primary',
          mt: 4,
          mb: 2,
        },
      },
      buttons: {
        primary: {
          color: 'background',
          bg: 'primary',
          '&:hover': {
            bg: 'text',
          }
        },
        secondary: {
          color: 'background',
          bg: 'secondary',
        },
      },

    
  }
 