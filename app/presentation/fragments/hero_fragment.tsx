import React from "react";
import Button from "../components/button";

function HeroFragment() {
	return (
		<div className='p-5 mt-10 bg-white w-full h-full justify-center align-middle flex-col'>
			<div className='my-5 flex flex-col'>
				<span className='text-md gray-400 font-light'>Hi,</span>
				<span className='text-lg gray-400 font-light'>
					I'm <span className='font-bold'>Steve</span>
				</span>
			</div>

			{/* create beautiful experiences */}
			<div className='my-10 flex flex-col'>
				<h3 className='font-light text-4xl leading-10'>
					I create beautiful <span className='font-bold'>website</span> and
					<span className='font-bold'> mobile</span> experiences
				</h3>
			</div>

			{/* description */}
			<p className='text-gray-500 my-5'>
				Combining creativity and digital tools to solve real world problems just
				for you
			</p>

			{/* CTAs */}
			<div className='w-full flex flex-row justify-between gap-4 mt-10'>
				<button className='w-full px-3 py-4 bg-green-500 cursor-pointer text-white rounded-md'>
					Let's Talk
				</button>
				<Button />
			</div>
		</div>
	);
}

export default HeroFragment;
