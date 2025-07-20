import { useState, useEffect } from "react";
import { Spin, Table as TableCompont, TableProps } from "antd";
import { UserType } from "../../../types/user";
import {
    useUserDispatch,
    useUserState,
    getUsers,
    getUsersCount,
} from "../../../context/user";
import { StatusReq } from "../../../types/api";

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
        dataIndex: "imageCount",
        key: "imageCount",
    },
];

const Table = () => {
    const [pageSize, setPageSize] = useState<number>(1);
    const limit = 2;

    const userDispatch = useUserDispatch();
    const { users, status, countUsers } = useUserState();

    useEffect(() => {
        getUsersCount(userDispatch);
    }, []);

    useEffect(() => {
        getUsers(userDispatch, { page: pageSize, limit });
    }, [pageSize]);

    if (status === StatusReq.pending) return <Spin size="large" />;

    console.log(users);

    return (
        <>
            <TableCompont<UserType>
                rowKey="_id"
                columns={columns}
                dataSource={users}
                pagination={{
                    current: pageSize,
                    pageSize: limit,
                    total: countUsers,
                    onChange: (page) => setPageSize(page),
                }}
            />
        </>
    );
};

export default Table;
