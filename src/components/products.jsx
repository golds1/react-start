'use strict';

var React = require('react');
var $ = require('jquery');

var ProductCateoryRow = React.createClass({
    render: function () {
        return (
            <tr>
                <th colSpan="2">{this.props.category}</th>
            </tr>
        );
    }
});

var ProductRow = React.createClass({
    render: function () {
        var name = this.props.product.stocked ?
            this.props.product.name :
            <span style={{color: 'red'}}>
                {this.props.product.name}
            </span>;
        console.log(name);
        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        );
    }
});


var ProductTable = React.createClass({
    render: function () {
        var rows = [];
        var lastCategory = null;

        this.props.products.forEach(function (product) {


            if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(<ProductCateoryRow category={product.category} key={product.category}/>);
            }
            rows.push(<ProductRow product={product} key={product.name}/>);
            lastCategory = product.category;
        }.bind(this));
        return (
            <table>
                <thread>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thread>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});

var SearchBar = React.createClass({
    handlerChange: function () {
        this.props.onUserInput(this.refs.filterTextInput.value, this.refs.inStockOnly.checked)
    },
    render() {
        return (
            <form>
                <input
                    ref="filterTextInput"
                    type="text"
                    value={this.props.filterText}
                    placeholder="Search..."
                    onChange={this.handlerChange}>
                    <p>
                        <input
                            ref="inStockOnly"
                            type="checkbox"
                            checked={this.props.inStockOnly}
                            onChange={this.handlerChange}
                        />
                        {' '}
                        Only show products in stock
                    </p>
                </input>
            </form>
        );
    }

});

var FilterableProductTable = React.createClass({

    getInitialState: function () {
        return {
            filterText: '',
            inStockOnly: false,
            products:[],
            error:''
        };
    },
    loadProducts: function () {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                this.setState({products: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
                this.setState({error: err.toString()});
            }.bind(this)
        });
    },
    componentDidMount() {
        this.loadProducts();

    },


    handleUserInput: function (filterText, inStockOnly) {
        this.setState({
            filterText: filterText,
            inStockOnly: inStockOnly
        });
    },
    render: function () {

        if (this.state.error !== '') {
           return <h3>Erro message: {this.state.error}</h3>;
        }

        return (
            <div>
                <h3>This is list of products</h3>
                <SearchBar onUserInput={this.handleUserInput} filterText={this.state.filterText}
                           inStockOnly={this.state.inStockOnly}/>
                <ProductTable products={this.state.products}
                              filterText={this.state.filterText}
                              inStockOnly={this.state.inStockOnly}
                />

            </div>
        );
    }
});




/*module.exports = {
 FilterableProductTable: FilterableProductTable
 };*/

module.exports = FilterableProductTable;

//exports.FilterableProductTable = FilterableProductTable;




