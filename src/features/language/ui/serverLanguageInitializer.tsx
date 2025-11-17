import { getServerLanguage } from '../lib/serverLanguage'

export async function ServerLanguageInitializer() {
	const language = await getServerLanguage()

	return (
		<>
			<script
				dangerouslySetInnerHTML={{
					__html: `window.__INITIAL_LANGUAGE__ = '${language}';`,
				}}
			/>
			<script
				dangerouslySetInnerHTML={{
					__html: `
						(function() {
							if (typeof document !== 'undefined') {
								document.documentElement.lang = '${language}';
							}
						})();
					`,
				}}
			/>
		</>
	)
}
