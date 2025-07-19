import React, { useState } from "react";
import { Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { RcFile } from "antd/es/upload/interface";

import type { UploadFile } from "antd";

const UploadPhoto: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [rawFile, setRawFile] = useState<RcFile | null>(null);

  const handleBeforeUpload = (file: RcFile) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("Можна завантажити лише зображення");
      return Upload.LIST_IGNORE;
    }

    setRawFile(file);
    setFileList([file]);
    return false;
  };

  return (
    <Upload
      action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
      listType="picture"
      beforeUpload={handleBeforeUpload}
      multiple
      accept="image/*"
      onRemove={() => {
        setFileList([]);
        setRawFile(null);
      }}
    >
      <Button color="cyan" variant="outlined" icon={<UploadOutlined />}>
        Upload
      </Button>
    </Upload>
  );
};

export default UploadPhoto;
