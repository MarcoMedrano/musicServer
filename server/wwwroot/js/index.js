import React from 'react';
import ReactDOM from 'react-dom';

import App from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Button from 'grommet/components/Button';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Search from 'grommet/components/Search';
import Box from 'grommet/components/Box';

import CloseIcon from 'grommet/components/icons/base/Close';
import CloudIcon from 'grommet/components/icons/base/Cloud';

import MainSidebar from './components/MainSidebar';
import FileStatusPanel from './components/FileStatusPanel';


var GrommetApp = React.createClass({
  render: function() {
    //var pane1 = <NavSidebar />;
    return (
          <App centered={false}>
            <Split>
              <MainSidebar />
              <Box full={true}>
                <Header colorIndex="neutral-1" direction="row" justify="between" pad={{horizontal: 'small', vertical:'small'}}>
                  <Button icon={<CloudIcon size="large" type="logo"/>} />
                  <Title>♪ MusicServer++ ♫</Title>
                  <Search inline={false} fill={false} dropAlign={{"right": "right"}} size="small" placeHolder="Buscar" />
                </Header>
                <FileStatusPanel />
              </Box>
            </Split>
          </App>
    );
  }
});

var element = document.getElementById('content');
ReactDOM.render(React.createElement(GrommetApp), element);

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