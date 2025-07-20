export interface UserType {
    _id: string;
    name: string;
    city: string;
    imageCount: number;
};

export interface CreateUserType {
    name: string;
    city: string;
    imgs: string[];
}
