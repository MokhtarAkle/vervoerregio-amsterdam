import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'
import getQueryPartner from '$lib/queries/partner';
import getQueryWebsite from '$lib/queries/website';

export async function load({ params }) {
	let { websiteUID } = params
	const queryPartner = getQueryPartner(gql);
	const queryWebsite = getQueryWebsite(gql, websiteUID);

	return {
		// SvelteKit 2 no longer awaits top-level promises returned from load, so await them here
		partnersData: await hygraph.request(queryPartner),
		websitesData: await hygraph.request(queryWebsite)
	};
}
