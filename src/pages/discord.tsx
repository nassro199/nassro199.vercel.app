import { Layout } from '~/layouts';
import { List, Status } from '~/components';
import { useStatus } from '~/lib';
import { READABLE_DISCORD_STATUS } from '~/types';

export default function DiscordPage(): JSX.Element {
	const { color, loading, status } = useStatus();

	return (
		<Layout.Default seo={{ title: 'nassro ─ discord' }}>
			<div className="flex flex-grow min-h-screen pt-16 pb-12">
				<div className="flex-grow flex flex-col justify-center max-w-sm sm:max-w-2xl w-full mx-auto px-0 sm:px-16">
					<h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Discord Status</h1>
					
					{loading ? (
						<Status.Loading />
					) : !status ? (
						<Status.Error />
					) : (
						<div className="space-y-8">
							<List.Container>
								<List.Item
									title={status.discord_user.username}
									description={`#${status.discord_user.discriminator}`}
									icon={<Status.Indicator color={color} pulse={status.discord_status !== 'offline'} />}
								/>
							</List.Container>

							<div>
								<h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
									Current Status
								</h2>
								<List.Container>
									<List.Item
										title={READABLE_DISCORD_STATUS[status.discord_status]}
										description={status.discord_status === 'online' ? 'Ready to chat!' : 'Status message'}
										icon={`feather:${status.discord_status === 'online' ? 'message-circle' : 'moon'}`}
									/>
								</List.Container>
							</div>

							{status.activities.length > 0 && (
								<div>
									<h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
										Activities
									</h2>
									<List.Container>
										{status.activities.map((activity, index) => (
											<List.Item
												key={index}
												title={activity.name}
												description={activity.details || activity.state || 'Playing'}
												icon="feather:activity"
											/>
										))}
									</List.Container>
								</div>
							)}

							{status.listening_to_spotify && (
								<div>
									<h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
										Listening to Spotify
									</h2>
									<List.Container>
										<List.Item
											title={status.spotify.song}
											description={`by ${status.spotify.artist}`}
											icon="feather:music"
										/>
									</List.Container>
								</div>
							)}
						</div>
					)}
				</div>
			</div>
		</Layout.Default>
	);
}