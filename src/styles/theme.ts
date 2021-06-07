import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors:{
        blue: {
            
            "10":"#A7D1F6",
            "50":"#EBF5FF",
            "100":"#DCEEFF",
            "200":"#4197E5",
            "300":"#3086D3"
        },
        gray: {
            "50":"#ADADAD",
            "100":"#B6B6B6",
            "200":"#656565",
            "300":"#707070",
            "400":"#414141"
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
                color:'white',
                overflow: 'hidden'
            }
        }
    }
})