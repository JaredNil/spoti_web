/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
declare module '*.scss' {
	type IClassNames = Record<string, string>;
	const classNames: IClassNames;
	export = classNames;
}

declare module '*.png';
declare module '*.webp';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
	import { type FC, type SVGProps } from 'react';

	const content: FC<SVGProps<SVGElement>>;
	export default content;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;

declare const __PROJECT__: 'storybook' | 'frontend' | 'jest';

type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;

type OptionalRecord<K extends keyof any, T> = {
    [P in K]?: T;
};

