<?php
/**
 * Plugin Name:       Team-members
 * Description:       Dynamic grid for site member profiles
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.8
 * Author:            Shaun Bolak
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       team-members
 *
 * @package           evbg
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function evbg_team_members_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'evbg_team_members_block_init' );
