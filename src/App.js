import Header from './components/Header';
import styled from 'styled-components';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgb(238, 174, 202);
    background: radial-gradient(circle, rgba(238, 174, 202, 1) 41%, rgba(148, 187, 233, 1) 100%);
`

function App() {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
  );
}

export default App;
