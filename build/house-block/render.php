<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$house_paint  = $attributes['housePaint'] ?? '';
$trim_paint   = $attributes['trimPaint'] ?? '';
$flat_roof    = $attributes['flatRoof'] ?? false;
$house_number = $attributes['houseNumber'] ?? '';
$lights_on    = $attributes['lightsOn'] ?? false;


wp_interactivity_state(
	'house',
	array(
		'lightsOn' => $lights_on,
	),
);
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
<div class="main" style="background-color:<?php echo esc_attr( $house_paint ); ?>">
	<div class="roof <?php echo $flat_roof ? esc_attr( 'flat' ) : ''; ?>"></div>
	<div class="chimney <?php echo $flat_roof ? esc_attr( 'short' ) : ''; ?>"></div>
	<div class="door" style="background-color:<?php echo esc_attr( $trim_paint ); ?>">
		<div class="numbers" style="color:<?php echo esc_attr( $trim_paint ); ?>"><?php echo esc_html( $house_number ); ?></div>
	</div>
	<div
		class="window"
		data-wp-interactive="house"
		data-wp-class--lights-on="state.lightsOn"
		data-wp-on--click="actions.toggleLight"
		style="outline-color: <?php echo esc_attr( $trim_paint ); ?>;"
		></div>
</div>
</div>
