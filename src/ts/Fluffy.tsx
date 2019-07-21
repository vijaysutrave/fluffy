import * as React from 'react';
import { Sidebar } from './Sidebar';
import { EditorContent } from './EditorContent';
import { CHANGE, UPDATE_TIMER } from './constants';
import { WithEditorActions, EditorContext } from '@atlaskit/editor-core';
import { createDefaultTab } from './utils';
import { TabIdentifiers, FluffyTabs } from './types';
import styled from 'styled-components';

declare var chrome: any;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const LeftSidebar = styled.div`
  width: 20%;
  border-right: 1px solid #ececec;
  float: left;
  height: 100%;
  box-sizing: border-box;
`;

const ContentArea = styled.div`
  height: 100%;
  width: 80%;
  float: right;
`;

const FluffyIcon = styled.span`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

export type ACTION = 'UPDATE_CONTENT' | 'DELETE_PAGE' | 'UPDATE_TITLE' | 'ADD_PAGE' | 'PAGE_CHANGE';

export class Fluffy extends React.Component<{}, { tabs?: TabIdentifiers[] }> {
  private activeTab: object | undefined;
  private actions: any;
  private onPageAdd: (attrs: any) => void;
  private onPageChange: (attrs: any) => void;
  private onPageDelete: () => void;
  private timer?: number;

  constructor(props: {}) {
    super(props);
    this.state = {
      tabs: undefined
    };
    this.onChange = this.onChange.bind(this);
    this.onPageChange = this.onChange.bind(this, 'PAGE_CHANGE');
    this.onPageAdd = this.onChange.bind(this, 'ADD_PAGE');
    this.onPageDelete = this.onChange.bind(this, 'DELETE_PAGE');
    this.onPageDeleteConfirm = this.onPageDeleteConfirm.bind(this);
  }

  componentDidMount() {
    chrome.storage.sync.get(['fluffy_tabs'], (result: any) => {
      if (!result.fluffy_tabs) {
        const newValue = [createDefaultTab()];
        (chrome as any).storage.sync.set({ 'fluffy_tabs': JSON.stringify(newValue) });
        this.setState({
          tabs: newValue
        });
        return;
      }
      let tabs: FluffyTabs = JSON.parse(result.fluffy_tabs);
      const activeTabExists = tabs.find(tab => tab.active_tab);
      if (!activeTabExists) {
        tabs[0].active_tab = true;
      }
      this.setState({
        tabs
      })
    });
  }

  onPageDeleteConfirm() {
    const result = window.confirm('Do you really want to delete the page? :(');
    if (result) {
      this.onPageDelete();
    }
  }

  getActiveTab() {
    return this.state.tabs!.find(tab => tab.active_tab);
  }

  onChange(action: ACTION, attrs?: { value?: any, title?: string, deleteId?: number, pageId: number }) {
    let updatedValue = this.state.tabs;
    let shouldReplaceDoc = false;

    switch (action) {
      case CHANGE.DELETE_PAGE: {
        const getActiveTabs = this.state.tabs!.filter(tab => tab.active_tab === false);
        if (!getActiveTabs.length) {
          updatedValue = [createDefaultTab()];
          shouldReplaceDoc = true;
          break;
        }
        updatedValue = getActiveTabs.map((tab, idx) => idx === 0 ? {
          ...tab,
          active_tab: true,
        } : tab);
        shouldReplaceDoc = true;
        break;
      }

      case CHANGE.PAGE_CHANGE: {
        if (!attrs || !attrs.pageId) {
          break;
        }
        updatedValue = this.state.tabs!.map(tab => {
          if (tab.active_tab && tab.id !== attrs.pageId) {
            return {
              ...tab,
              active_tab: false
            }
          }

          if (tab.id === attrs.pageId) {
            return {
              ...tab,
              active_tab: true
            }
          }
          return tab;
        });
        shouldReplaceDoc = true;
        break;
      }

      case CHANGE.UPDATE_CONTENT: {
        if (!attrs || !attrs.value) {
          break;
        }

        updatedValue = this.state.tabs!.map(tab => {
          return tab.active_tab ? {
            ...tab,
            content: attrs.value.state.doc,
            lastModified: new Date()
          } : tab;
        });
        break;
      }

      case CHANGE.ADD_PAGE: {
        updatedValue = this.state.tabs!.map(tab => {
          return tab.active_tab ? {
            ...tab,
            active_tab: false
          } : tab;
        });
        updatedValue = [createDefaultTab()].concat(updatedValue)
        shouldReplaceDoc = true;
        break;
      }


      case CHANGE.UPDATE_TITLE: {
        if (!attrs || !attrs.title) {
          break;
        }

        updatedValue = this.state.tabs!.map(tab => {
          return tab.active_tab ? {
            ...tab,
            title: attrs.title!,
            lastModified: new Date()
          } : tab;
        });
        break;
      }
    }

    this.debouncedSaveState(updatedValue);
    this.setState({
      tabs: updatedValue
    }, () => {
      if (shouldReplaceDoc) {
        this.actions.replaceDocument(JSON.stringify(this.getActiveTab()!.content))
      }
    });
  }

  debouncedSaveState(updatedValue?: TabIdentifiers[]) {
    if (this.timer) {
      clearTimeout(this.timer);
    }

    this.timer = setTimeout(() => {
      (chrome as any).storage.sync.set({ 'fluffy_tabs': JSON.stringify(updatedValue) });
    }, UPDATE_TIMER);
  }

  render() {
    if (!this.state.tabs) {
      return null;
    }
    const activeTab = this.state.tabs.find(tab => tab.active_tab);
    return (
      <Wrapper>
        <EditorContext>
          <WithEditorActions render={actions => {
            this.actions = actions;
            return (
              <>
                <LeftSidebar>
                  <Sidebar
                    onPageChange={this.onPageChange}
                    pageIds={this.state.tabs!}
                    onChange={this.onChange}
                    onPageAdd={this.onPageAdd}
                    onPageDelete={this.onPageDeleteConfirm}
                  />
                </LeftSidebar>
                <ContentArea>
                  <EditorContent
                    defaultValue={JSON.stringify(activeTab!.content)}
                    onChange={this.onChange}
                    actions={actions}
                  />
                </ContentArea>
              </>

            )
          }} />
        </EditorContext>
        <FluffyIcon>
          <img src="../../assets/fluffy.png" width="60" />
        </FluffyIcon>
      </Wrapper>
    )
  }
}

