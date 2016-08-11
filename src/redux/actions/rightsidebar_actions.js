export const SHOW_RIGHT_SIDEBAR = 'SHOW_RIGHT_SIDEBAR';
export const HIDE_RIGHT_SIDEBAR = 'HIDE_RIGHT_SIDEBAR';


export function showRightSidebar() {
	return { type: SHOW_RIGHT_SIDEBAR };
}

export function hideRightSidebar() {
	return { type: HIDE_RIGHT_SIDEBAR };
}
