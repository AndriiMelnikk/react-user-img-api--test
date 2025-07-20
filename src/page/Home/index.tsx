import { Col, message, Row } from "antd";
import { useState } from "react";

import AddUser from "./component/AddUser";
import Table from "./component/Table";

const Home = () => {
    const [messageApi, contextHolder] = message.useMessage();

     const [reloadFlag, setReloadFlag] = useState(false);

      const triggerReload = () => {
        setReloadFlag((prev) => !prev);
      };

    
    return (
        <div>
            {contextHolder}
            <h1>Test API Nest</h1>
            <Row justify={"center"} gutter={[0, 16]}>
                <Col span={18}>
                    <AddUser messageApi={messageApi} onUserAdded={triggerReload} />
                </Col>

                <Col xs={24} md={{ span: 18, offset: 3 }}>
                    <Table  reloadFlag={reloadFlag} />
                </Col>
            </Row>
        </div>
    );
};

export default Home;
