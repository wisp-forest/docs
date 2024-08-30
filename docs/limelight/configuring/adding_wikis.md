---
title: Adding Wikis
project: limelight
---

The **Wiki** (`limelight:wiki`) extension has built-in support for querying the
[Minecraft Wiki](https://minecraft.wiki), but you might want to add support for other wikis (e.g. your
mod's wiki). For this use case, Limelight has a resource-pack-based way to add custom wikis (which is
used for the default Minecraft Wiki!).

Wikis are defined as resources under `assets/<namespace>/limelight/wiki/<wikiname>.json`, and have this
schema:
```typescript
interface WikiDescription {
    /**
     * The title of this wiki, to be shown in the results.
     * This uses the vanilla JSON text format.
     */
    title: JSONTextComponent;

    /**
     * A key that can be used to quickly search in this wiki via a bang.
     * For example, `mcwiki` allows you to search like `!mcwiki Creeper`
     */
    bangKey?: string;

    /**
     * The type of this wiki.
     * Limelight supports MediaWiki and MkDocs wikis by default, but new wiki sources
     * can be added by Limelight addons.
     */
    type: "limelight:media_wiki" | "limelight:mkdocs" | string;

    /**
     * The source of this wiki. Specific to this wiki's `type`.
     */
    source: unknown;

    /**
     * Language-specific source overrides.
     * Keys are language identifiers used by Minecraft and values are wiki sources.
     */
    languageOverrides?: { [languageKey: string]: unknown };
};
```

For example, here's a wiki definition for the docs site you're currently on:
```json title="assets/example-pack/limelight/wiki/wisp_forest.json"
{
    "type": "limelight:mkdocs",
    "title": "Wisp Forest",
    "bang_key": "wispforest",
    "source": {
        "url": "https://docs.wispforest.io",
        "includeParagraphs": false
    }
}
```

There are two built-in wiki source types in Limelight, though [you can always add your own](../extending/adding_wiki_sources.md):

- MediaWiki (`limelight:media_wiki`)  
    The wiki software used by Wikipedia and the Minecraft Wiki.
    ```typescript
    interface MediaWikiSource {
        /**
         * The MediaWiki API for this wiki.
         * For example, the English Minecraft Wiki's API is located at https://minecraft.wiki/api.php
         */
        url: string;
    }
    ```
- MkDocs (`limelight:mkdocs`)  
    The static site generator used by the Wisp Forest Docs.
    ```typescript
    interface MkDocsWikiSource {
        /**
         * The base URL of this wiki. (e.g. https://docs.wispforest.io for these docs)
        */
        url: string;

        /**
         * Whether to include specific paragraphs of pages in the results.
        * Defaults to `false`.
        */
        includeParagraphs?: boolean;
    }
    ```