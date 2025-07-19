import { Table as TableCompont, TableProps } from "antd";
import { UserType } from "../types/user";

const columns: TableProps<UserType>["columns"] = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "City",
        dataIndex: "city",
        key: "city",
    },
    {
        title: "Count Img",
        dataIndex: "count_img",
        key: "count_img",
    },
];

const data: UserType[] = [
    {
        _id: "string",
        name: "Андрій",
        city: "Kyiv",
        count_img: 15,
    },
    {
        _id: "string_ 2",
        name: "Stas",
        city: "Luts",
        count_img: 20,
    },
];

const Table = () => {
    return (
        <>
            <TableCompont<UserType>
                columns={columns}
                dataSource={data}
                pagination={{ defaultPageSize: 1, total: 10 }}
            />
        </>
    );
};

export default Table;
