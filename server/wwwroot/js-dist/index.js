'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = require('grommet/components/App');

var _App2 = _interopRequireDefault(_App);

var _Header = require('grommet/components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Title = require('grommet/components/Title');

var _Title2 = _interopRequireDefault(_Title);

var _Split = require('grommet/components/Split');

var _Split2 = _interopRequireDefault(_Split);

var _Sidebar = require('grommet/components/Sidebar');

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Button = require('grommet/components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Menu = require('grommet/components/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Anchor = require('grommet/components/Anchor');

var _Anchor2 = _interopRequireDefault(_Anchor);

var _Search = require('grommet/components/Search');

var _Search2 = _interopRequireDefault(_Search);

var _Box = require('grommet/components/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Close = require('grommet/components/icons/base/Close');

var _Close2 = _interopRequireDefault(_Close);

var _Cloud = require('grommet/components/icons/base/Cloud');

var _Cloud2 = _interopRequireDefault(_Cloud);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GrommetApp = _react2.default.createClass({
  displayName: 'GrommetApp',

  render: function render() {
    return _react2.default.createElement(
      _App2.default,
      { centered: false },
      _react2.default.createElement(
        _Split2.default,
        null,
        _react2.default.createElement(
          _Sidebar2.default,
          { colorIndex: 'neutral-1', full: false },
          _react2.default.createElement(
            _Header2.default,
            { pad: 'medium', justify: 'between' },
            _react2.default.createElement(_Cloud2.default, { type: 'logo', size: 'large' }),
            _react2.default.createElement(
              _Title2.default,
              null,
              'Menu'
            ),
            _react2.default.createElement(_Button2.default, { icon: _react2.default.createElement(_Close2.default, null) })
          ),
          _react2.default.createElement(
            _Menu2.default,
            { primary: true },
            _react2.default.createElement(
              _Anchor2.default,
              null,
              'Status /Add Files?'
            ),
            _react2.default.createElement(
              _Anchor2.default,
              null,
              'About'
            )
          )
        ),
        _react2.default.createElement(
          _Box2.default,
          null,
          _react2.default.createElement(
            _Header2.default,
            { colorIndex: 'neutral-1', direction: 'row', justify: 'between', pad: { horizontal: 'small', vertical: 'small' } },
            _react2.default.createElement(_Button2.default, { icon: _react2.default.createElement(_Cloud2.default, { size: 'large', type: 'logo' }) }),
            _react2.default.createElement(
              _Title2.default,
              null,
              '\u266A MusicServer++ \u266B'
            ),
            _react2.default.createElement(_Search2.default, { inline: false, fill: false, size: 'small', placeHolder: 'Buscar' })
          )
        )
      )
    );
  }
});

var element = document.getElementById('content');
_reactDom2.default.render(_react2.default.createElement(GrommetApp), element);

// import Router from 'react-router';
// import RestWatch from './RestWatch';
// import { getCurrentLocale, getLocaleData } from 'grommet/utils/Locale';
// import { addLocaleData } from 'react-intl';
// import en from 'react-intl/locale-data/en';
// import Routes from './Routes';
// // import DevTools from './DevTools';
// import { Provider } from 'react-redux';
// import { IntlProvider } from 'react-intl';

// import store from './store';
// import history from './RouteHistory';
// import { init, routeChanged, loginSuccess } from './actions';


// function getLabel(label, count, colorIndex) {
//       return {
//         "label": label,
//         "value": count,
//         "units": count > 1 ? "Tasks" : 'Task',
//         "colorIndex": colorIndex
//       };
//     }

//     const TodoAppDashboard = (props) => {
//       const tasksMap = {
//         critical: 0,
//         ok: 0,
//         warning: 0
//       };

//       const items = props.tasks.map((task) => {

//         tasksMap[task.type] += 1;

//         return (
//           <tr>
//             <td><Grommet.Icons.Status value={task.type} small={true} /></td>
//             <td>{task.item}</td>
//           </tr>
//         );
//       });

//       return (
//         <Grommet.Tiles fill={true} flush={false}>
//           <Grommet.Tile align="center">
//             <Grommet.Meter series={[
//               getLabel('Fix Now', tasksMap.critical, 'critical'),
//               getLabel('Remember', tasksMap.warning, 'warning'),
//               getLabel('Enjoy', tasksMap.ok, 'ok')
//             ]} type="circle" />
//           </Grommet.Tile>
//           <Grommet.Tile>
//             <Grommet.Header><h3>My Tasks:</h3></Grommet.Header>
//             <Grommet.Table>
//               <tbody>
//                 {items}
//               </tbody>
//             </Grommet.Table>
//           </Grommet.Tile>
//         </Grommet.Tiles>
//       );
//     };

//     class MainComponent extends React.Component {
//       constructor () {
//         super();

//         this.state = {
//           tasks: [
//             {
//               type: 'critical',
//               item: 'The coffee pot needs to be cleaned.'
//             },
//             {
//               type: 'ok',
//               item: 'It\'s going to be a sunny day tomorrow.'
//             },
//             {
//               type: 'warning',
//               item: 'Don\'t forget your anniversary in two weeks.'
//             },
//             {
//               type: 'warning',
//               item: 'Pay my late bills.'
//             },
//             {
//               type: 'ok',
//               item: 'Go to the Sharks game tomorrow.'
//             },
//             {
//               type: 'ok',
//               item: 'Go to Santa Cruz, it\'s summer time.'
//             }
//           ]
//         };
//       }

//       render () {
//         return (
//           <Grommet.App centered={false}>
//             <Grommet.Split>
//               <Grommet.Sidebar colorIndex="neutral-1" full={false}>
//                 <Grommet.Header pad="medium" justify="between">
//                   <Grommet.Icons.Base.Cloud type="logo" size="large"/>
//                   <Grommet.Title>
//                     Menu
//                   </Grommet.Title>
//                   <Grommet.Button icon={<Grommet.Icons.Base.Close />} />
//                 </Grommet.Header>
//                 <Grommet.Menu primary={true}>
//                   <Grommet.Anchor>
//                     Navigation 1
//                   </Grommet.Anchor>
//                   <Grommet.Anchor>
//                     Navigation 2
//                   </Grommet.Anchor>
//                   <Grommet.Anchor>
//                     Navigation 3
//                   </Grommet.Anchor>
//                 </Grommet.Menu>
//               </Grommet.Sidebar>
//               <Grommet.Box>
//                 <Grommet.Header colorIndex="neutral-1" direction="row" justify="between" large={true} pad={{horizontal: 'small', vertical:'small'}}>
//                   <Grommet.Button icon={<Grommet.Icons.Base.Cloud size="large" type="logo"/>} />
//                   <Grommet.Title>♪ MusicServer ♫</Grommet.Title>
//                   <Grommet.Search inline={false} fill={false} size="small" placeHolder="Buscar" />
//                 </Grommet.Header>
//                 <TodoAppDashboard tasks={this.state.tasks} />
//               </Grommet.Box>
//             </Grommet.Split>
//           </Grommet.App>
//         );
//       }
//     };

//     const element = document.getElementById('content');
//     ReactDOM.render(React.createElement(MainComponent), element);