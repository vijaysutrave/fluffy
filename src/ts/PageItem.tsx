import * as React from 'react';
import styled from 'styled-components';
import { TabIdentifiers } from './Fluffy';
import dayjs from 'dayjs';
import { HTMLAttributes } from 'react';

export type Props = {
  page: TabIdentifiers;
  onTitleUpdate: (attrs: any) => void;
  onPageChange: (attrs: any) => void;
}

const Wrapper: React.ComponentClass<{isActive: boolean} & HTMLAttributes<{}>, any> = styled.div`
  border-bottom: 1px solid #ececec;
  padding: 10px;
  margin: 5px 0;
  background-color: ${(p: {isActive: boolean}) => p.isActive ?  '#e8e8e8' : ''};
  cursor: pointer;

  &: hover {
    background-color: #f1f1f1;
  }
`;

const InputWrapper = styled.input`
  display: block;
  border: none;
  font-size: 21px;
  padding: 5px 0;
  background-color: transparent;

  &:focus {
    outline: none
  }
`

const HeadingWrapper = styled.div`
  font-size: 21px;
  padding: 5px 0;
`;

export class PageItem extends React.Component<Props, {title: string, created: string}> { 
  constructor(props: Props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.state = {
      title: props.page.title,
      created: dayjs(props.page.lastModified).format('DD MMM')
    }
    this.onPageChange = this.onPageChange.bind(this);
  }

  onPageChange(e: any) {
    const id = e.currentTarget.dataset.id;
    this.props.onPageChange({pageId: +id});
  }

  onChange(e: any) {
    this.setState({
      title: e.target.value
    }, () => {
      this.props.onTitleUpdate({ title: this.state.title })
    })
  }

  render() {
    const { page } = this.props;
    const { title } = this.state;
    return (
      <Wrapper isActive={page.active_tab} onClick={this.onPageChange} data-id={page.id}>
        {page.active_tab ? (<InputWrapper value={title} onChange={this.onChange} />): (
          <HeadingWrapper>{title}</HeadingWrapper>
        )}
        <span>{this.state.created}</span>
      </Wrapper>
    )
  }
}