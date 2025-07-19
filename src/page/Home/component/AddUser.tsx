import { useState } from "react";
import { Modal, Button } from "antd";

import CustomForm from "./CustomForm/index.";

const AddUser = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <Button type="primary" onClick={() => setIsModalOpen(true)}>
                Add User
            </Button>
            <Modal
                title="Add User"
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={null}
            >
                <CustomForm />
            </Modal>
        </div>
    );
};

export default AddUser;
