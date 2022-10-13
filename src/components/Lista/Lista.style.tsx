import { styled } from "@mui/material";


export const ListaStyled = styled('ul')`
    width: 100%;
    max-width: 750px;
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing(10, 2, 10, 2)};
    display: grid;
    grid-template-columns: 1fr 1fr; // 2 colunas
    gap: ${({ theme }) => theme.spacing(9)}; // espaçamento entre as colunas

    ${({ theme }) => theme.breakpoints.down('md')} { // quando a tela for menor que md, utiliza esse breakpoint
        grid-template-columns: 1fr; // 1 coluna
        gap: ${({ theme }) => theme.spacing(8)}; // espaçamento entre as colunas
    }
`;

export const ListaVazia = styled('h2')`
    text-align: center;
    padding: ${({ theme }) => theme.spacing(20, 0)};
`;

export const ItemLista = styled('li')`
    list-style: none;

`;

export const Foto = styled('img')`
    width: 100%;
`;

export const Informacao = styled('div')`

`;

export const Nome = styled('h3')`
    margin: ${({ theme }) => theme.spacing(2, 0, 0, 0)};
    
`;


export const Valor = styled('p')`
    margin: 0;
    font-weight: bold;
    color: ${({theme})=>theme.palette.primary.main};

`;

export const Descricao = styled('p')`
    word-break: break-word;
`;