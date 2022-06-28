import 'antd/dist/antd.css';
import { Menu, Button, Row } from 'antd';
import { HomeOutlined, PictureOutlined, SnippetsOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";


const items = [
    {
        label: (<Link to="/"><Button type="text">Home</Button></Link>),
        key: 'home',
        icon: <HomeOutlined />,
    },
    {
        label: (<Link to="/gallery"><Button type="text">Gallery</Button></Link>),
        key: 'gallery',
        icon: <PictureOutlined />,
    },
    {
        label: (<Link to="/menu"><Button type="text">Menu</Button></Link>),
        key: 'menu',
        icon: <SnippetsOutlined />,
    },
]

function Header() {
    return (
        <Row width={"128rem"}>
            <img src="favicon.ico" height={"64rem"} style={{ padding: "1rem" }}/>
            <Menu mode="horizontal" items={items} style={{ padding: "0.5rem 1rem" }} />
        </Row>
    );
}

export default Header;