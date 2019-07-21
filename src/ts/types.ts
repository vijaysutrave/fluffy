export type TabIdentifiers = {
  active_tab: boolean;
  content: string | object;
  id: number;
  title: string;
  lastModified: Date;
}

export type FluffyTabs = TabIdentifiers[];