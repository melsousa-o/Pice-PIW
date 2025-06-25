import HeaderCoord from "./HeaderCoordenação";
import SidebarMenu from "./SidebarMenu";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'; // Importa o estilo padrão
import { useState } from 'react';

function CoordTelaInicial () {

    const [data,setData] = useState(new Date());

    return (
        <div>
            <main >
                <HeaderCoord/>
                <SidebarMenu/>

                <div className="conteudo"> <h2> Bem-Vinda Fulana</h2>
                <div className=" cards"> 
                    <div className="cards">
                        Alunos Matriculados <br/>
                        77 </div>
                    <div className="cards">
                        Turmas Cadastradas <br/>
                        13</div>
                    <div className="cards">
                        Professores Cadastrados<br/>
                    12 </div>
                </div>

                <section>
                    <div>
                        <h3> Calendário</h3>
                    <Calendar onChange={setData} value={data}/>
                    </div>
                </section>
                </div>

                
            </main>

            
        </div>
    )
}

export default CoordTelaInicial;