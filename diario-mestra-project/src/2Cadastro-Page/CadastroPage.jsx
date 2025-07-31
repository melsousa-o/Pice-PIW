import CadastroHeader from './CadastroHeader';
import CadastroBox from './CadastroBox';
import '../1Login-Page/Login.css';

function CadastroPage() {
  return (
    <>
      <CadastroHeader />
      <main className="container">
        <CadastroBox />
      </main>
    </>
  );
}

export default CadastroPage;
