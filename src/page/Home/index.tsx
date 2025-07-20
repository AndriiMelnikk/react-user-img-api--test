import { Col, Row } from "antd";

import AddUser from "./component/AddUser";
import Table from "./component/Table";

const Home = () => {
    return (
        <div>
            <h1>Test API Nest</h1>
            <Row justify={"center"} gutter={[0, 16]}>
                <Col span={18}>
                    <AddUser />
                </Col>

                <Col xs={24} md={{ span: 18, offset: 3 }}>
                    <Table />
                </Col>
            </Row>
        </div>
    );
};

export default Home;
