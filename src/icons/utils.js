// @flow
import * as IconMatch from '.';

/**
 * This allows me to create an icon dropdown in the CMS with string based values that then map to actual icon components.
 */
export const matchIcon = (icon: string): Function => IconMatch[icon];
