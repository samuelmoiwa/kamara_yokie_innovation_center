/* eslint-disable jsx-a11y/anchor-is-valid */
const cards = [
	{
		category: "VEX Robotics",
		imageUrl: "https://source.unsplash.com/random/480x360/?4",
		title: "Facere ipsa nulla corrupti praesentium pariatur architecto",
		description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.",
		time: "6 min ago",
	},
	{
		category: "Coding",
		imageUrl: "https://source.unsplash.com/random/480x360/?5",
		title: "Exercitationem nisi iure qui asperiores non possimus",
		description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.",
		time: "12 min ago",
	},
];

const Card = ({ category, imageUrl, title, description, time }) => {
	return (
		<div className="max-w-lg p-4 shadow-md dark:bg-blue-600 dark:text-gray-100
    align-middle justify-center ">
			<div className="flex justify-between pb-4 border-bottom">
				<div className="flex items-center">
					<a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-white">{category}</a>
				</div>
			</div>
			<div className="space-y-4">
				<div className="space-y-2">
					<img src={imageUrl} alt="" className="block object-cover object-center w-full rounded-md h-72 md:h-80 lg:h-96 dark:bg-gray-500" />
					<div className="flex items-center text-xs">
						<span>{time}</span>
					</div>
				</div>
				<div className="space-y-2">
					<a rel="noopener noreferrer" href="#" className="block">
						<h3 className="text-xl font-semibold dark:text-violet-400">{title}</h3>
					</a>
					<p className="leading-snug dark:text-gray-100">{description}</p>
				</div>
			</div>
		</div>
	);
};

const ProgramsCardList = () => {
	return (
		<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 place-items-center">
			{cards.map((card, index) => (
				<Card key={index} {...card} />
			))}
		</div>
	);
};

export default ProgramsCardList;
