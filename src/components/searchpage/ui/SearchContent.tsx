'use client'
import { useState } from 'react';
import { Trackes } from '@/entities/track';
import { Input } from '@/shared/ui/kit/input';

interface SearchContentProps {
	isLoadingPage: boolean;
}

export const SearchContent: React.FC<SearchContentProps> = ({ isLoadingPage }: SearchContentProps) => {
	
	// DEMO FEATURE
	const [trackes, setTrackes] = useState<Trackes[]>([])
	
	if (isLoadingPage) {
		const sceletonSearchList = new Array(10).fill('').map((_, i) => String(i));

		return (
			<>
				<Input
					type="text"
					disabled
					className="sceleton xl:w-[50%]"
					placeholder="Scarlxrd...  architect...   genre..."
				/>
				<div className="my-3 flex flex-col ">
					{sceletonSearchList.map((key, i) => {
						return (
							<div
								key={key}
								className="group relative my-2 flex cursor-pointer 
								items-center gap-x-4 
								overflow-hidden rounded-md bg-neutral-100/10 
								pr-4 transition 
								hover:bg-neutral-100/20  xl:w-[50%]"
							>
								<div className="relative h-[64px] w-[64px]">
									<div className="sceleton h-full w-full object-cover  " />
								</div>
								<div className="flex w-[50%] flex-col">
									<p className="sceleton mb-2 w-full truncate py-2 font-medium" />
									<p className="sceleton w-[60%] truncate py-3  font-medium" />
								</div>
							</div>
						);
					})}
				</div>
			</>
		);
	}

	if (trackes.length === 0) {
		return (
			<div
				className="
          flex 
          w-full 
          flex-col 
          gap-y-2 
          text-neutral-400
        "
			>
				No songs found.
			</div>
		);
	}

	return (

		<div className="flez"></div>

	);
};
