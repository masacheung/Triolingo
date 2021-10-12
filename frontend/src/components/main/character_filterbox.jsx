import React from 'react';
import { Checkbox } from 'antd';

const CheckboxGroup = Checkbox.Group;

const charactersBox = [];
for(let i=97; i<=122; i++){
    charactersBox.push(String.fromCharCode(i))
};

const defaultCheckedList = ['a'];

class CharacterFilterbox extends React.Component {
    state = {
        checkedList: defaultCheckedList,
        indeterminate: true,
        checkAll: false,
    };

    onChange = checkedList => {
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && checkedList.length < charactersBox.length,
            checkAll: checkedList.length === charactersBox.length,
        });
    };

    onCheckAllChange = e => {
        this.setState({
        checkedList: e.target.checked ? charactersBox : [],
        indeterminate: false,
        checkAll: e.target.checked,
        });
    };

    render() {
    return (
      <div>
        <div style={{ borderBottom: '1px solid #E9E9E9' }}>
          <Checkbox
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
          >
            Check all
          </Checkbox>
        </div>
        <br />
        <CheckboxGroup
          options={charactersBox}
          value={this.state.checkedList}
          onChange={this.onChange}
        />
      </div>
    );
  }

}

export default CharacterFilterbox;
