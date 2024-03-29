import React, { Component, } from 'react';
import { StyleSheet, } from 'react-native';
import PropTypes from 'prop-types';
import { ListView, } from '@ant-design/react-native';
import Page from '../bean/Page';
import { fetchData, } from '../util/FetchUtil';

export default class BaseListComponent extends Component {
  static propTypes = {
    url: PropTypes.string,
    renderItem: PropTypes.func,
    numColumns: PropTypes.number,
    header:PropTypes.func,
  }

  static defaultProps={
    numColumns:1,
  }

  _onFetch = (page = 1, startFetch, abortFetch) => {
    fetchData(this.props.url, new Page(page))
      .then((res) => {
        const { result, } = res;
        let rowData = Array.from(result);
        if (page > res.totalPage) {
          rowData = [];
        }
        startFetch(rowData);
      }).catch((err) => {
        abortFetch();
      }
      );
  }

  render() {
    return (
      <ListView
        header={this.props.header}
        numColumns={this.props.numColumns}
        onFetch={this._onFetch}
        renderItem={this.props.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({

});
