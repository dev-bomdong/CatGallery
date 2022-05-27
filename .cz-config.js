module.exports = {
	types: [
		{ value: '✨ Feat', name: '✨ Feat:\tAdd a new feature' },
		{ value: '🐛 Modify', name: '🐛 Fix:\tModify production, UI,UX code' },
		{ value: '📝 Docs', name: '📝 Docs:\tAdd or update documentation' },
		{
			value: '💄 Style',
			name: '💄 Style:\tAdd or update code format (not updation production, UI,UX code)',
		},
		{
			value: '🤖  Refactor',
			name: '🤖 Refactor:\tCode change that neither fixes a bug nor adds a feature',
		},
		{
			value: '✅  Test',
			name: '✅ Test:\tCode change related with tests cases',
		},
		{
			value: '🚚  Chore',
			name: '🚚 Chore:\tChanges to the build process or auxiliary tools\n\t\tand libraries such as documentation generation',
		},
		{ value: ' 🚗 Wip', name: '🚗  Wip:\tWork in progress' },
		{
			value: '👷 Build',
			name: '👷 build:\tAdd or update regards to build process',
		},
	],

	allowCustomScopes: false,
	allowBreakingChanges: ['feat', 'fix'],
	// skip any questions you want
	skipQuestions: ['body'],
	subjectLimit: 100,
};
