
import { api } from "../api/api"

export const UseLogin = async (mail: string, pass: string): Promise<Boolean> => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const data: any = await api;

    if (mail !== data.email || pass !== data.password) {
        return false;
    }

    return true;

}
