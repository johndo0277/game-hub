import { extendTheme, ThemeConfig } from "@chakra-ui/react";
//create a object 
const config: ThemeConfig = {
    initialColorMode: 'dark'
};

const theme = extendTheme({ config });
export default theme;