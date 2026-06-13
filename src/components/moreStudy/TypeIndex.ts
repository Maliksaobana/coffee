import type {Dispatch, SetStateAction} from "react";

export interface MyContextValue {
    users: UsersDetails | null,
    setUsers: Dispatch<SetStateAction<UsersDetails | null>>,
}

export interface UsersDetails {
        name: string | undefined;
        email: string | undefined;
        password: string | undefined;
}