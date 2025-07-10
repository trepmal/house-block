/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InspectorControls, BlockControls, useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss'; // no need for separate style

import { PanelBody, TextControl, ToggleControl, ToolbarGroup, ToolbarButton, ColorPicker, Button, Popover } from '@wordpress/components';

import { useEffect, useState } from 'react';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { housePaint, trimPaint, flatRoof, lightsOn, houseNumber } = attributes;
	const toggleLights = () => setAttributes({ lightsOn: !lightsOn })

	const [paintVisible, setPaintVisible] = useState(false);
	const [trimVisible, setTrimVisible] = useState(false);
	const [popoverPaintAnchor, setPopoverPaintAnchor] = useState();
	const [popoverTrimAnchor, setPopoverTrimAnchor] = useState();

	const togglePaintColor = () => {
		setPaintVisible((state) => !state);
	};
	const toggleTrimColor = () => {
		setTrimVisible((state) => !state);
	};

	// useEffect(() => {
	// 	setAttributes( {
	// 		lightsOn: false
	// 	});
	// }, [setAttributes]);

	// let displayDate;

	// if (showStartingYear && startingYear) {
	// 	displayDate = startingYear + '–' + currentYear;
	// } else {
	// 	displayDate = currentYear;
	// }

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('House Settings', 'house-block')}>
					<ToggleControl
						checked={!!flatRoof}
						label={__(
							'Flat roof',
							'house-block'
						)}
						onChange={() =>
							setAttributes({
								flatRoof: !flatRoof,
							})
						}
					/>
					<TextControl
						__nextHasNoMarginBottom
						__next40pxDefaultSize
						label={__(
							'House Number',
							'house-block'
						)}
						value={houseNumber || ''}
						onChange={(value) =>
							setAttributes({ houseNumber: value })
						}
					/>
					<Button variant="secondary" ref={setPopoverPaintAnchor} onClick={togglePaintColor}>House Paint</Button>
					{paintVisible &&
						<Popover anchor={popoverPaintAnchor} >
							<ColorPicker
								color={housePaint}
								onChange={(value) =>
									setAttributes({ housePaint: value })
								}
								defaultValue="beige"
							/>
						</Popover>
					}
					<span> </span>
					<Button variant="secondary" ref={setPopoverTrimAnchor} onClick={toggleTrimColor}>Trim Paint</Button>
					{trimVisible &&
						<Popover anchor={popoverTrimAnchor} >
							<ColorPicker
								color={trimPaint}
								onChange={(value) =>
									setAttributes({ trimPaint: value })
								}
								defaultValue="olive"
							/>
						</Popover>
					}
				</PanelBody>
			</InspectorControls>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						label={__("Lights")}
						icon="lightbulb"
						isActive={lightsOn}
						onClick={toggleLights}
					/>
				</ToolbarGroup>
			</BlockControls>
			<div {...useBlockProps()} id="house1">
				<div class="main" style={{ backgroundColor: housePaint }}>
					<div class="roof" className={flatRoof ? 'roof flat' : 'roof'}></div>
					<div class="chimney" className={flatRoof ? 'chimney short' : 'chimney'}></div>
					<div class="door" style={{ backgroundColor: trimPaint }}>
						<div class="numbers" style={{ color: trimPaint }}>{houseNumber || ''}</div>
					</div>
					<div class="window" style={{ outlineColor: trimPaint, backgroundColor: lightsOn ? 'yellow' : 'grey' }}></div>

				</div>
			</div>
		</>
	);
}
