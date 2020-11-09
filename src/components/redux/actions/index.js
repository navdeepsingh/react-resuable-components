/**
 * Action TYPES
 */
export const TOGGLE_THEME = 'TOGGLE_THEME'

/**
 * Action Creators
 */
export const toggleTheme = () => ({
  type: TOGGLE_THEME
})

export function toggleThemeAction() {
  return async (disptach) => {
    return disptach(toggleTheme())
  }
}