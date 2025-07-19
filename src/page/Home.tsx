import { Col, Row } from "antd";
import TableComponent from "./components/Table";

const Home = () => {
    return (
        <div>
            <h1>Test API Nest</h1>
            <Row>
                <Col xs={24} md={{ span: 18, offset: 3 }}>
                    <TableComponent />
                </Col>
            </Row>
        </div>
    );
};

export default Home;
