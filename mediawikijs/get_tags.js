// This file is autogenerated. See modules.json and autogenerator.py for details

/*
	get_tags.js

	MediaWiki API Demos
	Demo of `Tags` module: Get the first three change tags and their hitcounts.

	MIT License
*/

var params = {
		action: 'query',
		format: 'json',
		list: 'tags',
		tgprop: 'hitcount',
		tglimit: '3'
	},
	api = new mw.Api();

api.get( params ).done( function ( data ) {
	var tags = data.query.tags,
		t;
	for ( t in tags ) {
		console.log( tags[ t ].name );
	}
} );
