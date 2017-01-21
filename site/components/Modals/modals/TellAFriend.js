import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import autoBind from 'react-autobind';
import { bindActionCreators } from 'redux';
import actions from '~/actions/index';
import styles from './TellAFriend.css';
import Block from '../../Block/Block';
import Form from '../../Form/Form';
import Input from '../../Input/Input';
import FormRow from '../../FormRow/FormRow';

// Sections

class TellAFriend extends React.Component {

  static propTypes = {
    close: PropTypes.func,
    modals: PropTypes.objectOf(PropTypes.object),
    visible: PropTypes.string,
  };

  constructor() {
    super();
    autoBind(Object.getPrototypeOf(this));
    this.state = {
      open: false,
      page: false,
    };
  }

  goTo(e, page) {
    if (page === 'close') {
      this.props.close(e);
    } else {
      page = e;
      this.setState({ page });
    }
  }

  render() {
    let top = window.outerWidth < 1025 ? 0 : 88;
    if (window.outerHeight < 810) {
      top = 0;
    }
    return (
      <div styleName="modal" className="modal" style={{ top: `${top}px` }}>
        <button href="#" className="modal-close" onClick={this.props.close}>x</button>
        <Block width="100%" background="green" className="bigger">
          ## Tell a Friend
          {'\n'}
          Lets write to them together!

          <div styleName="form">
            <Form list="" css={{ textAlign: 'left', padding: '20px 0' }}>
              <div css={{ marginBottom: '30px' }}>
                Hey, <input type="text" name="friend_name" placeholder="Friend's Name" /> it&apos;s me,
                <input type="text" name="sender_name" placeholder="Your Name" />
                I just found out about this <select><option>Awesome</option><option>Interesting</option><option>Rad</option><option>Inspiring</option><option>Super-cool</option></select>
                weekend in Portland, OR called the World Domination Summit. We should check it out this year!
              </div>
            </Form>
          </div>
        </Block>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    auth: state.auth.toJS(),
    modals: state.modals.toJS(),
  };
}

function mapDispatchToProps(dispatch) {
  return { act: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(TellAFriend, styles));
