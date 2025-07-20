import { FC } from "react";
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadFile } from "antd/es/upload/interface";


type Props = {
  value?: UploadFile[];
  onChange?: (value: UploadFile[]) => void;
};

const UploadPhoto: FC<Props> = ({ value = [], onChange }) => {


  const handleChange = ({ fileList }: { fileList: UploadFile[] }) => {
    const filteredList = fileList.filter((file) =>
      file.type?.startsWith("image/"),
    );

    const updatedList = filteredList.map((file) => ({
      ...file,
      status: "done",
      url: file.url || URL.createObjectURL(file.originFileObj as Blob),
    }));

    onChange?.(updatedList as UploadFile[]);
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
      multiple
      accept="image/*"
      showUploadList={{ showPreviewIcon: false }}
      onChange={handleChange}
      onRemove={handleRemove}
      beforeUpload={() => false}
    >
      <Button icon={<UploadOutlined />}>
        Upload
      </Button>
    </Upload>
  );
};

export default UploadPhoto;
