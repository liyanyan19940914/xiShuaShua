'use strict';

const Home = React.createClass({

    getInitialState: function () {
        return {
          isClicked: true
        }
    },

    toggle: function () {
        if (this.state.isClicked === true) {
            $('#personal').css({color: '#3547A2'});
            $('#sideBar').animate({left: "0"}, 'fast');
            this.setState({isClicked: false});
        } else {
            $('#personal').css({color: '#ffffff'});
            $('#sideBar').animate({left: "-170"}, 'fast');
            this.setState({isClicked: true});
        }
    },

    render: function () {
        const clientHeight = $(window).height() - 50;
        const sideBar = {
            height: clientHeight,
            width: 185,
            backgroundColor: '#000' ,
            zIndex: 1
        };

        return <div className="row my-nav my-bg my-white-color my-home">
          <div className="row my-nav-padding">
            <ul className="nav">
              <li className="col-xs-4" id="personal" onClick={this.toggle}><span
                  className="glyphicon glyphicon-user">个人中心</span></li>
              <li className="col-xs-4 text-center">洗刷刷</li>
              <li className="col-xs-4 text-right"><span className="glyphicon glyphicon-heart">收藏</span></li>
            </ul>
          </div>
          <Carousel/>
          <FunctionBlock/>
          <div style={sideBar} className="row my-side-bar" id="sideBar">
            <ul className="nav text-left">
              <Sidebar attr='glyphicon glyphicon-plus' routeLink="/login" spanLabel="用户登陆"/>
              <Sidebar attr='glyphicon glyphicon-pencil' routeLink="/register" spanLabel="用户注册"/>
              <Sidebar attr='glyphicon glyphicon-heart-empty' routeLink="/dress" spanLabel="个性装扮"/>
              <Sidebar attr='glyphicon glyphicon-bookmark' routeLink="/active" spanLabel="激活会员"/>
              <Sidebar attr='glyphicon glyphicon-usd' routeLink="/recharge" spanLabel="会员充值"/>
            </ul>
            <div className="row my-sidebar-bottom">
              <div className="col-xs-6"><span className="my-setting-padding">设置</span></div>
              <ReactRouter.Link to="/login">
                <div className="col-xs-6 my-white-color"><span className="my-setting-padding">退出</span></div>
              </ReactRouter.Link>
            </div>
          </div>
        </div>
    }
});

const Carousel = React.createClass({
    render: function () {
        return <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                <li data-target="#carousel-example-generic" data-slide-to="3"></li>
                <li data-target="#carousel-example-generic" data-slide-to="4"></li>

            </ol>

            <div className="carousel-inner" role="listbox">
                <div className="item active img-rounded">
                    <div className="my-yellow my-img"><img src="src/img/home1.png" alt="..."/></div>
                </div>
                <div className="item img-rounded">
                    <div className="my-green my-img"><img src="src/img/home2.png"/></div>
                </div>
                <div className="item img-rounded">
                    <div className="my-red my-img"><img src="src/img/home3.png" alt="..."/></div>
                </div>
                <div className="item img-rounded">
                    <div className="my-pink my-img"><img src="src/img/home4.png" alt="..."/></div>
                </div>
                <div className="item img-rounded">
                    <div className="my-blue-green my-img"><img src="src/img/home5.png" alt="..."/></div>
                </div>
            </div>

            <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"> </span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"> </span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    }
});

const FunctionBlock = React.createClass({
    render: function () {
        return <div className="row text-center">
            <div className="row">
                <ReactRouter.Link to="/first">
                    <div className="col-xs-6 my-table">
                        <div className="my-server my-blue center-block my-left">
                            <span className="glyphicon glyphicon-tree-deciduous my-white-color"> </span>
                        </div>
                        <div className="my-text-left">自助洗浴</div>
                    </div>
                </ReactRouter.Link>
                <ReactRouter.Link to="/best">
                    <div className="col-xs-6 my-table">
                        <div className="my-server my-green center-block my-right">
                            <span className="glyphicon glyphicon-transfer my-white-color"> </span>
                        </div>
                        <div className="my-text-right">最佳推荐</div>
                    </div>
                </ReactRouter.Link>
            </div>
            <div className="row">
                <div className="col-xs-6 my-table">
                    <div className="my-server my-red center-block my-left">
                        <div className="glyphicon glyphicon-earphone my-white-color"></div>
                    </div>
                    <div className="my-text-left">客服热线</div>
                </div>
                <div className="col-xs-6 my-table">
                    <div className="my-server my-purple center-block my-right">
                        <span
                            className="glyphicon glyphicon-phone-alt glyphicon glyphicon-tower my-white-color"> </span>
                    </div>
                    <div className="my-text-right">众包服务</div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-6 my-table">
                    <div className="my-server my-blue-green center-block my-left">
                        <span className="glyphicon glyphicon-gift my-white-color"> </span>
                    </div>
                    <div className="my-text-left">洗澡套餐</div>
                </div>
                <div className="col-xs-6 my-table">
                    <div className="my-server my-gray center-block my-right">
                        <span className="glyphicon glyphicon-option-horizontal my-white-color"> </span>
                    </div>
                    <div className="my-text-right">更多服务</div>
                </div>
            </div>
        </div>
    }
});

const Sidebar = React.createClass({
  getInitialState: function () {
    return {
      spanAttr:'my-logo-padding ',
      routerLink: '',
      label: ''
    }
  },
  componentDidMount: function () {
    const attrStr = this.state.spanAttr + this.props.attr;
    this.setState({spanAttr: attrStr});
    this.setState({routerLink: this.props.routeLink});
    this.setState({label: this.props.spanLabel});
  },

  render: function () {
    return <ReactRouter.Link to={this.state.routerLink}>
      <li className="my-white-color">
        <span className={this.state.spanAttr}> </span>{this.state.label}
      </li>
    </ReactRouter.Link>
  }
});


export default Home;