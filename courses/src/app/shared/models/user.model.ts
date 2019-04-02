export interface UserI {
    id: number;
    fakeToken: string;
    name: {
        first: string;
        last: string;
      };
    login: string;
    password: string;
}
