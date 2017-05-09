import { gql } from 'react-apollo';

export const Event = gql`
  query Event($slug: String!) {
    event(slug: $slug){
      event_id
      format
      type
      who
      what
      descr
      address
      slug
      bios
      start
      end
      place
      lat
      lon
      max
      num_rsvps
      free_max
      num_free
      venue_note
      hosts {
        first_name
        last_name
        user_id
      }
    }
  }
`;

// Just using this to prevent eslint until we have 2 queries
export const Events = gql`
  query Events($year: String!, $type: String!) {
    events(year: $year, type: $type){
      format
      type
      who
      what
      descr
      address
      slug
      start
      end
      lat
      lon
      max
      num_rsvps
      free_max
      num_free
      hosts {
        first_name,
        last_name,
        user_id,
      }
    }
  }
`;
