/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/**
 * WordPress dependencies.
 */
import { store } from '@wordpress/interactivity';

const houseBlockData = document.getElementById( 'wp-script-module-data-create-block-house-block-view-script-module' );
let data = {};
if ( houseBlockData ) {
	try {
		data = JSON.parse( houseBlockData.textContent );
	} catch {}
}

const defaultDoorBell = new Audio( data.doorBellSound );

const { state } = store( 'house', {
	state: {
		get areLightsOn() {
			return state.lightsOn;
		},
	},
	actions: {
		toggleLight: () => {
			state.lightsOn = !state.lightsOn;
		},
		ringBell: () => {
			if ( state.doorBellSound ) {
				console.log( state.doorBellSound );
				const customDoorBell = new Audio( state.doorBellSound );
				customDoorBell.play();
			} else {
				defaultDoorBell.play();
			}
		},
	},
} );
