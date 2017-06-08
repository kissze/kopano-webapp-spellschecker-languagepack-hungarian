<?php

/**
 * The main class for the spellchecker French languagepack plugin
 * 
 * Note: This file is actually only used for the method getDictionaryDirectories()
 * and therefor doesn't need to extend Plugin. It also does not need to be
 * instantiated by the PluginManager, so there is no reference to it in the 
 * manifest file.
 */
class PluginSpellcheckerLanguagepackHungarian {
	
	/**
	 * Returns a string with the directories where dictionaries can be found
	 * @return String a colon separated string with directories
	 */
	function getDictionaryDirectories(){
		$dirs = Array(realpath(__DIR__ . '/../dicts'));
		return implode(':', $dirs);
	}
}
