import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { housePaint, trimPaint, flatRoof, lightsOn, houseNumber } = attributes;

	// if (!fallbackCurrentYear) {
	// 	return null;
	// }
	// let displayDate;

	// if (showStartingYear && startingYear) {
	// 	displayDate = startingYear + '–' + fallbackCurrentYear;
	// } else {
	// 	displayDate = fallbackCurrentYear;
	// }

	return (
			<div {...useBlockProps.save()} id="house1">
				<div class="main" style={{ backgroundColor: housePaint }}>
					<div class="roof" className={flatRoof ? 'roof flat' : 'roof'}></div>
					<div class="chimney" className={flatRoof ? 'chimney short' : 'chimney'}></div>
					<div class="door" style={{ backgroundColor: trimPaint }}>
						<div class="numbers" style={{ color: trimPaint }}>{houseNumber || ''}</div>
					</div>
					<div class="window" style={{ outlineColor: trimPaint, backgroundColor: lightsOn ? 'yellow' : 'grey' }}></div>

				</div>
			</div>
	);

}
