/**
 * Check if the current date is within the St. Patrick's Day celebration period
 * (March 1-17)
 */
export function isStPatricksDay(): boolean {
	const now = new Date()
	const month = now.getMonth() // 0-indexed (0 = January, 2 = March)
	const day = now.getDate()

	// March is month 2 (0-indexed)
	return month === 2 && day >= 1 && day <= 17
}
