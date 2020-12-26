import React, { Component } from 'react';
import { TablePagination } from 'react-pagination-table';
// https://github.com/miteshtagadiya/react-responsive-data-table
// https://reactjsexample.com/react-components-for-sorting-filtering-and-pagination-of-data/
// https://codesandbox.io/examples/package/react-data-table-component
// https://codesandbox.io/s/ccyuu
//https://codesandbox.io/s/react-table-with-pagination-and-searching-cxo0n

class Paginate extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() { 
        return ( 
            <div>
                 <TablePagination
                                // title="TablePagination"
                                // subTitle="Sub Title"
                                headers={this.props.Header}
                                data={this.props.data}
                                columns={this.props.col}
                                perPageItemCount={10}
                                totalCount={this.props.data.length}
                                arrayOption={[["size", 'all', ' ']]} />
            </div>
         );
    }
}
 
export default Paginate;