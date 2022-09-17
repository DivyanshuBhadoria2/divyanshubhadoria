// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'
import '@fontsource/raleway/300.css'
import '@fontsource/raleway/400.css'
import '@fontsource/raleway/700.css'
import { Button } from './button';

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
    },
  },
  fonts: {
    body: "Open Sans, sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        bg: "gray.500",
      },
    }),
  },
  components: {
    Button,
    // Input, // not working for some reason - come back to this
  },
});