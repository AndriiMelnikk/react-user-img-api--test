export interface UserType {
    _id: string;
    name: string;
    city: string;
    count_img: number;
};

export interface CreateUserType {
    name: string;
    city: string;
    imgs: string[];
}
