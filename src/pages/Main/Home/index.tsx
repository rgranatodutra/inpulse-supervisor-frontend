import StyledHome from "./style";

const Home = () => {
    return (
        <StyledHome>
            <h1> Bem-vindo(a) ao inPulse!</h1>

            <h3> Confira o seu funil de vendas: </h3>

            <div className="funil">
                <div>
                    <div>
                        <h4>Atendimentos</h4>
                        <h2>763</h2>
                    </div>
                    <span className="mid"></span>
                    <div>
                        <h4>Clientes trabalhados</h4>
                        <h2>445</h2>
                    </div>
                </div>
                <div>
                    <div>
                        <h5>Atendimentos produtivos</h5>
                        <h2>763</h2>
                    </div>
                    <span className="mid"></span>
                    <div>
                        <h5>Clientes trabalhados produtivos</h5>
                        <h2>445</h2>
                    </div>
                </div>
                <div>
                    <div>
                        <h4>Cotação</h4>
                        <h2>1</h2>
                    </div>
                </div>
                <div>
                    <div>
                        <h4>Pedidos</h4>
                        <h2>55</h2>
                    </div>
                </div>
                <div>
                    <div>
                        <h4>Faturados</h4>
                        <h2>13</h2>
                    </div>
                </div>
            </div>

        </StyledHome>
    );
}

export default Home;