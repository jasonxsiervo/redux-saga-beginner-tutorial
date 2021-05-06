import { atom, RecoilRoot, selector, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <RecoilRoot>
      <ToDoList />
    </RecoilRoot>
  );
}

export default App;
