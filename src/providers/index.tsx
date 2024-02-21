'use client';

import { createEmotionCache, theme } from '@/theme';
import { CacheProvider } from '@emotion/react';
import { ScopedCssBaseline } from '@mui/material';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import React from 'react';

const clientSideEmotionCache = createEmotionCache();

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <ScopedCssBaseline />
          {children}
        </ThemeProvider>
      </StyledEngineProvider>
    </CacheProvider>
  );
};

export default Providers;
