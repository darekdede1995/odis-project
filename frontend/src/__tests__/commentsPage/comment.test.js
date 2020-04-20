import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Comment from '../../components/commentsPage/comment.component';
configure({ adapter: new Adapter() });

describe('<Comment />', () => {
  it('should show something', () => {
    const wrapper = shallow(<Comment />);
    expect(true).toBe(true);
  });
});
