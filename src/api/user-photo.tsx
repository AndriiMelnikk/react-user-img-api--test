import { AxiosResponse } from "axios";
import { GetUsersParams } from "../types/api";
import { CreateUserType } from "../types/user";
import Service from "./interceptors";

class UserPhotoAPI {
  async getUsers(params: GetUsersParams) {
    try {
      const response = await Service.get("user", { params });
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  async createUser(createUser: CreateUserType) {
    try {
      const formData = new FormData();

      formData.append("name", createUser.name);
      formData.append("city", createUser.city);

      createUser.images?.forEach((file) => {
        if (file.originFileObj) {
          formData.append("images", file.originFileObj);
        }
      });

      console.log("FormData images:", formData.getAll("images"));

      const response = await Service.post("user", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response;
    } catch (err) {
      console.error("Upload error:", err);
      throw err;
    }
  }

  async getUsersCount() {
    try {
      const response: AxiosResponse<number, any> =
        await Service.get("user/count");

      return response.data;
    } catch (err) {
      throw err;
    }
  }
}

export default new UserPhotoAPI();
