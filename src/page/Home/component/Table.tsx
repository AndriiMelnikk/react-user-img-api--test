import { useState, useEffect, FC } from "react";
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

type Props = {
    reloadFlag: boolean;
};

const Table: FC<Props> = ({ reloadFlag }) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const limit = 2;

    const userDispatch = useUserDispatch();
    const { users, status, countUsers } = useUserState();

    useEffect(() => {
        getUsersCount(userDispatch);
        getUsers(userDispatch, { page: currentPage, limit });
    }, [reloadFlag]);

    useEffect(() => {
        getUsers(userDispatch, { page: currentPage, limit });
    }, [currentPage]);

    if (status === StatusReq.pending) return <Spin size="large" />;

    return (
        <TableCompont<UserType>
            rowKey="_id"
            columns={columns}
            dataSource={users}
            pagination={{
                current: currentPage,
                pageSize: limit,
                total: countUsers,
                onChange: (page) => setCurrentPage(page),
            }}
        />
    );
};

export default Table;
