import { FC, useState } from "react";
import { Modal, Button } from "antd";

import CustomForm from "./CustomForm/index";
import { MessageInstance } from "antd/es/message/interface";

type Props = {
    messageApi: MessageInstance;
    onUserAdded: () => void;
};

const AddUser: FC<Props> = ({ messageApi, onUserAdded }) => {
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
                <CustomForm
                    closeModal={setIsModalOpen}
                    messageApi={messageApi}
                    onUserAdded={onUserAdded}
                />
            </Modal>
        </div>
    );
};

export default AddUser;
