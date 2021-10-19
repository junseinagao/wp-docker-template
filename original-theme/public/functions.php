<?php
/**
 * Original-theme Theme functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package original-theme
 */

add_action( 'wp_enqueue_scripts', 'generic_parent_theme_enqueue_styles' );

/**
 * Enqueue scripts and styles.
 */
function generic_parent_theme_enqueue_styles() {
	wp_enqueue_style( 'generic-style', get_template_directory_uri() . '/style.css' );
	wp_enqueue_style( 'original-theme-style',
		get_stylesheet_directory_uri() . '/style.css',
		[ 'generic-style' ]
	);
}
