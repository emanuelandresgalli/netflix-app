export interface Esquema {
    section: string;
    peliculas: peliculasInterface[]
}

export interface peliculasInterface {
    num: any;
    title: string;
    src: string;
    alt: string;
}

// export interface EsquemaTop {
//     section: string;
//     peliculasTop: peliculasInterfacee[]
// }

// export interface peliculasInterfacee {
//     num: number;
//     title: string;
//     src: string;
//     alt: string;
// }