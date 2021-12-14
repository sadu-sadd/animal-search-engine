const React = require("react");
const ReactDOM = require("react-dom");
const SearchForm = require("./components/searchForm");
const Results = require("./components/results");
const Api = require("./api");
const Header=require("./Header.js");

class App extends React.Component{
    constructor(){
        super();
        this.setQuery.bind(this);
        this.setState.bind(this);
        this.runSearch.bind(this);
    }
    componentWillMount(){
        this.setState({ q: "", data: [] });
    }

    setQuery(e) {
        this.setState({ q: e.target.value, data: this.state.data});
    }

    async runSearch(e){
        e.preventDefault();
        const data =await Api.search(this.state.q);
        this.setState({q: this.state.q,data});
    }

    render(){
        return(
            <div>
                <Header/>
                <SearchForm
                    onSubmit={e => this.runSearch(e)}
                    onChange={e => this.setQuery(e)} 
                />
                <Results results={this.state.data}/>
            </div>
        );
    }
};

ReactDOM.render(<App/>,document.querySelector("#root"));