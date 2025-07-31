import { AccountpageSchema } from "@/components/accountpage";
import { HomepageSchema } from "@/components/homepage/model/types/homepageSchema";
import { playlistpageSchema } from "@/components/playlistPage";
import type { SearchpageSchema } from "@/components/searchpage";
import { UploadpageSchema } from "@/components/uploadpage";
import { UserSchema } from "@/entities/user";

export interface StateSchema {
	user: UserSchema;

	homepage?: HomepageSchema;
	accountpage?: AccountpageSchema;
	searchpage?: SearchpageSchema;
	uploadpage?: UploadpageSchema;
	playlistpage?: playlistpageSchema;
	[key: string]: any;
}