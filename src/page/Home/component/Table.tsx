import { useState, useEffect } from "react";
import { Table as TableCompont, TableProps } from "antd";
import { UserType } from "../../../types/user";
import { useUserDispatch, useUserState, getUsers } from "../../../context/user";

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

const Table = () => {
    const [pageSize, setPageSize] = useState<number>(1);
    const limit = 10;

    const userDispatch = useUserDispatch();
    const { users } = useUserState();

    useEffect(() => {
        getUsers(userDispatch, { page: pageSize, limit });
    }, [pageSize]);

    return (
        <>
            <TableCompont<UserType>
                columns={columns}
                dataSource={users}
                onChange={(pagination) => {
                    setPageSize(pagination.current || 1);
                }}
                pagination={{
                    defaultPageSize: 5,
                }}
            />
        </>
    );
};

export default Table;
