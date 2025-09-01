<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
    xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html>
      <head>
        <title>Sitemap Index</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; }
          h1 { color: #2b6cb0; }
          table { border-collapse: collapse; width: 100%; margin-top: 20px; }
          th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
          th { background: #2b6cb0; color: #fff; }
          tr:nth-child(even) { background: #f9f9f9; }
          a { color: #2b6cb0; text-decoration: none; }
        </style>
      </head>
      <body>
        <h1>Sitemap Index</h1>
        <table>
          <tr>
            <th>Sitemap</th>
            <th>Last Modified</th>
          </tr>
          <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
            <tr>
              <td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td>
              <td><xsl:value-of select="sitemap:lastmod"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
