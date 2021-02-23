import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocunent extends Document {
    render(){
        return(
            <Html>
                <Head>
                    <link rel="sortcut icon" href="favicon.png" type="image/png" />

<link rel="sortcut icon" href="nome_do_arquivo.gif" type="image/gif" />
                
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />    
                </Head>
            
                <body>
                    <Main />
                    <NextScript />                  
                </body>
            </Html>

                );
            }
}