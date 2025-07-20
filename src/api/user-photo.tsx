import { GetUsersParams } from "../types/api";
import Service from "./interceptors";

const data: UserType[] = [
  {
    _id: "string_1",
    name: "Андрій",
    city: "Kyiv",
    count_img: 15,
  },
  {
    _id: "string_2",
    name: "Stas",
    city: "Luts",
    count_img: 20,
  },
  {
    _id: "string_3",
    name: "Oleg",
    city: "Lviv",
    count_img: 10,
  },
  {
    _id: "string_4",
    name: "Ira",
    city: "Odesa",
    count_img: 25,
  },
  {
    _id: "string_5",
    name: "Nazar",
    city: "Kharkiv",
    count_img: 12,
  },
  {
    _id: "string_6",
    name: "Olga",
    city: "Dnipro",
    count_img: 18,
  },
  {
    _id: "string_7",
    name: "Roman",
    city: "Ivano-Frankivsk",
    count_img: 8,
  },
  {
    _id: "string_8",
    name: "Sofia",
    city: "Ternopil",
    count_img: 30,
  },
  {
    _id: "string_9",
    name: "Max",
    city: "Uzhhorod",
    count_img: 14,
  },
  {
    _id: "string_10",
    name: "Alina",
    city: "Chernivtsi",
    count_img: 22,
  },
  {
    _id: "string_11",
    name: "Vlad",
    city: "Rivne",
    count_img: 9,
  },
  {
    _id: "string_12",
    name: "Anna",
    city: "Zhytomyr",
    count_img: 17,
  },
  {
    _id: "string_13",
    name: "Taras",
    city: "Cherkasy",
    count_img: 28,
  },
  {
    _id: "string_14",
    name: "Maria",
    city: "Kropyvnytskyi",
    count_img: 11,
  },
  {
    _id: "string_15",
    name: "Yura",
    city: "Poltava",
    count_img: 19,
  },
];

class UserPhotoAPI {
  async getUsers(params: GetUsersParams) {
    return data;
    // return Service.get('users', {params})
    //   .then(res => res)
    //   .catch(err => err);
  }
}

export default new UserPhotoAPI();
