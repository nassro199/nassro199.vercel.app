import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'nassro ─ programmer';
	const description = "Hey 👋 I'm nassro, a Programmer";

	return {
		title,
		description,
		canonical: `https://nassro.is-a.dev/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'nassro',
			url: `https://nassro.is-a.dev/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://nassro.is-a.dev/',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},

	}
}
