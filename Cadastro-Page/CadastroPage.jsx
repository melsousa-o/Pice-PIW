import Header from './Header';
import CadastroBox from './CadastroBox';
import './index.css';

function CadastroPage() {
  return (
    <>
      <Header />
      <main className="container">
        <CadastroBox />
      </main>
    </>
  );
}

export default CadastroPage;
