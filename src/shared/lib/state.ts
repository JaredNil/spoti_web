import { HomepageSchema } from "@/components/homepage/model/types/homepageSchema";
import { UserSchema } from "@/entities/user";

export interface StateSchema {
	user: UserSchema;

	homepage?: HomepageSchema;
	[key: string]: any;
}