import { StateSchema } from "@/shared/lib/state";

export const getUsername = (state: StateSchema) => state?.user?.username || '';
