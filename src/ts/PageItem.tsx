import * as React from 'react';
import styled from 'styled-components';
import { TabIdentifiers } from './types';
import dayjs from 'dayjs';
import { HTMLAttributes } from 'react';

export type Props = {
  page: TabIdentifiers;
  onTitleUpdate: (attrs: any) => void;
  onPageChange: (attrs: any) => void;
  onPageDelete: (attrs: any) => void;
}

const Wrapper = styled.div`
  margin: 5px 0;
  border-bottom: 1px solid #ececec;
`;

const Item: React.ComponentClass<{ isActive: boolean } & HTMLAttributes<{}>, any> = styled.div`
  padding: 10px 15px;
  margin: 10px 0;
  background-color: ${(p: { isActive: boolean }) => p.isActive ? '#ffdb286b;' : ''};
  cursor: pointer;
`;

const InputWrapper = styled.input`
  display: block;
  border: none;
  font-size: 21px;
  padding: 5px 0;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`

const HeadingWrapper = styled.div`
  font-size: 21px;
  padding: 5px 0;
`;

const DeleteIcon = styled.span`
  float: right;
`;

const TrashIcon = styled.img``;

export class PageItem extends React.Component<Props, { title: string, created: string }> {
  constructor(props: Props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.state = {
      title: props.page.title,
      created: dayjs(props.page.lastModified).format('DD MMM')
    }
    this.onPageChange = this.onPageChange.bind(this);
    this.onPageDelete = this.onPageDelete.bind(this);
  }

  onPageChange(e: any) {
    const id = e.currentTarget.dataset.id;
    this.props.onPageChange({ pageId: +id });
  }

  onChange(e: any) {
    this.setState({
      title: e.target.value
    }, () => {
      this.props.onTitleUpdate({ title: this.state.title })
    })
  }

  onPageDelete(e: any) {
    e.stopPropagation();
    this.props.onPageDelete({});
  }

  render() {
    const { page } = this.props;
    const { title } = this.state;
    return (
      <Wrapper>
        <Item isActive={page.active_tab} onClick={this.onPageChange} data-id={page.id}>
          {page.active_tab ? (<InputWrapper value={title} onChange={this.onChange} />) : (
            <HeadingWrapper>{title}</HeadingWrapper>
          )}
          <span>{this.state.created}</span>
          {
            page.active_tab && (
              <DeleteIcon>
                <TrashIcon src="../../assets/trash.svg" height="14" alt="Delete" onClick={this.onPageDelete} title="Delete page" />
              </DeleteIcon>
            )
          }
        </Item>
      </Wrapper>
    )
  }
}
