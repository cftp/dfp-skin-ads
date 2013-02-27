jQuery( function( $ ) {

	/*
	 * Decide if the mouse is over the ad.
	 */
	function is_mouse_over_skin( e ) {
		// EDIT the ad height below
		if ( e.pageY < [ad height goes here] && ( "BODY" == e.target.tagName || "HTML" == e.target.tagName ) ) {
			return true;
		}
		return false;
	}

	/*
	 * Switch the cursor to a pointer when it's 
	 * over the ad.
	 */
	function cursor_switch( e ) {
		if ( is_mouse_over_skin( e ) ) {
			$( 'body,html' ).css( { cursor: 'pointer' } );
		} else {
			$( 'body,html' ).css( { cursor: 'auto' } );
		}
	}

	// The window.parent.document, etc, lines are DFP specific, as the ad 
	// is in an iframe which we need to climb out of to address the correct
	// BODY element.
	$(window.parent.document)
		.find('body')
		// $( 'body' )
			// EDIT the ad image URL below
			.css( 'background-image', 'url([ad image URL goes here])' )
			.css( 'background-repeat', 'no-repeat' )
			.css( 'background-position', '50% 0' )
			.css( 'background-color', 'white' )
			.css( 'padding-top', '180px' )
			.add( 'html' )
				.click( function( e ) {
					if ( ! is_mouse_over_skin( e ) )
						return;
					e.preventDefault();
					// EDIT the ad click through URL below
					window.open( '[click through URL goes here]', 'skin_win' );
				} )
				.mousemove( cursor_switch )
				.mouseover( cursor_switch );

} );