import { Layout } from '~/layouts';
import { List } from '~/components';

const SKILLS = [
	{
		category: 'Programming Languages',
		items: [
			{
				name: 'JavaScript/TypeScript',
				description: 'Modern web development',
				icon: 'logos:typescript-icon',
			},
			{
				name: 'Python',
				description: 'Backend development & AI/ML',
				icon: 'logos:python',
			},
			{
				name: 'Rust',
				description: 'Systems programming & WebAssembly',
				icon: 'logos:rust',
			},
			{
				name: 'C++',
				description: 'Performance-critical applications',
				icon: 'logos:c-plusplus',
			},
			{
				name: 'C',
				description: 'Low-level systems programming',
				icon: 'logos:c',
			},
			{
				name: 'Lua',
				description: 'Scripting & game development',
				icon: 'logos:lua',
			},
			{
				name: 'Go',
				description: 'Backend services & cloud computing',
				icon: 'logos:go',
			},
		],
	},
	{
		category: 'Frameworks & Tools',
		items: [
			{
				name: 'React & Next.js',
				description: 'Frontend development',
				icon: 'logos:react',
			},
			{
				name: 'Node.js',
				description: 'Backend development',
				icon: 'logos:nodejs-icon',
			},
			{
				name: 'TensorFlow',
				description: 'Machine learning & AI development',
				icon: 'logos:tensorflow',
			},
			{
				name: 'Linux',
				description: 'Primary development environment',
				icon: 'logos:linux-tux',
			},
			{
				name: 'Neovim',
				description: 'Advanced text editor',
				icon: 'logos:neovim',
			},
			{
				name: 'VS Code',
				description: 'Modern IDE',
				icon: 'logos:visual-studio-code',
			},
			{
				name: 'Git',
				description: 'Version control',
				icon: 'logos:git-icon',
			},
		],
	},
];

export default function SkillsPage(): JSX.Element {
	return (
		<Layout.Default seo={{ title: 'nassro ─ skills' }}>
			<div className="flex flex-grow min-h-screen pt-16 pb-12">
				<div className="flex-grow flex flex-col justify-center max-w-sm sm:max-w-2xl w-full mx-auto px-0 sm:px-16">
					<h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Skills</h1>
					{SKILLS.map((skillGroup, groupIndex) => (
						<div key={groupIndex} className="mb-8">
							<h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
								{skillGroup.category}
							</h2>
							<List.Container>
								{skillGroup.items.map((skill, index) => (
									<List.Item
										key={index}
										title={skill.name}
										description={skill.description}
										icon={skill.icon}
									/>
								))}
							</List.Container>
						</div>
					))}
				</div>
			</div>
		</Layout.Default>
	);
}