import * as React from 'react';
import styled from 'styled-components';
import { Editor, WithEditorActions, EditorContext } from '@atlaskit/editor-core';
import { CHANGE } from './constants';

export type Props = {
  onChange: (action: any, attrs: any) => void;
  defaultValue: string;
  actions: any
}

const Wrapper = styled.div`
  height: 100vh;
  overflow: auto;
`;

export class EditorContent extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    if (this.props.actions) {
      this.props.actions.replaceDocument(this.props.defaultValue);
    }
  }

  onChange(value: any) {
    this.props.onChange(CHANGE.UPDATE_CONTENT, { value });
  }

  render() {
    return (
      <Wrapper>
        <Editor
          appearance="full-width"
          allowLists={true}
          allowDate={true}
          allowIndentation={true}
          allowPanel={true}
          allowRule={true}
          allowTextColor={true}
          allowTextAlignment={true}
          allowTasksAndDecisions={true}
          allowCodeBlocks={true}
          onChange={this.onChange}
          allowLayouts={true}
        />
      </Wrapper>
    )
  }
}