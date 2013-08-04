/*

Jappix - An open social platform
Implementation of XEP-0313: Message Archive Management

-------------------------------------------------

License: AGPL
Author: Valérian Saliou
Last revision: 04/08/13

*/


/* -- MAM Configuration -- */

// Gets the MAM configuration
function getConfigMAM() {

}

// Handles the MAM configuration
function handleConfigMAM(iq) {

}

// Sets the MAM configuration
function setConfigMAM(enabled) {

}


/* -- MAM Retrieval -- */

// Gets the MAM configuration
function getArchivesMAM(args, max) {
	if(typeof args != 'object') {
		args = {};
	}

	var iq = new JSJaCIQ();
	iq.setType('get');

	var query = iq.setQuery(NS_URN_MAM);

	for(c in args) {
		if(args[c])  query.appendChild(iq.buildNode(c, {'xmlns': NS_URN_MAM}, args[c]));
	}

	if(max && typeof max == 'number') {
		var rsm_set = query.appendChild(iq.buildNode('set', {'xmlns': NS_RSM}));
		rsm_set.appendChild(iq.buildNode('max', {'xmlns': NS_RSM}, max));
	}

	con.send(iq, handleArchivesMAM);
}

// Handles the MAM configuration
function handleArchivesMAM(iq) {
	var node = iq.getNode();

	// TODO
}