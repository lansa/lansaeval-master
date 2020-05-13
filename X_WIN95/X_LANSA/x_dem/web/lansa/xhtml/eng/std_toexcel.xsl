<?xml version="1.0" encoding="UTF-8"?><!--(c) 2011, 2017 LANSA--><!--XHTML Export to Excel--><!--$Workfile:: std_toexcel.xsl $--><!--$UTCDate:: 2017-05-30 02:41:26Z $--><!--$Revision:: 6 $--><xsl:transform version="1.0" exclude-result-prefixes="lxml wd" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xslt="http://www.lansa.com/2002/XSL/Transform-Alias" xmlns:lxml="http://www.lansa.com/2002/XML/Runtime-Data" xmlns:wd="http://www.lansa.com/2002/XSL/Weblet-Design" xmlns="http://www.w3.org/1999/xhtml"><xsl:import href="std_keys.xsl"></xsl:import><xsl:import href="std_util.xsl"></xsl:import><xsl:import href="std_types.xsl"></xsl:import><xsl:output method="xml" omit-xml-declaration="yes" encoding="UTF-8" indent="yes"></xsl:output><xsl:template name="std_toexcel"><xsl:param name="name" select="generate-id()"></xsl:param><xsl:param name="listname"></xsl:param><xsl:param name="startingColumnIndex" select="0"></xsl:param><xsl:param name="numberOfColumns" select="-1"></xsl:param><xsl:param name="caption" select="key('variable', 'MTXT_XXEXPORTEXCEL')"></xsl:param><xsl:param name="hide_if" select="false()"></xsl:param><xsl:param name="pos_absolute_design"></xsl:param><xsl:param name="width_design"></xsl:param><xsl:param name="height_design"></xsl:param><xsl:param name="disabled" select="false()"></xsl:param><xsl:param name="title"></xsl:param><xsl:param name="text_class" select="''"></xsl:param><xsl:param name="tab_index"></xsl:param><xsl:if test="not($hide_if) or $lweb_design_mode"><button id="{$name}" type="button"><xsl:if test="$tab_index != ''"><xsl:attribute name="tabindex"><xsl:value-of select="$tab_index"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$title != ''"><xsl:attribute name="title"><xsl:value-of select="$title"></xsl:value-of></xsl:attribute></xsl:if><xsl:if test="$pos_absolute_design or $height_design or $width_design"><xsl:attribute name="data-style"><xsl:call-template name="make_size_and_pos_style_v2.private"><xsl:with-param name="caller_name" select="'std_button.xsl'"></xsl:with-param><xsl:with-param name="pos_absolute" select="$pos_absolute_design"></xsl:with-param><xsl:with-param name="height" select="$height_design"></xsl:with-param><xsl:with-param name="width" select="$width_design"></xsl:with-param></xsl:call-template></xsl:attribute></xsl:if><span><xsl:choose><xsl:when test="lweb_design_mode"><xsl:attribute name="class">ui-button-text <xsl:value-of select="$text_class"></xsl:value-of></xsl:attribute></xsl:when><xsl:otherwise><xsl:if test="$text_class != ''"><xsl:attribute name="class"><xsl:value-of select="$text_class"></xsl:value-of></xsl:attribute></xsl:if></xsl:otherwise></xsl:choose><xsl:value-of select="$caption"></xsl:value-of><xsl:comment /></span></button><xsl:variable name="xmlColumnId" select="descendant-or-self::lxml:column/@id"></xsl:variable><script type="text/javascript"><xsl:call-template name="apply-csp-nonce.private"></xsl:call-template><xsl:text disable-output-escaping="yes">//&lt;![CDATA[
</xsl:text>Lstd.Weblets.registerWeblet("<xsl:value-of select="$name"></xsl:value-of>", {init: Lstd.Weblets.stdToExcel.init}, {<xsl:text></xsl:text><xsl:text></xsl:text>listname: "<xsl:value-of select="$listname"></xsl:value-of>"<xsl:text></xsl:text><xsl:if test="$startingColumnIndex != 0">, startingColumnIndex: <xsl:value-of select="$startingColumnIndex"></xsl:value-of></xsl:if><xsl:if test="$numberOfColumns != -1">, numberOfColumns: <xsl:value-of select="$numberOfColumns"></xsl:value-of></xsl:if><xsl:if test="$disabled">, disabled: true</xsl:if>});<xsl:text></xsl:text><xsl:text disable-output-escaping="yes">//]]&gt;</xsl:text></script></xsl:if></xsl:template></xsl:transform>