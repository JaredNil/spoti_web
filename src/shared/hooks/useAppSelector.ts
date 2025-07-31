import { TypedUseSelectorHook, useSelector } from "react-redux";

import { StateSchema } from "../lib/state";

export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector;
