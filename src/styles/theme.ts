import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors:{
        blue: {
            "50":"#EBF5FF",
            "100":"#DCEEFF",
            "200":"#4197E5",
            "300":"#3086D3"
        }
    },
    fonts:{
        heading: 'Open Sans',
        body: 'Open Sans',
    },
    styles: {
        global: {
            body:{
                bg: 'blue.50',
                color:'white'
            }
        }
    }
})