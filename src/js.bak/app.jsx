var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var RouteHandler = require('react-router').RouteHandler;
var StateMixin = require('react-router').State;
var Redirect = require('react-router').Redirect;

/**
 * 图书列表组件
 */
var Books = React.createClass({
  mixins: [StateMixin],
  
  render: function() {
    
    var id = this.getParams().id;
    return id ? <Book id={id} /> : (
      <div>
        <ul>
          <li key={1}><Link to="books" params={{id: 1}}>活着</Link></li>
          <li key={2}><Link to="books" params={{id: 2}}>挪威的森林</Link></li>
          <li key={3}><Link to="books" params={{id: 3}}>从你的全世界走过</Link></li>
        </ul>
        <RouteHandler />
      </div>
    );
  }
});

/**
 * 单本图书组件
 */
var Book = React.createClass({
  render: function() {
    return (
      <article>
       <h1>这里是图书 id 为 {this.props.id} 的详情介绍</h1>
      </article>
    );
  }
});

/**
 * 电影列表组件
 */
var Movies = React.createClass({

  mixins: [StateMixin],
  
  render: function() {
    var id = this.getParams().id;
    return id ? <Movie id={id} /> : (
      <div>
        <ul>
          <li key={1}><Link to="movies" params={{id: 1}}>煎饼侠</Link></li>
          <li key={2}><Link to="movies" params={{id: 2}}>捉妖记</Link></li>
          <li key={3}><Link to="movies" params={{id: 3}}>西游记之大圣归来</Link></li>
        </ul>
        <RouteHandler />
      </div>
    );
  }
});

/**
 * 单部电影组件
 */
var Topbar = React.createClass({
  render: function() {
    return (
      <article>
        <h1>这里是电影 id 为 {this.props.id} 的详情介绍</h1>
      </article>
    );
  }
});

// 应用入口
var App = React.createClass({
  render: function() {
    return (
      // <div className="app">
      //   <nav>
      //     <Link to="movies">电影</Link>
      //     <Link to="books">图书</Link>
      //   </nav>
      //   <section>
      //     <RouteHandler />
      //   </section>
      // </div>
      <div className='app'>
        <RouteHandler />
        <div className='topbar'>
        </div>
        <div className='content'>
        </div>
      </div>
    );
  }
});


// 定义页面上的路由
var routes = (
  <Route handler={App}>
    <Route name="movies" path="/movies/:id?" handler={Movies} />
    <Route name="books" path="/books/:id?" handler={Books} />
  </Route>
);


// 将匹配的路由渲染到 DOM 中
ReactRouter.run(routes, function(Root){
  ReactDOM.render(<Root />, document.getElementById('app'));
});

