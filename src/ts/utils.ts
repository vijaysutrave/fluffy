import { DEFAULT_CONTENT } from "./constants";
import { TabIdentifiers } from "./types";

export const createDefaultTab = (): TabIdentifiers => {
  return {
    content: DEFAULT_CONTENT,
    title: 'Untitled',
    id: Math.floor(Math.random() * 10000000),
    lastModified: new Date(),
    active_tab: true
  }
}
