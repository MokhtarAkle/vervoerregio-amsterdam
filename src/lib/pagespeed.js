import { env } from '$env/dynamic/private';

const PAGESPEED_ENDPOINT = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';

/**
 * Runs a Lighthouse accessibility audit through the PageSpeed Insights API.
 * Serverless hosts like Vercel can't launch Chrome, so Lighthouse runs on Google's side instead.
 * Set PAGESPEED_API_KEY to avoid the shared (usually exhausted) anonymous quota.
 *
 * @param {string} url The page to audit
 * @returns {Promise<Record<string, any>>} The binary (pass/fail) audits keyed by id, or {} when the audit fails
 */
export async function getAccessibilityAudits(url) {
	const params = new URLSearchParams({ url, category: 'accessibility', strategy: 'desktop' });
	if (env.PAGESPEED_API_KEY) params.set('key', env.PAGESPEED_API_KEY);

	try {
		const response = await fetch(`${PAGESPEED_ENDPOINT}?${params}`, {
			signal: AbortSignal.timeout(50_000)
		});
		const result = await response.json();

		if (!response.ok) {
			console.error('PageSpeed Insights request failed:', result.error?.message ?? response.status);
			return {};
		}

		const audits = {};
		for (const [auditId, auditResult] of Object.entries(result.lighthouseResult.audits)) {
			if (auditResult.scoreDisplayMode == 'binary') {
				audits[auditId] = auditResult;
			}
		}
		return audits;
	} catch (error) {
		console.error('PageSpeed Insights request failed:', error.message);
		return {};
	}
}
