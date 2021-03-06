import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { graphql } from 'react-apollo';
import styled from 'styled-components';
import _ from 'lodash';
import { browserHistory } from 'react-router';
import moment from 'moment';
import Section from '../../components/Section/Section';
import Avatar from '../../components/Avatar/Avatar';
import Block from '../../components/Block/Block';
import Link from '../../components/Link/Link';
import actions from '../../actions';
import angler from '../../utils/angler';
import types from '../../utils/types';
import is from '../../utils/is';
import { Events as EventsQuery } from '../../queries';
import Event from '../../models/Event';
import Button from '../../components/Button/Button';
import C from '../../constants';
import User from '../../models/User';
import EventRow from './EventRow';
// import EventHead from './EventHead';

const Grid = styled.div`
  display: flex;
  margin-top: 40px;
`;
const Side = styled.div`
  min-height: 666px;
  width: 340px;
  padding: 16px;
`;

const Btn = styled(Button)`
  background: ${({ primary }) =>
    primary !== undefined && primary ? C.color.orange : C.color.canvas};
  color: ${({ primary }) =>
    primary !== undefined && primary ? C.color.canvas : C.color.orange};
  width: 100%;
  padding: 19px 16px 16px;
  font-size: 20px;
  margin-bottom: 16px
`;

const EventHead = styled.h3`
    font-size: 24px;
    font-family: Vitesse;
    line-height: 28px;
    font-weight: normal;
    margin-bottom: 16px;
    color: #0373A5;
    margin-top: 64px;
`;

export class EventComponent extends Component {
  lastDay: '';
  eventRow(event, Me, inx) {
    const ev = new Event(event);
    const day = ev.start.format('dddd[,] MMMM Do');
    let rowClass = inx % 2 === 0 ? 'row-even' : 'row-odd';
    if (this.props.format === 'contained') {
      rowClass += ` ${this.props.format}`;
    }

    if (this.lastDay !== day) {
      const style = this.lastDay === '' ? { marginTop: '0' } : {};
      this.lastDay = day;
      return (
        <div>
          <EventHead style={style}>{day}</EventHead>
          <EventRow rowClass={rowClass} event={event} me={Me} />
        </div>
      );
    }
    this.lastDay = day;
    return <EventRow rowClass={rowClass} event={event} me={Me} />;
  }
  render() {
    this.lastDay = '';
    const { data } = this.props;
    let events = data.events !== undefined ? data.events : [];
    const Me = new User(this.props.auth.me);
    const blockProps = {
      cols: '8',
      bleed: false,
      textAlign: 'left',
      margin: '20px 0',
      background: 'canvas',
      padding: '40px',
    };
    if (this.props.type === 'mine') {
      events = events.filter(event => Me.isAttendingEvent(event));
    }
    if (this.props.format === 'contained') {
      blockProps.margin = '0';
      blockProps.padding = '60px';
      blockProps.width = '100%';
      blockProps.background = 'white';
      blockProps.cols = false;
    }
    events = events.map((event, i) => this.eventRow(event, Me, i));
    return (
      <Block textAlign="left" width="100%">
        {this.props.title ? `## ${this.props.title}` : ''}
        <Block {...blockProps}>
          {events}
        </Block>
      </Block>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { act: bindActionCreators(actions, dispatch) };
}

function mapStateToProps(state) {
  return {
    auth: state.auth.toJS(),
    app: state.app.toJS(),
  };
}

EventComponent.propTypes = {
  children: types.children,
  app: types.app,
  location: types.location,
  act: types.actions,
  auth: types.auth,
};

export default graphql(EventsQuery, {
  options: props => {
    return {
      variables: {
        year: props.year,
        type: props.type === 'mine' ? null : props.type,
      },
    };
  },
})(connect(mapStateToProps, mapDispatchToProps)(EventComponent));
