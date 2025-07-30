import { ReactNode } from "react";
import { StoreProvider } from "./storeProvider/ui/storeProvider";

export const GeneralProviders = ({children}: {children: ReactNode}) =>{

		return (
            <StoreProvider>
                {children}
            </StoreProvider>
        );
};
