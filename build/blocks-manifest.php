<?php
// This file is generated. Do not modify it manually.
return array(
	'house-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/house-block',
		'version' => '0.1.0',
		'title' => 'House Block',
		'category' => 'widgets',
		'icon' => 'admin-home',
		'description' => 'Build a house',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'interactivity' => true
		),
		'textdomain' => 'house-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScriptModule' => 'file:./view.js',
		'attributes' => array(
			'housePaint' => array(
				'type' => 'string'
			),
			'trimPaint' => array(
				'type' => 'string'
			),
			'houseNumber' => array(
				'type' => 'string'
			),
			'lightsOn' => array(
				'type' => 'boolean'
			),
			'flatRoof' => array(
				'type' => 'boolean'
			),
			'doorBellSound' => array(
				'type' => 'string',
				'default' => ''
			)
		)
	)
);
