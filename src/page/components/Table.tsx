import { Table, TableProps } from "antd";
import { UserType } from "../../types/user";

const columns: TableProps<UserType>['columns'] = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'City',
        dataIndex: 'city',
        key: 'city',
    },]

const data: UserType[] = [{
    _id: "string",
    name: "string",
    city: "string",
    images: ['sdf']
}]


const TableComponent = () => {
    return (
        <>

            <Table<UserType> columns={columns} dataSource={data} pagination={false} />

        </>
    );
}

export default TableComponent;
