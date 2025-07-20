import { FC } from "react";
import { Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadFile, RcFile } from "antd/es/upload/interface";

type Props = {
  value?: UploadFile[];
  onChange?: (value: UploadFile[]) => void;
};

const UploadPhoto: FC<Props> = ({ value = [], onChange }) => {
  const handleBeforeUpload = (file: RcFile) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("Only image files are allowed!");
      return Upload.LIST_IGNORE;
    }

    const newFile: UploadFile = {
      uid: file.uid,
      name: file.name,
      status: "done",
      originFileObj: file,
      url: URL.createObjectURL(file),
    };

    const newFileList = [...value, newFile];
    onChange?.(newFileList);

    return false;
  };

  const handleRemove = (file: UploadFile) => {
    const newList = value.filter((f) => f.uid !== file.uid);
    onChange?.(newList);
    return true;
  };

  return (
    <Upload
      fileList={value}
      listType="picture"
      beforeUpload={handleBeforeUpload}
      multiple
      accept="image/*"
      onRemove={handleRemove}
      showUploadList={{ showPreviewIcon: false }}
    >
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
  );
};

export default UploadPhoto;
