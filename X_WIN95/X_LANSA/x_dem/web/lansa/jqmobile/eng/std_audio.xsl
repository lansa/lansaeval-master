<?xml version="1.0" encoding="UTF-8"?><!--(c) 2015, 2017 LANSA--><!--jqMobile Audio--><!--$Workfile:: std_audio.xsl $--><!--$UTCDate:: 2017-01-18 23:49:03Z $--><!--$Revision:: 10 $--><xsl:transform version="1.0" exclude-result-prefixes="msxsl lxml wd wds" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:lxml="http://www.lansa.com/2002/XML/Runtime-Data" xmlns:wd="http://www.lansa.com/2002/XSL/Weblet-Design" xmlns:wds="http://www.lansa.com/2002/XSL/Weblet-Design/Extension" xmlns:msxsl="urn:schemas-microsoft-com:xslt" xmlns="http://www.w3.org/1999/xhtml"><xsl:import href="std_variables.xsl"></xsl:import><xsl:import href="std_keys.xsl"></xsl:import><xsl:import href="std_types.xsl"></xsl:import><xsl:import href="std_util.xsl"></xsl:import><xsl:output method="xml" omit-xml-declaration="yes" encoding="UTF-8" indent="yes"></xsl:output><xsl:template name="std_audio"><xsl:param name="name" select="generate-id()"></xsl:param><xsl:param name="id" select="$name"></xsl:param><xsl:param name="addErrorDiv" select="true()"></xsl:param><xsl:param name="class" select="''"></xsl:param><xsl:param name="corners" select="true()"></xsl:param><xsl:param name="swatch" select="''"></xsl:param><xsl:param name="hideIf" select="false()"></xsl:param><xsl:param name="width" select="'Auto'"></xsl:param><xsl:param name="height" select="'Auto'"></xsl:param><xsl:param name="uploadWamName" select="$lweb_WAMName"></xsl:param><xsl:param name="uploadWrName"></xsl:param><xsl:param name="submitExtraFields" select="document('')/*/lxml:data/lxml:json[not(@id)]"></xsl:param><xsl:param name="listName"></xsl:param><xsl:param name="blobField" select="''"></xsl:param><xsl:param name="fileNamePrefix" select="'audio'"></xsl:param><xsl:param name="maxNumberOfFiles" select="1"></xsl:param><xsl:param name="sampleRate" select="''"></xsl:param><xsl:param name="successCallback" select="''"></xsl:param><xsl:param name="failCallback" select="''"></xsl:param><xsl:param name="disabled" select="false()"></xsl:param><xsl:param name="tabindex"></xsl:param><xsl:if test="not($hideIf) or $lweb_design_mode"><div class="ui-field-contain"><div id="{$id}" class="lstd-mobileapp" data-lstddevice="audio" data-lansawam="{$uploadWamName}" data-lansawr="{$uploadWrName}" data-listname="{$listName}" data-filename-pfx="{$fileNamePrefix}" data-blob-field="{$blobField}" data-lstdmaxnumberoffiles="{$maxNumberOfFiles}"><xsl:if test="$successCallback != ''"><xsl:attribute name="data-lstdsuccesscallback"><xsl:value-of select="$successCallback"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$failCallback != ''"><xsl:attribute name="data-lstdfailcallback"><xsl:value-of select="$failCallback"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$submitExtraFields"><xsl:attribute name="data-lansaextrafields"><xsl:value-of select="$submitExtraFields"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$sampleRate != ''"><xsl:attribute name="data-samplerate"><xsl:value-of select="$sampleRate"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$disabled"><xsl:attribute name="data-disabled">disabled</xsl:attribute></xsl:if><xsl:variable name="id_popup" select="concat($id, '_popup')"></xsl:variable><div><xsl:attribute name="class">lstd-device-icon-disabled lstd-audio-icon</xsl:attribute><xsl:if test="$swatch != ''">-<xsl:value-of select="$swatch"></xsl:value-of></xsl:if><xsl:comment>151441</xsl:comment><xsl:comment /></div><div id="{$name}_audiofiles"><xsl:attribute name="class"><xsl:text>lstd-device-data ui-body</xsl:text><xsl:choose><xsl:when test="$swatch != ''"> ui-body-<xsl:value-of select="$swatch"></xsl:value-of></xsl:when><xsl:otherwise> ui-body-inherit</xsl:otherwise></xsl:choose><xsl:if test="$corners"> ui-corner-all</xsl:if></xsl:attribute><xsl:if test="$swatch != ''"><xsl:attribute name="data-theme"><xsl:value-of select="$swatch"></xsl:value-of></xsl:attribute></xsl:if><xsl:variable name="dataStyle"><xsl:if test="$width != 'Auto'">width:<xsl:value-of select="$width"></xsl:value-of>;</xsl:if><xsl:if test="$height != 'Auto'">height:<xsl:value-of select="$height"></xsl:value-of>;</xsl:if></xsl:variable><xsl:if test="$dataStyle != ''"><xsl:attribute name="data-style"><xsl:value-of select="$dataStyle"></xsl:value-of></xsl:attribute></xsl:if><xsl:comment /></div><xsl:if test="not($lweb_design_mode)"><div class="lstd-audio-popup" data-role="popup" id="{$id_popup}" data-dismissible="false" data-history="false"><div data-role="header"><h1>Record audio</h1></div><div role="main" class="ui-content lstd-audio-popup-main"><div id="{$id}_timer" class="lstd-audio-timer"><div class="lstd-timer-elapsed"><span class="lstd-timer-min">00</span>:<span class="lstd-timer-sec">00</span></div></div><xsl:variable name="altSwatch"><xsl:choose><xsl:when test="$swatch = 'b'">a</xsl:when><xsl:otherwise>b</xsl:otherwise></xsl:choose></xsl:variable><xsl:variable name="btnClass"><xsl:text>ui-link ui-btn ui-shadow ui-btn-icon-left ui-btn-</xsl:text><xsl:value-of select="$altSwatch"></xsl:value-of><xsl:if test="$corners"> ui-corner-all</xsl:if></xsl:variable><div data-role="controlgroup" data-type="horizontal" data-mini="true" class="ui-controlgroup ui-controlgroup-horizontal ui-corner-all" data-enhanced="true"><div class="ui-controlgroup-controls lstd-audio-control"><a id="{$id}_play" href="#" data-role="button" class="{$btnClass} ui-first-child ui-icon-audio" role="button" data-enhanced="true">Play</a><a id="{$id}_rec" data-rec="true" href="#" data-role="button" class="{$btnClass} ui-icon-arrow-r" role="button" data-enhanced="true">Rec</a><a id="{$id}_save" href="#" data-role="button" class="{$btnClass} ui-last-child ui-icon-lstd-save" role="button" data-enhanced="true">Save</a></div></div><a id="{$id}_cancel" href="#" data-role="button" data-theme="{$altSwatch}" data-icon="delete" data-iconpos="notext" class="ui-btn-right ui-link ui-btn ui-btn-{$altSwatch} ui-icon-delete ui-btn-icon-notext ui-corner-all" role="button" data-enhanced="true">Cancel</a></div></div></xsl:if></div><xsl:if test="$addErrorDiv"><div id="{$id}_error" class="lstdFieldError"><xsl:value-of select="' '"></xsl:value-of><xsl:comment /></div></xsl:if></div></xsl:if></xsl:template></xsl:transform>