//Create a namespace if it does not yet exist
Ext.namespace('Zarafa.plugins.spellchecker');

/**
 * @class Zarafa.plugins.spellchecker.SpellcheckerLanguagepackHungarianPlugin
 * @extends Zarafa.core.Plugin
 * 
 * A plugin that gives to user the ability to set reminders for e-mail messages.
 */
Zarafa.plugins.spellchecker.SpellcheckerLanguagepackHungarianPlugin = Ext.extend(Zarafa.core.Plugin, {

	/**
	 * Initialise the plugin.
	 * @protected
	 */
	initPlugin : function()
	{
		//Call the parent method
		Zarafa.plugins.spellchecker.SpellcheckerLanguagepackHungarianPlugin.superclass.initPlugin.apply(this, arguments);

		//Register the provided languages
		this.registerInsertionPoint('plugins.spellchecker.supportedlanguages', this.getSupportedLanguages, this);
	},

	/**
	 * Adds the languages that this plugin supports to the spellchecker languages
	 * @param {String} insertionPoint The insertionpoint that the function is populating
	 * @param {Object} options The options object for this insertionpoint
	 */
	getSupportedLanguages : function(insertionpoint, options)
	{
		options.languages.hu_HU = _('Hungarian (HU)');
	}
	
});

//Wait for the DOM and Kopano to be ready and register the plugin
Zarafa.onReady(function() {
	
	//Register the plugin
	container.registerPlugin(new Zarafa.core.PluginMetaData({
		name : 'spellchecker-languagepack-hungarian',
		displayName : _('Spellchecker Hungarian languagepack'),
		allowUserDisable : false, // don't allow users to disable this plugin
		pluginConstructor : Zarafa.plugins.spellchecker.SpellcheckerLanguagepackHungarianPlugin
	}));
});

