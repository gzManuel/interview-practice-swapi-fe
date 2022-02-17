
import 'antd/dist/antd.css';
import './App.css'
import CustomLayout from './Layout/CustomLayout';

import Characters from './Container/Characters';

function App() {
  return (
    <CustomLayout>
      <Characters />
    </CustomLayout>
  );
}

export default App;
