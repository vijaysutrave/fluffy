import styled from 'styled-components';
import * as React from 'react';
import { Sidebar } from './Sidebar';
import { EditorContent } from './EditorContent';
import { CHANGE } from './constants';
import { WithEditorActions, EditorContext } from '@atlaskit/editor-core';
// import console = require('console');


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

export type TabIdentifiers = {
  active_tab: boolean;
  content: string | object;
  id: number;
  title: string;
  lastModified: Date;
}


export type FluffyTabs = TabIdentifiers[];

export type ACTION = 'UPDATE_CONTENT' | 'DELETE_PAGE' | 'UPDATE_TITLE' | 'ADD_PAGE' | 'PAGE_CHANGE';

const createDefaultTab = (): TabIdentifiers => {
  return {
    content: { "version": 1, "type": "doc", "content": [{ "type": "paragraph", "content": [] }] },
    title: 'Untitled',
    id: Math.floor(Math.random() * 10000000),
    lastModified: new Date(),
    active_tab: true
  }
}

export class Fluffy extends React.Component<{}, { tabs: TabIdentifiers[] | undefined }> {
  private activeTab: object | undefined;
  private actions: any;
  private onPageAdd: (attrs: any) => void;
  private onPageChange: (attrs: any) => void;

  constructor(props: {}) {
    super(props);
    this.state = {
      tabs: undefined
    };
    this.onChange = this.onChange.bind(this);
    this.onPageChange = this.onChange.bind(this, 'PAGE_CHANGE');
    this.onPageAdd = this.onChange.bind(this, 'ADD_PAGE')
  }

  componentDidMount() {
    (chrome as any).storage.sync.get(['fluffy_tabs'], (result: any) => {
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

  getActiveTab() {
    return this.state.tabs!.find(tab => tab.active_tab);
  }

  onChange(action: ACTION, attrs: { value?: any, title?: string, deleteId?: number, pageId: number }) {
    let updatedValue = this.state.tabs;
    let shouldRerender = false;
    let shouldReplaceDoc = false;

    switch (action) {
      case CHANGE.DELETE_PAGE: {

      }

      case CHANGE.PAGE_CHANGE: {
        if (!attrs.pageId) {
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
        shouldRerender = true;
        shouldReplaceDoc = true;
        break;
      }

      case CHANGE.UPDATE_CONTENT: {
        if (!attrs.value) {
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
        shouldRerender = true;
        shouldReplaceDoc = true;
        break;
      }


      case CHANGE.UPDATE_TITLE: {
        if (!attrs.title) {
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

    (chrome as any).storage.sync.set({ 'fluffy_tabs': JSON.stringify(updatedValue) }, (value: any) => {
      console.log('value is set ', updatedValue)
    });
    this.setState({
      tabs: updatedValue
    }, () => {
      if (shouldReplaceDoc) {
        this.actions.replaceDocument(JSON.stringify(this.getActiveTab()!.content))

      }
    });
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
      </Wrapper>
    )
  }
}

