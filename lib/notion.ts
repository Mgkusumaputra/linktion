import { Client } from '@notionhq/client';

import { ConfigResult, PageIcon, TreeResult } from '../types/notion';

const NOTION_INTEGRATION_SECRET =
  process.env.NEXT_PUBLIC_NOTION_INTEGRATION_SECRET;
const NOTION_CONFIG_DATABASE_ID =
  process.env.NEXT_PUBLIC_NOTION_CONFIG_DATABASE_ID;
const NOTION_TREE_DATABASE_ID = process.env.NEXT_PUBLIC_NOTION_TREE_DATABASE_ID;

const notion = new Client({
  auth: NOTION_INTEGRATION_SECRET,
});

export type Config = {
  id: string;
  config: string;
  value: string;
};

export const getConfigData = async () => {
  if (!NOTION_CONFIG_DATABASE_ID) {
    throw new Error('NEXT_PUBLIC_NOTION_CONFIG_DATABASE_ID env is not defined');
  }

  const response = await notion.databases.query({
    database_id: NOTION_CONFIG_DATABASE_ID,
  });

  const dataResults = response.results as unknown as ConfigResult[];

  const configData: Config[] = dataResults.map((result) => ({
    id: result.id,
    config: result.properties.config.title[0]?.plain_text,
    value: result.properties.value.rich_text[0]?.plain_text ?? '',
  }));

  return configData;
};

export type Tree = {
  id: string;
  redirect: string;
  display: string;
  order: number;
  click: number;
  icon: PageIcon;
};

export const getSocialTree = async () => {
  if (!NOTION_TREE_DATABASE_ID) {
    throw new Error('NEXT_PUBLIC_NOTION_TREE_DATABASE_ID env is not defined');
  }

  const response = await notion.databases.query({
    database_id: NOTION_TREE_DATABASE_ID,
  });

  const dataResults = response.results as unknown as TreeResult[];

  const treeData: Tree[] = dataResults
    .map((result) => ({
      id: result.id,
      display: result.properties.display.title[0]?.plain_text,
      redirect: result.properties.redirect.rich_text[0]?.plain_text ?? '',
      click: result.properties.click.number,
      order: result.properties.order.number,
      icon: result.icon,
    }))
    .sort((a, b) => a.order - b.order);

  return treeData;
};

export const getRedirect = async (slug: string) => {
  if (!NOTION_TREE_DATABASE_ID) {
    throw new Error('NEXT_PUBLIC_NOTION_TREE_DATABASE_ID env is not defined');
  }

  const response = await notion.databases.query({
    database_id: NOTION_TREE_DATABASE_ID,
    filter: {
      property: 'display',
      title: { equals: slug },
    },
  });

  const dataResults = response.results[0] as unknown as TreeResult;

  const redirectUrl: Tree = {
    id: dataResults.id,
    display: dataResults.properties.display.title[0]?.plain_text,
    redirect: dataResults.properties.redirect.rich_text[0]?.plain_text ?? '',
    click: dataResults.properties.click.number,
    order: dataResults.properties.order.number,
    icon: dataResults.icon,
  };

  return redirectUrl;
};

export const incrementLinkCount = async (linktree: Tree) => {
  if (!NOTION_TREE_DATABASE_ID) {
    throw new Error('NEXT_PUBLIC_NOTION_TREE_DATABASE_ID env is not defined');
  }

  if (!linktree.id) {
    throw new Error('page ID is not found');
  }

  await notion.pages.update({
    page_id: linktree.id,
    properties: {
      click: {
        number: Number(linktree.click + 1),
      },
    },
  });
};
