import Header from './Components/Header'
import { BackTop, Table } from 'antd';

const dataSource = [
    {
        key: '1',
        name: 'Hot Chocolate',
        price: '$1.00',
    },
    {
        key: '2',
        name: 'Green/Orange/Black Tea',
        price: '$1.00',
    },
    {
        key: '3',
        name: 'Baked Chips/Cheetos',
        price: '$1.00',
    },
    {
        key: '4',
        name: 'Caffeinated ICE Water',
        price: '$2.00',
    },
    {
        key: '5',
        name: 'Carbonated Water',
        price: '$1.00',
    },
];

const columns = [
    {
        title: 'Item',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    }
];

function Menu() {
    return (
        <>
            <Header />
            <Table dataSource={dataSource} columns={columns} style={{margin:"1rem"}}/>
            <BackTop />
        </>
    );
}

export default Menu