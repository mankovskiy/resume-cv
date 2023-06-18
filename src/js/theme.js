export const theme = {
  lightTheme: {
    sectionTitle: 'var(--accent-color)',
    bcgColor: 'var(--white-main-color)',
    titleColor: 'var(--accent-color)',
    textColor: 'var(--dark-main-color)',
  },
  darkTheme: {
    sectionTitle: 'var(--white-color)',
    bcgColor: 'var(--dark-theme-bg-color)',
    titleColor: 'var(--white-color)',
    textColor: 'var(--white-color)',
  },
  colors: {
    darkMainColor: '#171718',
    whiteMainColor: '#e5e5e5',
    accentColor: '#5c62ec',
    whiteColor: '#ffffff',
    darkThemeBgColor: '#212121',
    darkThemeTitle: '#ffffff',
  },

  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '32px',
    xl: '64px',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  borders: {
    none: 'none',
    normal: '1px solid',
  },
  radii: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '16px',
    round: '50%',
  },
};
