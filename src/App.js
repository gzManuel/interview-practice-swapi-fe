import { Layout, Menu } from 'antd';
import { getCharacter } from './api/swapi'
import 'antd/dist/antd.css';
import './App.css'
import { useState } from 'react';
import Character from './components/Character';

const { Header, Sider, Content, Footer } = Layout;
const numberPeople = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function App() {
  const [character, setCharacter] = useState({});

  const showCharacterHandler = async (number) => {
    console.log('holi')
    const character = await getCharacter(number);
    setCharacter(character);
   
  }

  const menuItems = numberPeople.map((num) => <Menu.Item key={num} onClick={() => showCharacterHandler(num)}>{num}</Menu.Item>)
  return (
    <Layout>
      <Sider>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          {menuItems}
        </Menu>
      </Sider>
      <Layout>
        <Header className="site-layout-sub-header-background" style={{ padding: 0,textAlign:"center" }}>
          <h1>Swapi</h1>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Character character={character} title={"Character Information"} />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Created by me
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
