import { Button } from "@mui/material";

import { Professor } from "../../@types/professor";
import { FormatadorService } from "../../services/FormatadorService";
import { Foto, ItemLista, ListaStyled, Informacao, Nome, Valor, Descricao, ListaVazia } from "./Lista.style";

interface ListaProps {
    professores: Professor[],
}

const Lista = (props: ListaProps) => {
    

    return(
        <div>
           

            {props.professores.length > 0 ? (
                <ListaStyled>
                    {props.professores.map(professor => (
                        <ItemLista key={professor.id}>
                            <Foto src={professor.foto}></Foto>
                            <Informacao> 
                                <Nome>{professor.nome}</Nome>
                                <Valor>{FormatadorService.valorMonetario(professor.valor_hora)}</Valor>
                                <Descricao>{FormatadorService.limitarTexto(professor.descricao,200)}</Descricao>
                                <Button sx={{ width: '70%'}}>Marcar Aula com {professor.nome}</Button>
                            </Informacao>
                        </ItemLista>
                    ))}
                </ListaStyled>
            ) : (
                <ListaVazia>Nenhum professor encontrado</ListaVazia>
            )}
        </div>
    )
}

export default Lista;

