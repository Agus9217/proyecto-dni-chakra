import '@fontsource-variable/rubik';
import '@fontsource/m-plus-1p/100.css';
import '@fontsource/m-plus-1p/300.css';
import '@fontsource/m-plus-1p/400.css';
import '@fontsource/m-plus-1p/500.css';
import '@fontsource/m-plus-1p/700.css';
import '@fontsource/m-plus-1p/800.css';
import '@fontsource/m-plus-1p/900.css';
import { extendTheme } from "@chakra-ui/theme-utils";


const theme = extendTheme({
  fonts: {
    heading: `'M PLUS 1p', sans-serif`,
    body: `'Rubik Variable', sans-serif`
  }
})

export default theme