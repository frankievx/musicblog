export const SHOW_LEFT_SIDEBAR = 'SHOW_LEFT_SIDEBAR';
export const HIDE_LEFT_SIDEBAR = 'HIDE_LEFT_SIDEBAR';


export function showLeftSidebar() {
	return { type: SHOW_LEFT_SIDEBAR };
}

export function hideLeftSidebar() {
	return { type: HIDE_LEFT_SIDEBAR };
}
