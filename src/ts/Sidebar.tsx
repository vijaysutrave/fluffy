import * as React from 'react';
import styled from 'styled-components'
import { TabIdentifiers } from './types';
import { PageItem } from './PageItem';
import { CHANGE } from './constants';

export type SidebarProps = {
  onPageChange: (id: number) => void;
  pageIds: TabIdentifiers[];
  onChange: (action: any, attrs: any) => void;
  onPageAdd: (attrs: any) => void;
  onPageDelete: (attrs: any) => void;
}

const Wrapper = styled.div`
  max-height: 100vh;
  overflow: auto;
`;

const ActionsHeader = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 20px;
`

const AddIcon = styled.div`
  flex-grow: 1;
`;

const PlusIcon = styled.img`
  float: right;
  height: 20px;
  cursor: pointer;
`;

const PageTabs = styled.div`
  padding: 10px;
`;

export class Sidebar extends React.Component<SidebarProps, {}> {
  private onTitleChange: (attrs: any) => void;
  constructor(props: SidebarProps) {
    super(props);
    this.onTitleChange = props.onChange.bind(this, CHANGE.UPDATE_TITLE)
  }

  renderPageTabs() {
    return this.props.pageIds.map(page => {
      return (
        <PageItem
          key={page.id}
          page={page}
          onTitleUpdate={this.onTitleChange}
          onPageChange={this.props.onPageChange}
          onPageDelete={this.props.onPageDelete}
        />
      )
    });
  }

  render() {
    return (
      <Wrapper>
        <ActionsHeader>
          <AddIcon>
            <PlusIcon src="../../assets/add.svg" height="20" onClick={this.props.onPageAdd} title="Add page" />
          </AddIcon>
        </ActionsHeader>
        <PageTabs>
          {this.renderPageTabs()}
        </PageTabs>
      </Wrapper>
    )
  }
}