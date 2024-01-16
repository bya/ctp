'use client';
import * as React from 'react';
import { CssVarsProvider , useColorScheme} from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import IconButton from '@mui/joy/IconButton';

// Icons import
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import theme from './theme';
import GlobalStyles from '@mui/joy/GlobalStyles';


function ColorSchemeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <IconButton
      id="toggle-mode"
      size="lg"
      variant="soft"
      color="neutral"
      onClick={() => {
        if (mode === 'light') {
          setMode('dark');
        } else {
          setMode('light');
        }
      }}
      sx={{
        position: 'fixed',
        zIndex: 999,
        bottom: '1rem',
        right: '1rem',
        borderRadius: '50%',
        boxShadow: 'sm',
      }}
    >
      {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
}


export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'joy' }} >
      <CssVarsProvider defaultMode="dark" theme={theme} >
        <ColorSchemeToggle />
        <CssBaseline/>
        <GlobalStyles 
          styles={{
            ':root': {
              '--Collapsed-breakpoint': '769px', // form will stretch when viewport is below `769px`
              '--Cover-width': '50vw', // must be `vw` only
              '--Form-maxWidth': '800px',
              '--Transition-duration': '0.4s', // set to `none` to disable transition
            },
          }}
      />
        {children}
      </CssVarsProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
