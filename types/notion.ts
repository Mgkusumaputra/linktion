// Config Types
export interface ConfigResult {
  id: string;
  properties: ConfigProperties;
}

interface ConfigProperties {
  config: TitleColumn;
  value: TextColumn;
}

// Tree Types
export interface TreeResult {
  id: string;
  properties: TreeProperties;
  icon: PageIcon;
}

interface TreeProperties {
  display: TitleColumn;
  redirect: TextColumn;
  click: NumberColumn;
  order: NumberColumn;
}

// Common Types
export type PageIcon = ExternalIcon | EmojiIcon | FileIcon | null;

interface ExternalIcon {
  type: 'external';
  external: {
    url: string;
  };
}
interface EmojiIcon {
  type: 'emoji';
  emoji: string;
}
interface FileIcon {
  type: 'file';
  file: { url: string };
}

interface TitleColumn {
  id: string;
  type: 'title';
  title: [RichText];
}

interface TextColumn {
  id: string;
  type: 'rich_text';
  rich_text: [RichText | undefined];
}

interface NumberColumn {
  id: string;
  type: 'number';
  number: number;
}

interface RichText {
  type: string;
  plain_text: string;
}
