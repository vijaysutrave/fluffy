import * as React from 'react';
import styled from 'styled-components'
import { TabIdentifiers } from './Fluffy';
import { PageItem } from './PageItem';
import { CHANGE } from './constants';


export type Props = {
  onPageChange: (id: number) => void;
  pageIds: TabIdentifiers[];
  onChange: (action: any, attrs: any) => void;
  onPageAdd: (attrs: any) => void;
}

const Wrapper = styled.div`

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


export class Sidebar extends React.Component<Props, {}> {
  private onTitleChange: (attrs: any) => void;
  constructor(props: Props) {
    super(props);

    this.addPage = this.addPage.bind(this);
    this.state = {
      pageIds: []
    }
    this.onTitleChange = props.onChange.bind(this, CHANGE.UPDATE_TITLE)
  }

  componentDidMount() {

  }

  addPage() {

  }

  renderPageTabs() {
    return this.props.pageIds.map(page => {
      return <PageItem key={page.id} page={page} onTitleUpdate={this.onTitleChange} onPageChange={this.props.onPageChange}/>
    });
  }

  render() {
    return (
      <Wrapper>
        <ActionsHeader>
          <AddIcon>
            <PlusIcon src="../../assets/add.svg" height="20" onClick={this.props.onPageAdd} />
          </AddIcon>
        </ActionsHeader>
        <PageTabs>
          {this.renderPageTabs()}
        </PageTabs>
      </Wrapper>
    )
  }
}